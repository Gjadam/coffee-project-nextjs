import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Components
import FormInput from '../../modules/FormInput/FormInput'
import Button from '../../modules/Button/Button'
import RegisterFormTitle from '../../modules/RegisterFormTitle/RegisterFormTitle'
import Sms from './Sms'
import RegisterFormText from '../../modules/RegisterFormText/RegisterFormText'
import Link from 'next/link'

// SweetAlert
import Swal from 'sweetalert2'
import toastAlert from '@/utils/toastAlert'

// Formik
import { useFormik } from 'formik'

// Validate regex
import { validateEmail, validatePassword, validatePhone } from '@/utils/auth'

function Login({ showRegisterForm }) {

    const router = useRouter()
    const [isLoginWithOtp, setIsLoginWithOtp] = useState(false)
    const [isEnablePhoneNumber, setIsEnablePhoneNumber] = useState(false)

    const showLoginWithOtp = () => {
        setIsLoginWithOtp(!isLoginWithOtp)
    }

    const validate = values => {
        const errors = {};
        if (isEnablePhoneNumber) {
            if (!values.phone) {
                errors.phone = 'این فیلد ضروری است.';
            } else if (!validatePhone(values.phone)) {
                errors.phone = 'لطفا شماره موبایل را به درستی وارد کنید.';
            }
        } else {
            if (!values.email) {
                errors.email = 'این فیلد ضروری است.';
            } else if (!validateEmail(values.email)) {
                errors.email = 'لطفا ایمیل را به درستی وارد کنید.';
            }
            if (!values.password) {
                errors.password = 'این فیلد ضروری است.';
            } else if (!validatePassword(values.password)) {
                errors.password = 'رمزعبور باید شامل حروف بزرگ ، عدد و کاراکترهایی همچون @ ، # و.. باشد.';
            }
        }


        return errors;
    };

    const form = useFormik({
        initialValues: {
            email: "",
            phone: "",
            password: "",
        },
        validate,
        onSubmit: async (values, { setSubmitting }) => {
            setTimeout(() => {
                setSubmitting(false)
            }, 3000)
            if (!isEnablePhoneNumber) {
                const user = {
                    email: values.email,
                    password: values.password
                }
                const res = await fetch('/api/user/ban/verify', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: values.email })
                })
                if (res.status === 200) {
                    toastAlert.fire({
                        text: "این کاربر از وبسایت بن شده است!",
                        icon: "error",
                        confirmButtonText: "باشه"
                    })
                } else {
                    const res = await fetch('/api/auth/signin', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(user)
                    })
                    if (res.status === 200) {
                        toastAlert.fire({
                            text: "با موفقیت وارد شدید",
                            icon: "success",
                        }).then(() => {
                            router.replace("/")
                        })
                    } else {
                        toastAlert.fire({
                            text: "کاربری با این ایمیل یافت نشد",
                            icon: "error",
                        })
                    }
                }

            } else {
                const res = await fetch('/api/user/ban/verify', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ phone: `0${values.phone}` })
                })
                if (res.status === 200) {
                    const data = await res.json()
                    console.log(data);
                    toastAlert.fire({
                        text: "این کاربر از وبسایت بن شده است!",
                        icon: "error",
                        confirmButtonText: "باشه"
                    })
                } else {
                    const res = await fetch(`/api/auth/sms/signin/send`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ phone: `0${values.phone}` })
                    })
                    if (res.status === 201) {
                        const data = await res.json()
                        Swal.fire({
                            title: `کد ورود : ${data.code}`,
                            text: "لطفا قبل از وارد شدن به صفحه وارد کردن کد ، کد را بخاطر بسپارید.",
                            icon: "success",
                            confirmButtonText: "وارد کردن کد"
                        }).then(() => {
                            setIsLoginWithOtp(true)
                        })
                    } else if (res.status === 422) {
                        toastAlert.fire({
                            text: `کاربری با این شماره موبایل یافت نشد.`,
                            icon: "error",
                            confirmButtonText: "ورود به صفحه ثبت نام"
                        }).then(() => {
                            showRegisterForm()
                        })
                    }
                }
            }
        },
    })

    return (
        <>
            {
                !isLoginWithOtp ? (
                    <form data-aos='fade-right' className=' w-full' onSubmit={form.handleSubmit}>
                        <RegisterFormTitle title={'ورود'} />
                        <div className=" flex flex-col gap-5 my-5">
                            <FormInput name={"email"} error={form.errors.email} placeholder={'ایمیل'} type={'email'} value={form.values.email} isDisabled={isEnablePhoneNumber ? true : false} onChange={form.handleChange} onBlur={form.handleBlur} />
                            <FormInput name={"phone"} error={form.values.phone && form.errors.phone} placeholder={'شماره موبایل'} type={'number'} value={form.values.phone} isDisabled={isEnablePhoneNumber ? false : true} onChange={form.handleChange} onBlur={form.handleBlur} />
                            <FormInput name={"password"} error={form.errors.password} placeholder={'رمز عبور'} type={'password'} value={form.values.password} isDisabled={isEnablePhoneNumber ? true : false} onChange={form.handleChange} onBlur={form.handleBlur} />
                        </div>
                        <div className=" flex flex-col gap-5">
                            <Button text={'ورود با ایمیل'} fullWith={true} isSubmitType={!isEnablePhoneNumber ? true : false} onClick={() => setIsEnablePhoneNumber(false)} />
                            <Button text={'ورود با شماره موبایل'} isSubmitType={isEnablePhoneNumber ? true : false} onClick={() => setIsEnablePhoneNumber(true)} fullWith={true} />
                        </div>
                        <RegisterFormText text={'رمز عبور را فراموش کرده اید؟'} />
                        <Link href={'/forget-password'}>
                            <Button text={'بازیابی رمز عبور'} onClick={showLoginWithOtp} fullWith={true} />
                        </Link>
                        <RegisterFormText text={'آیا حساب کاربری ندارید؟'} />
                        <Button text={'ثبت نام'} type={'outline'} disabled={form.isSubmitting} onClick={showRegisterForm} fullWith={true} />
                    </form>
                ) : (
                    <Sms backToFirstPageName={"ورود"} phone={form.values.phone} showLoginWithOtp={showLoginWithOtp} />
                )
            }
        </>
    )
}

export default Login