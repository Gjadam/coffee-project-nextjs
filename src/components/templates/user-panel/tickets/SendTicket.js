import Button from '@/components/modules/Button/Button'
import FormInput from '@/components/modules/FormInput/FormInput'
import React from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5'

export default function SendTicket() {
  return (
    <div className='p-5'>
      <div className=" flex justify-between items-center border-b-1 pb-3">
        <span className=' text-xl'>ارسال تیکت جدید</span>
        <Button type={'simple'} text={"همه تیکت ها"} />
      </div>
      <div className=" w-full flex gap-5 flex-col mt-5">
        <div className=" flex flex-col md:flex-row gap-5 w-full">
          <FormInput type={"select-option"} placeholder={"دپارتمان"} />
          <FormInput type={"select-option"} placeholder={"نوع نیکت"} />
        </div>
        <div className=" flex flex-col md:flex-row gap-5 w-full">
          <FormInput type={"select-option"} placeholder={"سطح اولویت"} />
          <FormInput type={"text"} placeholder={"عنوان"} />
        </div>
        <FormInput type={"textarea"} placeholder={"محتوای تیکت"} />
        <FormInput type={"file"}  />
        <div className=" w-full md:w-40">
          <Button text={'ارسال تیکت'} fullWith={true} />
        </div>
      </div>
    </div>
  )
}
