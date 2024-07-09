'use client'
import { useState } from 'react'

// Icons
import { FaRegEye } from "react-icons/fa";
import { IoCloudUploadOutline } from 'react-icons/io5';
import { RiEyeCloseLine } from "react-icons/ri";

export default function FormInput({ error, placeholder, type, value, name, isDisabled, onChange, onBlur, options }) {

    const [showPassword, setShowPassword] = useState(false)

    const showPasswordHandler = () => {
        setShowPassword(!showPassword)
    }

    return (
        type === 'password' ? (
            <div className=" relative flex flex-col gap-2 w-full">
                <label htmlFor="">{placeholder}</label>
                <input disabled={isDisabled} name={name} value={value} type={showPassword ? 'text' : 'password'} placeholder={placeholder} className={` w-full px-3 py-4 border-1 rounded-xl ${!isDisabled && 'hover:border-primary'} ${error ? "border-red-500" : "focus:border-primary"}  focus:rounded-none outline-none transition-all duration-300 `} onChange={onChange} onBlur={onBlur} />
                {error ? <span className=' text-xs text-red-500'>{error}</span> : null} 
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
        ) : type === 'textarea' ? (
            <div className="flex  flex-col gap-2 w-full">
                <label htmlFor="">{placeholder}</label>
                <textarea disabled={isDisabled} value={value} placeholder={placeholder} className={` w-full h-48 px-3 py-4 border-1 rounded-xl ${!isDisabled && 'hover:border-primary'} focus:rounded-none focus:border-primary outline-none transition-all duration-300 `} onChange={onChange} />
            </div>
        ) : type === 'select-option' ? (
            <div className="flex  flex-col gap-2 w-full">
                <label htmlFor="">{placeholder}</label>
                <select className={` text-gray-400 w-full px-3 py-4 border-1 rounded-xl ${!isDisabled && 'hover:border-primary'} focus:rounded-none focus:border-primary outline-0 transition-all duration-300 `} onChange={onChange}>
                    <option value={-1} className=' text-gray-400' >لطفا یک مورد را انتخاب نمایید</option>
                    {
                        options?.map(option => (
                            <option value={option._id} key={option._id} className=' text-black'>{option.title ? option.title : option.name}</option>
                        ))
                    }
                </select>
            </div>
        ) : type === 'file' ? (
            <label htmlFor='upload' className="flex justify-center items-center flex-col gap-3 w-full p-10 bg-white border-1 hover:border-primary rounded-2xl  active:rounded-none transition-all duration-200 cursor-pointer">
                <form action="" enctype="multipart/form-data">
                    <input type='file' id='upload' className='hidden' onChange={onChange} />
                </form>
                <div className=" border-2 border-primary border-dotted rounded-full p-10 ">
                    <IoCloudUploadOutline className=' text-primary text-4xl' />
                </div>
                <div className=" flex flex-col gap-3 text-zinc-500 text-center text-sm">
                    <span>حداکثر اندازه: 6 مگابایت</span>
                    <span>فرمت های مجاز: jpg, png, jpeg, rar, zip</span>
                </div>
            </label>
        ) : (
            <div className="flex  flex-col gap-2 w-full">
                <label htmlFor="">{placeholder}</label>
                <input disabled={isDisabled} name={name} value={value} type={type} placeholder={placeholder} min={0} className={` w-full px-3 py-4 border-1 rounded-xl ${!isDisabled && 'hover:border-primary'} ${error ? "border-red-500" : "focus:border-primary"} focus:rounded-none  outline-0 transition-all duration-300 `} onChange={onChange} onBlur={onBlur} />
                {error ? <span className=' text-xs text-red-500'>{error}</span> : null}  
            </div>
        )
    )
}

