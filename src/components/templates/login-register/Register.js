import { useState } from "react"
import { useRouter } from "next/navigation"

// Components
import Button from "../../modules/Button/Button"
import FormInput from "../../modules/FormInput/FormInput"
import RegisterFormTitle from "../../modules/RegisterFormTitle/RegisterFormTitle"
import Sms from "./Sms"

// SweetAlert
import Swal from "sweetalert2"
import toastAlert from "@/utils/toastAlert"

// Formik
import { useFormik } from "formik"

// Validate regex
import { validateEmail, validatePassword, validatePhone } from "@/utils/auth"


function Register({ showLoginForm }) {

    const router = useRouter()

    const [isRegisterWithPass, setIsRegisterWithPass] = useState(true)
    const [registerWithIOtp, setIsRegisterWithOtp] = useState(false)


    const showRegisterWithOtp = () => {
        setIsRegisterWithOtp(!registerWithIOtp)
    }


    const validate = values => {
        const errors = {};
        if (isRegisterWithPass) {
            if (!values.name) {
                errors.name = 'این فیلد ضروری است.';
            }
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
            if (!values.phone) {
                errors.phone = 'این فیلد ضروری است.';
            } else if (!validatePhone(values.phone)) {
                errors.phone = 'لطفا شماره موبایل را به درستی وارد کنید.';
            }
        } else {
            if (!values.phone) {
                errors.phone = 'این فیلد ضروری است.';
            } else if (!validatePhone(values.phone)) {
                errors.phone = 'لطفا شماره موبایل را به درستی وارد کنید.';
            }
        }


        return errors;
    };

    const form = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            password: "",
        },
        validate,
        onSubmit: async (values, { setSubmitting }) => {
            setTimeout(() => {
                setSubmitting(false)
            }, 3000)
            if (isRegisterWithPass) {
                const newUserInfo = {
                    name: values.name,
                    phone: `0${values.phone}`,
                    email: values.email,
                    password: values.password,
                }
                const res = await fetch(`/api/auth/signup`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUserInfo)
                })
                if (res.status === 201) {
                    toastAlert.fire({
                        text: "ثبت نام با موفقیت انجام شد",
                        icon: "success",
                    }).then(() => {
                        router.replace("/")
                    })
                }
            } else {
                const res = await fetch(`/api/auth/sms/signup/send`, {
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
                        setIsRegisterWithOtp(true)
                    })
                } else if (res.status === 422) {
                    toastAlert.fire({
                        text: `این شماره تماس قبلا ثبت نام شده.`,
                        icon: "error",
                    }).then(() => {
                        showLoginForm()
                    })
                }
            }
        },
    })

    return (
        <>
            {
                !registerWithIOtp ? (
                    <form data-aos='fade-right' className=' w-full' onSubmit={form.handleSubmit}>
                        <RegisterFormTitle title={'ثبت نام'} />
                        <div className=" flex flex-col gap-5 my-5">
                            <FormInput error={form.errors.name} name={"name"} placeholder={'نام کاربری'} type={'text'} value={form.values.name} onChange={form.handleChange}  isDisabled={isRegisterWithPass ? false : true}/>
                            <FormInput error={form.errors.phone} name={"phone"} placeholder={'شماره موبایل'} type={'number'} value={form.values.phone} onChange={form.handleChange}/>
                            <FormInput error={form.errors.email} name={"email"} placeholder={'ایمیل'} type={'email'} value={form.values.email} onChange={form.handleChange}  isDisabled={isRegisterWithPass ? false : true}/>
                            <FormInput error={form.errors.password} name={"password"} placeholder={'رمز عبور'} type={'password'} value={form.values.password} onChange={form.handleChange} isDisabled={isRegisterWithPass ? false : true} />
                        </div>
                        <div className=" flex flex-col gap-5">
                            <Button text={'ثبت نام با کد تایید'} isSubmitType={!isRegisterWithPass ? true : false} onClick={() => setIsRegisterWithPass(false)} fullWith={true} />
                            <Button text={'ثبت نام با رمز عبور'} isSubmitType={isRegisterWithPass ? true : false} onClick={() => setIsRegisterWithPass(true)} fullWith={true} />
                            <Button text={'بازگشت به صفحه ورود'} type={'outline'} onClick={showLoginForm} fullWith={true} />
                        </div>
                    </form>

                ) : (
                    <Sms phone={form.values.phone} backToFirstPageName={"ثبتنام"} showLoginWithOtp={showRegisterWithOtp} />
                )
            }
        </>
    )
}

export default Register