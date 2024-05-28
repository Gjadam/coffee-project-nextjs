'use client'
import { useState } from 'react'

// Icons
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";

export default function FormInput({ placeholder, type, isDisabled, onChange }) {

    const [showPassword, setShowPassword] = useState(false)

    const showPasswordHandler = () => {
        setShowPassword(!showPassword)
    }

    const moveToNext = (event) => {
        const maxLength = event.target.maxLength
        const inputValue = event.target.value
        if (event.key === 'Backspace' && inputValue.length === 0) {
            const previousInput = event.target.previousElementSibling
            if (previousInput) {
                previousInput.focus()
            }
        } else if (inputValue.length >= maxLength && event.key !== 'Backspace') {
            const nextInput = event.target.nextElementSibling
            if (nextInput) {
                nextInput.focus()
            } 
        }
    }


    return (
        type === 'password' ? (
            <div className=" relative flex flex-col gap-2 w-full">
                <label htmlFor="">{placeholder}</label>
                <input disabled={isDisabled} type={showPassword ? 'text' : 'password'} placeholder={placeholder} className={` w-full px-3 py-4 border-1 rounded-xl ${!isDisabled && 'hover:border-primary'}  focus:rounded-none focus:border-primary outline-0 placeholder: transition-all duration-300 `} onChange={onChange} />
                <div className=" absolute left-4 top-[51px] text-xl bg-white cursor-pointer " onClick={showPasswordHandler}>
                    {
                        showPassword ? (
                            <FaRegEye />
                        ) : (
                            <RiEyeCloseLine />
                        )
                    }
                </div>
            </div>
        ) : type === 'forget-pass' ? (
            <form dir='ltr' className=" flex justify-center items-center gap-5">
                <input type="tel" maxLength={1} className=' outline-0 border-1 rounded-2xl  focus:border-primary focus:rounded-none transition-all duration-300  w-16 h-14  text-3xl text-center' onKeyUp={(event) => moveToNext(event)} />
                <input type="tel" maxLength={1} className=' outline-0 border-1 rounded-2xl  focus:border-primary focus:rounded-none transition-all duration-300  w-16 h-14  text-3xl text-center' onKeyUp={(event) => moveToNext(event)} />
                <input type="tel" maxLength={1} className=' outline-0 border-1 rounded-2xl  focus:border-primary focus:rounded-none transition-all duration-300  w-16 h-14  text-3xl text-center' onKeyUp={(event) => moveToNext(event)} />
                <input type="tel" maxLength={1} className=' outline-0 border-1 rounded-2xl  focus:border-primary focus:rounded-none transition-all duration-300  w-16 h-14  text-3xl text-center' onKeyUp={(event) => moveToNext(event)} />
            </form>
        ) : (
            <div className="flex  flex-col gap-2 w-full">
                <label htmlFor="">{placeholder}</label>
                <input disabled={isDisabled} type={type} placeholder={placeholder} min={0} className={` w-full px-3 py-4 border-1 rounded-xl ${!isDisabled && 'hover:border-primary'} focus:rounded-none focus:border-primary outline-0 placeholder: transition-all duration-300 `} onChange={onChange} />
            </div>
        )
    )
}
