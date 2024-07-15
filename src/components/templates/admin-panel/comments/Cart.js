"use client"
import { useRouter } from "next/navigation"

// SweetAlert
import Swal from "sweetalert2"

// Icons
import { FaStar } from "react-icons/fa"

export default function Cart({ _id, username, email, body, score, isAccept, productID, date }) {

    const router = useRouter()

    const showCommentBody = () => {
        Swal.fire({
            text: body,
            confirmButtonText: "باشه"
        })
    }

    const deleteComment = () => {
        Swal.fire({
            title: "آیا میخواهید این کامنت را حذف کنید؟",
            icon: 'question',
            showDenyButton: true,
            denyButtonText: "لغو",
            confirmButtonText: "بله"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch('/api/comments', {
                    method: "DELETE",
                    body: JSON.stringify({ id: _id })
                })
                if (res.status === 200) {
                    Swal.fire({
                        title: "کامنت موردنظر با موفقیت حذف شد.",
                        icon: "success",
                        confirmButtonText: "باشه"
                    })
                    router.refresh()
                }
            }
        })
    }

    // const answerToTicket = () => {
    //     Swal.fire({
    //         title: "لطفا پاسخ موردنظر را وارد کنید",
    //         input: "text",
    //         showDenyButton: true,
    //         denyButtonText: "لغو",
    //         confirmButtonText: "ثبت پاسخ"
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             const answer = {
    //                 title,
    //                 body: result.value,
    //                 department,
    //                 subDepartment,
    //                 priority,
    //                 ticketID: _id
    //             }
    //             const res = await fetch('/api/tickets/answer', {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify(answer)
    //             })
    //             if (res.status === 201) {
    //                 Swal.fire({
    //                     title: "پاسخ مورد نظر با موفقیت ثبت شد.",
    //                     icon: "success",
    //                     confirmButtonText: "باشه",
    //                 })
    //                 router.refresh()
    //             }
    //         }
    //     })
    // }

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
                    Swal.fire({
                        title: "کاربر مورد نظر با موفقیت بن شد",
                        icon: "success",
                        confirmButtonText: "باشه",
                    })
                    router.refresh()
                }
            }
        })
    }

    const acceptComment = async () => {
        const res = await fetch('/api/comments/accept', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: _id })
        })
        if (res.status === 200) {
            Swal.fire({
                title: "کامنت مورد نظر با موفقیت تایید شد",
                icon: "success",
                confirmButtonText: "باشه",
            }).then(() => {
                router.refresh();
            });
        }
    }

    const rejectComment = async () => {
        const res = await fetch('/api/comments/reject', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: _id })
        })
        if (res.status === 200) {
            Swal.fire({
                title: "کامنت مورد نظر با موفقیت رد شد",
                icon: "success",
                confirmButtonText: "باشه",
            }).then(() => {
                router.refresh();
            });
        }
    }

    return (
        <div className=" flex justify-between items-center gap-10 w-full hover:bg-gray-100 rounded-lg p-3 transition-colors">
            <span className={`text-white min-w-24 text-center p-2 rounded-md text-sm ${isAccept ? 'bg-green-500' : "bg-zinc-400"}`} >
                {
                    isAccept ? "تایید شده" : "در انتظار تایید"
                }
            </span>
            <span className=' max-w-44 min-w-44 text-center'>{username}</span>
            <span className=' max-w-44 min-w-44 text-center'>{email}</span>
            <span className='flex justify-center items-center max-w-44 min-w-44 text-center'>
                {
                    new Array(score).fill(0).map((star, index) => <FaStar key={index} className=' text-yellow-400' />)
                }
                {
                    new Array(5 - score).fill(0).map((star, index) => <FaStar key={index} className=' text-zinc-300' />)
                }
            </span>
            <span className=' max-w-44 min-w-44 text-center'>{productID?.name}</span>
            <div className=" flex justify-center items-center gap-5 text-sm">
                <span>
                    {
                        new Date(date).toLocaleDateString("fa-IR")
                    }
                </span>
                <span className=' bg-sky-500 text-white min-w-20 text-center p-2  rounded-md ' onClick={showCommentBody}>مشاهده</span>
                <span className=' bg-red-500 text-white min-w-20 text-center p-2  rounded-md ' onClick={deleteComment}>حذف</span>
                {
                    isAccept ? (
                        <span className=' bg-rose-500 text-white min-w-20 text-center p-2  rounded-md ' onClick={rejectComment}>رد</span>
                    ) : (
                        <span className=' bg-blue-500 text-white min-w-20 text-center p-2  rounded-md ' onClick={acceptComment}>تایید</span>
                    )
                }
                <span className=' bg-primary text-white min-w-20 text-center p-2  rounded-md ' >پاسخ</span>
                <span className=' bg-gray-500 text-white min-w-20 text-center p-2  rounded-md ' onClick={banUser}>بن</span>
            </div>
        </div >
    )
}
