"use client"
import { useRouter } from "next/navigation"

// SweetAlert
import Swal from "sweetalert2"
import toastAlert from "@/utils/toastAlert"

export default function Cart({ _id, name, email, message }) {

    const router = useRouter()

    const showContactBody = () => {
        Swal.fire({
            text: message,
            confirmButtonText: "باشه"
        })
    }

    const deleteContact = () => {
        Swal.fire({
            title: "آیا میخواهید این پیغام را حذف کنید؟",
            icon: "question",
            showDenyButton: true,
            denyButtonText: "خیر",
            confirmButtonText: "بله"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch('/api/contact', {
                    method: "DELETE",
                    body: JSON.stringify({ id: _id })
                })
                if (res.status === 200) {
                    toastAlert.fire({
                        text: "پیغام موردنظر با موفقیت حذف شد.",
                        icon: "success",
                        confirmButtonText: "باشه"
                    })
                    router.refresh()
                }
            }
        })
    }

    return (
        <div className=" flex justify-between items-center gap-10 w-full hover:bg-gray-100 rounded-lg p-3 transition-colors">
            <span className=' max-w-44 min-w-44 text-center'>{name}</span>
            <span className=' max-w-44 min-w-44 text-center'>{email}</span>
            <div className=" flex justify-center items-center gap-5 text-sm">
                <span className=' bg-sky-500 text-white min-w-20 text-center p-2  rounded-md ' onClick={showContactBody}>مشاهده</span>
                <span className=' bg-red-500 text-white min-w-20 text-center p-2  rounded-md ' onClick={deleteContact}>حذف</span>
            </div>
        </div >
    )
}
