// Components
import { useState } from "react"
import Button from "../../modules/Button/Button"
import FormInput from "../../modules/FormInput/FormInput"
import RegisterFormTitle from "../../modules/RegisterFormTitle/RegisterFormTitle"
import swal from "sweetalert"


function Register({ showLoginForm }) {

    const [isRegisterWithPass, setIsRegisterWithPass] = useState(false)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = async () => {
        const newUserInfo = {
            name,
            phone,
            email,
            password
        }
        const res = await fetch(`/api/auth/signup`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUserInfo)
        })
        if (res.status === 201) {
            swal({
                title: "ثبت نام با موفقیت انجام شد",
                icon: "success",
                buttons: "ورود به پنل کاربری"
            })
        }
        setName('')
        setPhone('')
        setEmail('')
        setPassword('')
    }

    return (
        <div data-aos='fade-right' className=' w-full'>
            <RegisterFormTitle title={'ثبت نام'} />
            <div className=" flex flex-col gap-5 my-5">
                <FormInput placeholder={'نام کاربری *'} type={'text'} onChange={(e) => setName(e.target.value)} />
                <FormInput placeholder={'شماره موبایل *'} type={'number'} onChange={(e) => setPhone(e.target.value)} />
                <FormInput placeholder={'ایمیل *'} type={'email'} onChange={(e) => setEmail(e.target.value)} />
                <div className={` ${isRegisterWithPass ? 'opacity-100' : 'opacity-45'} transition-all duration-300`}>
                    <FormInput placeholder={'رمز عبور *'} type={'password'} onChange={(e) => setPassword(e.target.value)} isDisabled={isRegisterWithPass ? false : true} />
                </div>
            </div>
            <div className=" flex flex-col gap-5">
                <Button text={'ثبت نام با کد تایید'} fullWith={true}/>
                <Button text={'ثبت نام با رمز عبور'} onClick={() => {
                    if (isRegisterWithPass) {
                        signUp()
                    } else {
                        setIsRegisterWithPass(true)
                    }
                }} fullWith={true}/>
                <Button text={'بازگشت به صفحه ورود'} type={'outline'} onClick={showLoginForm} fullWith={true} />
            </div>
        </div>
    )
}

export default Register