import { useState } from 'react'

// Components
import FormInput from '../../modules/FormInput/FormInput'
import Button from '../../modules/Button/Button'
import RegisterFormTitle from '../../modules/RegisterFormTitle/RegisterFormTitle'
import Sms from './Sms'
import RegisterFormText from '../../modules/RegisterFormText/RegisterFormText'
import Link from 'next/link'

function Login({ showRegisterForm }) {

    const [isLoginWithOtp, setIsLoginWithOtp] = useState(false)

    const [phoneOrEmail, setPhoneOrEmail] = useState('')
    const [password, setPassword] = useState('')

    const showLoginWithOtp = () => {
        setIsLoginWithOtp(!isLoginWithOtp)
    }

    const loginWithPassword = async () => {

        const user = {
            email: phoneOrEmail,
            password
        }
        const res = await fetch('/api/auth/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        if (res.status === 200) {
            swal({
                title: "ثبت نام با موفقیت انجام شد",
                icon: "success",
                buttons: "ورود به پنل کاربری"
            })
            setPhoneOrEmail('')
            setPassword('')
        }
    }

    return (
        <>
            {
                !isLoginWithOtp ? (
                    <div data-aos='fade-right' className=' w-full'>
                        <RegisterFormTitle title={'ورود'} />
                        <div className=" flex flex-col gap-5 my-5">
                            <FormInput placeholder={'ایمیل یا شماره مویایل *'} type={'text'} value={phoneOrEmail} onChange={(e) => setPhoneOrEmail(e.target.value)} />
                            <FormInput placeholder={'رمز عبور *'} type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className=" flex flex-col gap-5">
                            <Button text={'ورود'} onClick={loginWithPassword} fullWith={true} />
                            <Button text={'ورود با کد یکبار مصرف'} onClick={showLoginWithOtp} fullWith={true} />
                        </div>
                        <RegisterFormText text={'رمز عبور را فراموش کرده اید؟'} />
                        <Link href={'/forget-password'}>
                            <Button text={'بازیابی رمز عبور'} onClick={showLoginWithOtp} fullWith={true} />
                        </Link>
                        <RegisterFormText text={'آیا حساب کاربری ندارید؟'} />
                        <Button text={'ثبت نام'} type={'outline'} onClick={showRegisterForm} fullWith={true} />
                    </div>
                ) : (
                    <Sms showLoginWithOtp={showLoginWithOtp} />
                )
            }
        </>
    )
}

export default Login