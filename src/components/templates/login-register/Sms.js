import { useRouter } from 'next/navigation'

// Components
import { useState } from 'react'
import Button from '../../modules/Button/Button'
import RegisterFormText from '../../modules/RegisterFormText/RegisterFormText'
import RegisterFormTitle from '../../modules/RegisterFormTitle/RegisterFormTitle'

// SweetAlert
import Swal from 'sweetalert2'

export default function Sms({ phone, showLoginWithOtp, backToFirstPageName }) {

    const router = useRouter()

    const [otp, setOtp] = useState(new Array(5).fill(""))

    function otpOnchange(e, index) {
        if (isNaN(e.target.value)) return false
        setOtp([...otp.map((data, indx) => (indx === index ? e.target.value : data))])

        if (e.target.value && e.target.nextSibling) {
            e.target.nextSibling.focus()
        }
    }

    function otpBackSpace(e) {
        if (e.key === "Backspace") {
            let previousInput = e.target.previousSibling
        if(previousInput) {
            previousInput.focus()
        }
        }
    }

    const verifyCode = async () => {
        const body = { phone: `0${phone}`, code: otp.join("") }
        const res = await fetch('/api/auth/sms/verify', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
        if (res.status === 409) {
            Swal.fire({
                title: "کد وارد شده معتبر نیست.",
                icon: "error",
                confirmButtonText: "تلاش مجدد"
            })
        } else if (res.status === 410) {
            Swal.fire({
                title: "کد وارد شده منقضی شده.",
                icon: "error",
                confirmButtonText: "تلاش مجدد"
            })
        } else if (res.status === 200) {
            Swal.fire({
                title: `${backToFirstPageName === 'ثبتنام' ? "ثبتنام شما با موفقیت انجام شد." : "با موفقیت وارد شدید."}`,
                icon: "success",
                confirmButtonText: "ورود به صفحه اصلی",
            }).then(result => {
                if (result.isConfirmed) {
                    router.replace('/')
                }
            })
        }
    }

    return (
        <div data-aos='fade-right' className=' w-full'>
            <RegisterFormTitle title={'کد تایید'} />
            <RegisterFormText text={'لطفا کد تایید ارسال شده را تایپ کنید'} />
            <span className=' flex justify-center items-center text-center text-2xl text-primary'>{phone}</span>
            <div className=" flex flex-col gap-5 mt-3">
                <div dir='ltr' className=" flex justify-center items-center gap-5">
                    {
                        otp.map((data, i) => (
                            <input
                                type="text"
                                value={data}
                                maxLength={1}
                                className=' outline-none border-1 rounded-2xl  focus:border-primary focus:rounded-none transition-all duration-300  w-16 h-14  text-3xl text-center'
                                onChange={(e) => otpOnchange(e, i)}
                                onKeyUp={otpBackSpace}
                            />
                        ))
                    }
                </div>
                <Button text={'ورود'} fullWith={true} onClick={verifyCode} />
            </div>
            <RegisterFormText text={'ارسال مجدد کد یکبار مصرف'} />
            <Button text={`بازگشت به صفحه ${backToFirstPageName}`} type={'outline'} onClick={showLoginWithOtp} fullWith={true} />
        </div>
    )
}
