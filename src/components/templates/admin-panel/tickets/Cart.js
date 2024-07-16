"use client"
import toastAlert from "@/utils/toastAlert";
import { useRouter } from "next/navigation"

// Icons
import { FcHighPriority } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { FcLowPriority } from "react-icons/fc";
// SweetAlert
import Swal from "sweetalert2"

export default function Cart({ _id, user, title, body, department, subDepartment, priority, createdAt, hasAnswer }) {

    const router = useRouter()

    const showTicketBody = () => {
        Swal.fire({
            text: body,
            confirmButtonText: "باشه"
        })
    }


    const answerToTicket = () => {
        Swal.fire({
            title: "لطفا پاسخ موردنظر را وارد کنید",
            input: "text",
            showDenyButton: true,
            denyButtonText: "لغو",
            confirmButtonText: "ثبت پاسخ"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const answer = {
                    title,
                    body: result.value,
                    department,
                    subDepartment,
                    priority,
                    ticketID: _id
                }
                const res = await fetch('/api/tickets/answer', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(answer)
                })
                if (res.status === 201) {
                    toastAlert.fire({
                        title: "پاسخ مورد نظر با موفقیت ثبت شد.",
                        icon: "success",
                    })
                    router.refresh()
                }
            }
        })
    }

    const banUser = () => {
        Swal.fire({
            title: "آیا میخواهید این کاربر را بن کنید؟",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "بله",
            cancelButtonText: "خیر"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch("/api/user/ban", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        phone
                    })
                })
                if (res.status === 200) {
                    toastAlert.fire({
                        title: "کاربر مورد نظر با موفقیت بن شد",
                        icon: "success",
                    })
                    router.refresh()
                }
            }
        })
    }

    return (
        <div className=" flex justify-between items-center gap-10 w-full  hover:bg-gray-100 rounded-lg p-3 transition-colors">
            <span className={` min-w-24 flex justify-center items-center text-center text-2xl rounded-md `}>{
                priority === 3 ? <FcHighPriority /> : priority === 2 ? <FcMediumPriority /> : <FcLowPriority />
            }</span>
            <span className={` ${hasAnswer ? "bg-green-500" : "bg-zinc-500"}  text-white min-w-24 text-center text-xs p-2  rounded-md `}>{hasAnswer ? "پاسخ داده شده" : "در انتظار پاسخ"}</span>
            <span className=' max-w-44 min-w-44 text-center'>{user?.phone}</span>
            <span className=' max-w-44 min-w-44 text-center'>{title}</span>
            <span className=' max-w-44 min-w-44 text-center'>{department.title}</span>
            <div className=" flex justify-center items-center gap-5 text-xs">
                <span className=' flex-grow w-24 text-center text-gray-500 text-sm'>
                    {
                        new Date(createdAt).toLocaleDateString("fa-IR")
                    }
                </span>
                <span className=' bg-sky-500 text-white min-w-24 text-center p-2  rounded-md ' onClick={showTicketBody}>مشاهده</span>
                <span className=' bg-green-500 text-white min-w-24 text-center p-2  rounded-md ' onClick={answerToTicket}>پاسخ</span>
                <span className=' bg-gray-500 text-white min-w-24 text-center p-2  rounded-md ' onClick={banUser}>بن</span>
            </div>
        </div>
    )
}
