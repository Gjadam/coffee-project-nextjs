'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Components
import SideBarLink from '@/components/modules/SideBarLink/SideBarLink'

// Icons
import { IoBasket, IoHeart, IoHome, IoLogOut, IoNotifications, IoSearch, IoTicket } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosChatboxes } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

// SweetAlert
import Swal from "sweetalert2";
import toastAlert from "@/utils/toastAlert";

export default function Sidebar({ userInfos }) {
    const router = useRouter()
    const [openSideBar, setOpenSideBar] = useState(false)

    const logoutHandler = () => {
        Swal.fire({
            title: "آیا میخواهید خارج شوید؟",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "بله",
            cancelButtonText: "خیر"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch('/api/auth/signout', {
                    method: "POST"
                })
                if (res.status === 200) {
                    toastAlert.fire({
                        text: "با موفقیت خارج شدید.",
                        icon: "success",
                        confirmButtonText: "باشه",
                    }).then(() => {
                        router.replace('/')
                    })
                }
            }
        });
    }

    return (
        <>
            <div className=" xl:hidden flex justify-between items-center mb-5">
                <div className="">
                    <HiOutlineBars3BottomRight className=" text-4xl" onClick={() => setOpenSideBar(true)} />
                </div>
                <div className=" flex justify-center items-center">
                    <Link href={'/'}>
                        <Image
                            src={'/images/png/logo-primary.png'}
                            alt="logo"
                            width={0}
                            height={0}
                            sizes="100"
                            className=" w-16"
                        />
                        <span className=" text-primary text-xl mr-1">باریستا</span>
                    </Link>
                </div>
            </div>
            <div className={` fixed ${openSideBar ? '-right-0' : '-right-96'} xl:-right-0  top-0 bottom-0 bg-white shadow-2xl xl:shadow-none xl:relative xl:flex justify-center flex-col gap-10 p-5 xl:p-0 z-50 h-full w-72 transition-all duration-300 `}>
                <div className="xl:hidden flex justify-between items-center pb-5 border-b-1">
                        <Image
                            src={'/images/png/logo-primary.png'}
                            alt="logo"
                            width={0}
                            height={0}
                            sizes="100"
                            className=" w-16"
                        />
                    <div className=" p-3 border-1 border-primary rounded-full bg-opacity-5 bg-white hover:text-white hover:bg-red-500 hover:border-red-500 transition-colors" onClick={() => setOpenSideBar(false)}>
                        <LiaTimesSolid className=" text-xl" />
                    </div>
                </div>
                <div className=" hidden xl:flex justify-center items-center w-full">
                    <Link href={'/'}>
                        <Image
                            src={'/images/png/logo-primary.png'}
                            alt="logo"
                            width={0}
                            height={0}
                            sizes="100"
                            className=" w-16"
                        />
                        <span className=" text-primary text-xl mr-1">باریستا</span>
                    </Link>
                </div>
                <div className=" relative flex justify-between items-center  rounded-xl  bg-primary p-5 mt-5 xl:mt-0 text-white w-full min-h-28">
                    <div className="">
                        <h1 className=' text-xl'>{userInfos.name}</h1>
                        <h3>{userInfos.email}</h3>
                    </div>
                    <div className=" absolute left-2 xl:-left-8 p-5 rounded-full border-1 border-primary bg-white text-primary hover:text-white hover:bg-primary transition-colors">
                        <IoNotifications className=' text-2xl ' />
                    </div>
                </div>
                <div className=" relative my-8 xl:m-0">
                    <input type="text" placeholder='جستوجو...' className=' w-full  border-opacity-0 focus:border-opacity-100 border-b-1 border-gray-200 p-3 text-secondary  placeholder:text-secondary outline-none transition-all' />
                    <div className=" flex justify-center items-center absolute left-3 top-0 text-secondary text-xl h-full bg-transparent">
                        <IoSearch />
                    </div>
                </div>
                <div className="flex justify-start items-center gap-5 flex-col w-full h-full">
                    <SideBarLink route={'/p-user'} text='پیشخوان'>
                        <IoHome className='text-xl' />
                    </SideBarLink>
                    <SideBarLink route={'/p-user/orders'} text='سفارش ها'>
                        <IoBasket className='text-xl' />
                    </SideBarLink>
                    <SideBarLink route={'/p-user/tickets'} text='تیکت های پشتیبانی'>
                        <IoTicket className='text-xl' />
                    </SideBarLink>
                    <SideBarLink route={'/p-user/comments'} text='کامنت ها'>
                        <IoIosChatboxes className='text-xl' />
                    </SideBarLink>
                    <SideBarLink route={'/p-user/wishlist'} text='علاقه مندی ها'>
                        <IoHeart className='text-xl' />
                    </SideBarLink>
                    <SideBarLink route={'/p-user/account-details'} text='جزئیات حساب'>
                        <BiSolidCategory className='text-xl' />
                    </SideBarLink>
                    <SideBarLink route={null} text='خروج' onclick={logoutHandler}>
                        <IoLogOut className='text-xl' />
                    </SideBarLink>
                </div>
            </div>
        </>
    )
}
