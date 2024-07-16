'use client'
import { useState } from 'react'

// Components
import Button from '@/components/modules/Button/Button'
import FormInput from '@/components/modules/FormInput/FormInput'
import SectionHeader from '@/components/modules/SectionHeader/SectionHeader'

// SweetAlert
import Swal from 'sweetalert2'
import toastAlert from '@/utils/toastAlert'

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
            toastAlert.fire({
                title: "پیغام شما با موفقیت ارسال شد.",
                icon: "success",
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
                <FormInput type={'text'} placeholder={"نام شما"} onChange={(e) => setName(e.target.value)} value={name} error={!name && "لطفا نام خود را وارد کنید"} />
                <FormInput type={'email'} placeholder={"ایمیل شما"} onChange={(e) => setEmail(e.target.value)} value={email} error={!email && "لطفا ایمیل خود را وارد کنید"}/>
                <FormInput type={'textarea'} placeholder={"پیغام شما"} onChange={(e) => setMessage(e.target.value)} value={message} error={!message && "لطفا پیغام خود را وارد کنید"}/>
                <div className=" w-full xl:w-40">
                    <Button text={'ارسال'} fullWith={true} onClick={submitMessage} isDisabled={name && email && message ? false : true}/>
                </div>
            </div>
        </div>
    )
}
