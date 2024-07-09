"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Components
import Button from "@/components/modules/Button/Button";
import FormInput from "@/components/modules/FormInput/FormInput";

// Icons
import { IoCloudUpload, IoTrash } from "react-icons/io5";

// SweetAlert
import Swal from "sweetalert2";

export default function UserDetails() {

    const router = useRouter()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const getUserInfos = async () => {
            const res = await fetch('/api/auth/me')
            if (res.status === 200) {
                const data = await res.json()
                setName(data.name)
                setEmail(data.email)
                setPhone(data.phone)
            }
        }
        getUserInfos()
    }, [])

    const updateUser = async () => {
        const userNewInfos = {
            name,
            email,
            phone
        }
        const res = await fetch('/api/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userNewInfos)
        })
        if (res.status === 200) {
            Swal.fire({
                title: "اطلاعات مورد نظر با موفقیت اپدیت شد",
                icon: "success",
                confirmButtonText: "بله",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await fetch('/api/auth/signout', {
                        method: "POST"
                    })
                    router.replace('/login-register')
                }
            })
        }
    }

    return (
        <div className="  bg-white rounded-3xl">
            <div className="relative w-full h-80 mb-8 rounded-t-3xl bg-[url('/images/jpg/p-user-bg.jpg')] bg-center bg-cover bg-no-repeat ">
                <div className=" absolute -bottom-[2.9rem] right-5 flex items-center gap-5 ">
                    <Image
                        src={'/images/png/user-icon.png'}
                        alt="user-icon"
                        width={110}
                        height={0}
                        className="  rounded-full border-4 border-white"
                    />
                    <div className=" flex flex-wrap gap-3">
                        <div className=" flex items-center gap-2 text-sm bg-sky-500 hover:bg-secondary transition-colors px-8 py-2 rounded-lg text-white">
                            <span className=" hidden sm:block">تغییر عکس پروفایل</span>
                            <IoCloudUpload className=" text-lg" />
                        </div>
                        <div className=" flex items-center gap-2 text-sm bg-red-500 hover:bg-secondary transition-colors px-8 py-2 rounded-lg text-white">
                            <span className=" hidden sm:block">حذف عکس پروفایل</span>
                            <IoTrash className=" text-lg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col gap-5 p-10">
                <div className=" flex flex-col md:flex-row  gap-5 ">
                    <FormInput placeholder={"نام کاربری"} type={"text"} value={name} onChange={(e) => setName(e.target.value)} />
                    <FormInput placeholder={"ایمیل"} type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className=" flex flex-col md:flex-row  gap-5">
                    <FormInput placeholder={"شماره تماس"} type={"number"} value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <FormInput placeholder={"رمز عبور"} type={"password"} />
                </div>
                <div className="flex flex-col md:flex-row  gap-5">
                    <Button text={'ثبت تغییرات'} fullWith={true} onClick={updateUser} />
                    <Button type={'outline'} text={'تغییر رمز عبور'} fullWith={true} />
                </div>
            </div>
        </div>
    )
}
