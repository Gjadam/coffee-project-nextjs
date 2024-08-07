"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// Components
import Button from '@/components/modules/Button/Button'
import FormInput from '@/components/modules/FormInput/FormInput'

// SweetAlert
import Swal from 'sweetalert2'

export default function SendTicket() {

  const router = useRouter()

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [departments, setDepartments] = useState([])
  const [departmentID, setDepartmentID] = useState(-1)
  const [subDepartment, setSubDepartment] = useState([])
  const [subDepartmentID, setSubDepartmentID] = useState(-1)
  const [priority, setPriority] = useState(1)

  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetch('/api/departments')
      const data = await res.json()
      setDepartments([...data])
    }
    getDepartments()
  }, [])

  useEffect(() => {
    const getSubDepartments = async () => {
      const res = await fetch(`/api/departments/sub/${departmentID}`)
      if (res.status === 200) {
        const data = await res.json()
        setSubDepartment([...data])
      }
    }
    if (departmentID !== -1) {
      getSubDepartments()
    }
  }, [departmentID])

  const sendTicket = async () => {
    const ticket = {
      title,
      body,
      department: departmentID,
      subDepartment: subDepartmentID,
      priority
    }
    const res = await fetch('/api/tickets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ticket)
    })
    if (res.status === 201) {
      Swal.fire({
        title: "تیکت شما با موفقیت ثبت شد.",
        icon: "success",
        confirmButtonText: "مشاهده تیکت ها"
      }).then(result => {
        if (result.isConfirmed) {
          router.replace("/p-user/tickets")
        }
      })
    }
  }

  return (
    <div className='p-5'>
      <div className=" flex justify-between items-center border-b-1 pb-3">
        <span className=' text-xl'>ارسال تیکت جدید</span>
        <Link href={'/p-user/tickets'}>
          <Button type={'simple'} text={"همه تیکت ها"} />
        </Link>
      </div>
      <div className=" w-full flex gap-5 flex-col mt-5">
        <div className=" flex flex-col md:flex-row gap-5 w-full">
          <FormInput type={"select-option"} placeholder={"دپارتمان"} options={departments} onChange={(e) => setDepartmentID(e.target.value)} error={departmentID === -1 && "دپارتان موردنظر را انتخاب کنید"}/>
          <FormInput type={"select-option"} placeholder={"نوع نیکت"} options={subDepartment} onChange={(e) => setSubDepartmentID(e.target.value)}  error={subDepartmentID === -1 && "نوع تیکت را انتخاب کنید"}/>
        </div>
        <div className=" flex flex-col md:flex-row gap-5 w-full">
          <FormInput
            type={"select-option"}
            placeholder={"سطح اولویت"}
            options={
              [
                {
                  _id: 1,
                  title: "کم"
                },
                {
                  _id: 2,
                  title: "متوسط"
                },
                {
                  _id: 3,
                  title: "بالا"
                }
              ]
            }
            onChange={(e) => setPriority(e.target.value)} />
          <FormInput type={"text"} placeholder={"عنوان"} value={title} onChange={(e) => setTitle(e.target.value)} error={!title && "عنوان تیکت را وارد کنید"}/>
        </div>
        <FormInput type={"textarea"} placeholder={"محتوای تیکت"} value={body} onChange={(e) => setBody(e.target.value)} error={!body && "محتوای تیکت را وارد کنید"}/>
        <FormInput type={"file"} />
        <div className=" w-full md:w-40">
          <Button text={'ارسال تیکت'} fullWith={true} onClick={sendTicket} isDisabled={title && body && departmentID !== -1 && subDepartmentID !== -1 ? false : true}/>
        </div>
      </div>
    </div>
  )
}
