'use client'
import { useState } from 'react'

// Components
import Button from '@/components/modules/Button/Button'
import FormInput from '@/components/modules/FormInput/FormInput'
import SectionHeader from '@/components/modules/SectionHeader/SectionHeader'

// SweetAlert
import Swal from 'sweetalert2'

export default function Form() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const submitMessage = async () => {

        const contact = {
            name,
            email,
            message,
        }

        const res = await fetch('/api/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contact)
        })
        if(res.status === 201) {
            Swal.fire({
                title: "پیغام شما با موفقیت ارسال شد.",
                icon: "success",
                confirmButtonText: "باشه"
            })
            setName("")
            setEmail("")
            setMessage("")
        }
    }

    return (
        <div className=" w-full lg:w-1/2">
            <SectionHeader title={"برای ما بنویسید"} />
            <div data-aos='fade-left' className="  flex flex-col gap-5">
                <FormInput type={'text'} placeholder={"نام شما"} onChange={(e) => setName(e.target.value)} value={name} />
                <FormInput type={'email'} placeholder={"ایمیل شما"} onChange={(e) => setEmail(e.target.value)} value={email} />
                <FormInput type={'textarea'} placeholder={"پیغام شما"} onChange={(e) => setMessage(e.target.value)} value={message} />
                <div className=" w-full xl:w-40">
                    <Button text={'ارسال'} fullWith={true} onClick={submitMessage} />
                </div>
            </div>
        </div>
    )
}
