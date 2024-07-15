"use client"

import { useRouter } from "next/navigation"
// SweetAlert
import Swal from "sweetalert2"

export default function Cart({ _id, code, percent, maxUse, uses }) {

    const router = useRouter()

    const deleteDiscount = async () => {
        Swal.fire({
            title: "آیا میخواهید این کد تخفیف را حذف کنید؟",
            icon: "question",
            showDenyButton: true,
            denyButtonText: "خیر",
            confirmButtonText: "بله"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch('/api/discounts', {
                    method: "DELETE",
                    body: JSON.stringify({ id: _id })
                })
                if (res.status === 200) {
                    Swal.fire({
                        title: "کد تخفیف موردنظر با موفقیت حذف شد.",
                        icon: "success",
                        confirmButtonText: "بله"
                    })
                    router.refresh()
                }
            }
        })
    }

    return (
        <div className=" flex justify-between items-center gap-10 w-full hover:bg-gray-100 rounded-lg p-3 transition-colors">
            <span className={`${uses === maxUse ? "bg-zinc-400" : "bg-green-500"}  text-white text-xs min-w-24 p-2 mr-2  rounded-md text-center`}>{uses === maxUse ? "منقضی شده" : "قابل استفاده"}</span>
            <span className=' bg-teal-500 text-white px-4 py-1 mr-2  rounded-md max-w-44 min-w-44 text-center'>{code}</span>
            <span className=' max-w-44 min-w-44 text-center'>
                درصد تخفیف:
                <span className=' bg-blue-500 text-white text-center px-4 py-1 mr-2  rounded-md' >
                    {percent}%
                </span>
            </span>
            <span className=' max-w-44 min-w-44 text-center'>
                حداکثر استفاده:
                <span className=' bg-zinc-500 text-white text-center px-4 py-1 mr-2  rounded-md' >
                    {maxUse}
                </span>
            </span>
            <span className=' max-w-52 min-w-52 text-center'>
                دفعات استفاده شده:
                <span className=' bg-zinc-500 text-white text-center px-4 py-1 mr-2  rounded-md ' >
                    {uses}
                </span>

            </span>
            <div className=" flex justify-center items-center gap-5 text-xs">
                <span className=' bg-red-500 text-white min-w-24 text-center p-2  rounded-md ' onClick={deleteDiscount}>حذف</span>
            </div>
        </div>
    )
}
