"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

// Icons
import { IoBan, IoTrash } from 'react-icons/io5'
import { MdEdit } from 'react-icons/md';
import { FaArrowsRotate } from 'react-icons/fa6';

// SweetAlert
import Swal from 'sweetalert2';

export default function UserBox({ _id, name, email, role, phone }) {
    const router = useRouter()
    const changeRole = async () => {
        Swal.fire({
            title: `آیا میخواهید نقش را به ${role === 'USER' ? 'مدیر' : "کاربر"} تغییر دهید؟`,
            text: `با این کار نقش ${role === "USER" ? "کاربر" : "مدیر"} به ${role === "USER" ? "مدیر" : "کاربر"} تغییر خواهد یافت.`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "بله",
            cancelButtonText: "خیر"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch('/api/user/role', {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ id: _id })
                })
                if (res.status === 200) {
                    Swal.fire({
                        title: "تغییر سطح با موفقیت انجام شد.",
                        icon: "success",
                        confirmButtonText: "باشه",
                    })
                    router.refresh()
                }
            }
        })
    }

    const deleteUser = () => {
        Swal.fire({
            title: "آیا میخواهید این کاربر را حذف کنید؟",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "بله",
            cancelButtonText: "خیر"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch("/api/user", {
                    method: "DELETE",
                    body: JSON.stringify({ id: _id })
                })
                if (res.status === 200) {
                    Swal.fire({
                        title: "کاربر مورد نظر با موفقیت حذف شد",
                        icon: "success",
                        confirmButtonText: "باشه",
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

    const editUser = () => {
        const newUserInfo = {
            id: _id,
            name: null,
            email: null,
            phone: null,
        }
        Swal.fire({
            title: "تغییر نام کاربری",
            text: "اگر نمیخواهید این قسمت را تغییر دهید به مرحله بعد بروید",
            input: "text",
            showCancelButton: true,
            cancelButtonText: "لغو",
            confirmButtonText: "بعدی"
        }).then(result => {
            if (result.isConfirmed) {
                newUserInfo.name = result.value ? result.value : name
                Swal.fire({
                    title: "تغییر ایمیل",
                    text: "اگر نمیخواهید این قسمت را تغییر دهید به مرحله بعد بروید",
                    input: "text",
                    showCancelButton: true,
                    cancelButtonText: "لغو",
                    confirmButtonText: "بعدی"

                }).then(result => {
                    if (result.isConfirmed) {
                        newUserInfo.email = result.value ? result.value : email
                        Swal.fire({
                            title: "تغییر شماره موبایل",
                            text: "اگر نمیخواهید این قسمت را تغییر دهید به مرحله بعد بروید",
                            input: "number",
                            showCancelButton: true,
                            cancelButtonText: "لغو",
                            confirmButtonText: "بعدی"
                        }).then(async (result) => {
                            if (result.isConfirmed) {
                                newUserInfo.phone = result.value ? result.value : phone
                                const res = await fetch('/api/user', {
                                    method: "PUT",
                                    body: JSON.stringify(newUserInfo)
                                })
                                if (res.status === 200) {
                                    Swal.fire({
                                        title: "اطلاعات کاربر مورد نظر با موفقیت تغییر یافت",
                                        icon: "success",
                                        confirmButtonText: "باشه",
                                    })
                                    router.refresh()
                                }
                            }
                        })
                    }
                })
            }
        })
    }


    
    return (
        <div className=' w-80 p-5 bg-white hover: border-1 shadow hover:shadow-lg rounded-2xl transition-shadow'>
            <div className=" flex justify-between items-center border-b-1 pb-3">
                <div className="">
                    <h1 className=' text-base'>{name}</h1>
                    <h2 className=' text-xs'>{email ? email : 'ایمیل یافت نشد'}</h2>
                </div>
                <Image
                    src={'/images/png/user-icon.png'}
                    alt='user-icon'
                    width={55}
                    height={0}
                    className=' rounded-full border-1'
                />
            </div>
            <div className=" flex flex-col gap-3 py-5">
                <div className=" flex justify-between items-center">
                    <span className='text-xs text-zinc-500'>شناسه</span>
                    <span className=' text-sm'>{_id}</span>
                </div>
                <div className=" flex justify-between items-center">
                    <span className='text-xs text-zinc-500'>شماره موبایل</span>
                    <span className=' text-sm'>{phone}</span>
                </div>
                <div className=" flex justify-between items-center">
                    <span className='text-xs text-zinc-500'>نقش</span>
                    <span className=' text-sm'>{role === "ADMIN" ? 'مدیر' : 'کاربر'}</span>
                </div>
            </div>
            <div className="flex justify-between items-center text-lg border-t-1 pt-3">
                <span className='text-xs text-zinc-500'>گزینه ها</span>
                <div className=" flex justify-center items-center gap-5">
                    <abbr title="حذف">
                        <div className="  text-red-600 cursor-pointer" onClick={deleteUser}>
                            <IoTrash />
                        </div>
                    </abbr>
                    <abbr title="تغییر سطح">
                        <div className=" text-base  text-sky-600 cursor-pointer" onClick={changeRole}>
                            <FaArrowsRotate />
                        </div>
                    </abbr>
                    <abbr title="ویرایش">
                        <div className="  text-green-600 cursor-pointer" onClick={editUser}>
                            <MdEdit />
                        </div>
                    </abbr>
                    <abbr title="بن">
                        <div className="  text-zinc-600 cursor-pointer" onClick={banUser}>
                            <IoBan />
                        </div>
                    </abbr>
                </div>
            </div>
        </div>
    )
}
