"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// Components
import FormInput from '@/components/modules/FormInput/FormInput'
import Button from '@/components/modules/Button/Button'

// SweetAlert
import Swal from 'sweetalert2'

export default function AddDiscount() {

    const router = useRouter()

    const [code, setCode] = useState("")
    const [percent, setPercent] = useState("")
    const [maxUse, setMaxUse] = useState("")

    const addDiscount = async () => {
        const discount = {
            code,
            percent,
            maxUse,
        }

        const res = await fetch("/api/discounts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(discount),
        });

        if (res.status === 201) {
            Swal.fire({
                title: "کد تخفیف با موفقیت ایجاد شد.",
                icon: "success",
                confirmButtonText: "باشه"
            })
            setCode("")
            setPercent("")
            setMaxUse("")
            router.refresh()
        }
    }

    return (
        <div className=" flex flex-col gap-5 w-full">
            <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
                <FormInput type={"text"} placeholder={"شناسه تخفیف"} value={code} onChange={(e) => setCode(e.target.value)} />
                <FormInput type={"number"} placeholder={"درصد تخفیف"} value={percent} onChange={(e) => setPercent(e.target.value)} />
            </div>
            <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
                <FormInput type={"number"} placeholder={"حداکثر استفاده"} value={maxUse} onChange={(e) => setMaxUse(e.target.value)} />
            </div>
            <div className="w-full md:w-40 ">
                <Button fullWith={true} text={'ثبت'} onClick={addDiscount} />
            </div>
        </div>
    )
}
