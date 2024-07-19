'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Components
import NavBarLink from "../../../components/modules/NavBarLink/NavBarLink";
import NavBarLinkWithIcon from "../../../components/modules/NavBarLinkWithIcon/NavBarLinkWithIcon";

// Icons
import { CiLogin } from "react-icons/ci";
import { IoHeart, IoHome, IoLogOut, IoMoonOutline, IoSearch, IoTicket } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { BiSolidCategory, BiUser } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import { FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

// SweetAlert
import Swal from "sweetalert2";
import toastAlert from "@/utils/toastAlert";
import Alert from "../Alert/Alert";

export default function NavBar({ isLogin }) {

    const router = useRouter()

    const [fixTop, setFixTop] = useState(false)

    const [isOpenSearchBox, setIsOpenSearchBox] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [productDataFromSearch, setProductDataFromSearch] = useState([])

    const [openSidebar, setOpenSideBar] = useState(false)

    useEffect(() => {
        const getProductWithSearch = async () => {
            const res = await fetch(`/api/search?q=${searchValue}`)
            if (res.status === 200) {
                const data = await res.json()
                setProductDataFromSearch(data)
            }
        }
        if (searchValue.trim()) {
            getProductWithSearch()
        }
    }, [searchValue])

    useEffect(() => {
        const fixNavbarToTop = () => {
            const currentScroll = window.pageYOffset
            if (currentScroll > 40) {
                setFixTop(true)
            } else {
                setFixTop(false)
            }
        }

        window.addEventListener('scroll', fixNavbarToTop)
        return () => window.removeEventListener('scroll', fixNavbarToTop)
    }, [])


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
                        router.refresh()
                    })
                }
            }
        });
    }


    return (
        <div className=" relative">
            <div className={`${fixTop ? '  fixed top-0 left-0 right-0 rounded-b-2xl text-white xl:text-black bg-white' : 'absolute top-10 left-0 xl:left-24 right-0 xl:right-24 xl:rounded-3xl text-white bg-[rgba(0,0,0,0.5)]'} xl:backdrop-blur-md border-1 shadow-lg border-primary z-50 py-7 px-10 flex justify-between items-center flex-row-reverse transition-all duration-200`}>
                <div className=' flex justify-center items-center xl:gap-20  '>
                    <div className=" hidden xl:flex justify-center items-center gap-5 text-xl relative after:absolute after:-left-10 after:w-[1px] after:h-14 after:bg-primary ">
                        <Link href={'/cart'}>
                            <div className=" p-3 border-1 border-primary rounded-full bg-opacity-5 bg-white hover:bg-primary transition-colors">
                                <HiOutlineShoppingCart className="" />
                            </div>
                        </Link>
                        <div className="relative">

                            <div className=" flex justify-center items-center flex-row-reverse border-1 border-primary rounded-full p-1 bg-opacity-5 bg-white hover:bg-primary transition-colors overflow-hidden" >
                                <div className=" p-2 " onClick={() => setIsOpenSearchBox(!isOpenSearchBox)}>
                                    <IoSearch className="" />
                                </div>
                                <input type="text" placeholder="جستوجو..." className={` placeholder:text-white placeholder:text-xs text-sm bg-transparent text-white outline-none ${isOpenSearchBox ? 'w-36' : 'w-0'} transition-all`} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                            </div>
                            <div className={`absolute left-0 top-full z-50 pt-7`}>

                                <div className={` ${searchValue.length > 0 ? "opacity-100 visible" : "invisible opacity-0"} ${fixTop ? 'bg-white text-secondary bg-opacity-80' : ' bg-black text-white bg-opacity-80 '} border-1 border-primary rounded-3xl  w-80 p-5 transition-all`}>
                                    {
                                        productDataFromSearch.length > 0 ? (
                                            productDataFromSearch.map(product => (
                                                <Link href={`/product/${product._id}`}>
                                                    <div className=" flex justify-between items-center flex-row-reverse hover:bg-primary hover:bg-opacity-70 rounded-xl p-2 transition-colors overflow-hidden">
                                                        <Image
                                                            src={product.img}
                                                            alt="primary-logo"
                                                            width={60}
                                                            height={0}
                                                            className=" rounded-xl"
                                                        />
                                                        <span className=" text-sm">{product.name}</span>
                                                        <span className=" text-sm">
                                                            {product.price?.toLocaleString()}
                                                            <span className=' text-xs mr-1'>تومان</span>
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))
                                        ) : (
                                            <p className=" w-full text-center text-sm">محصول موردنظر یافت نشد</p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        !isLogin ? (
                            <Link href={'/login-register'}>
                                <div className="hidden xl:flex justify-center items-center gap-3 w-36  hover:text-primary transition-colors">
                                    <CiLogin className=' text-3xl ' />
                                    <div className=" flex gap-3">
                                        <span>ورود</span>
                                        <span>|</span>
                                        <span>ثبت نام</span>
                                    </div>
                                </div>
                                <div className="flex xl:hidden p-2 rounded-full bg-primary hover:bg-secondary text-white transition-colors duration-200 ">
                                    <CiLogin className=' text-2xl ' />
                                </div>
                            </Link>

                        ) : (
                            <div className=" relative group">
                                <div className=" p-2 xl:p-3 xl:border-1 border-primary rounded-full bg-primary hover:bg-secondary xl:bg-opacity-5 xl:bg-white xl:hover:bg-primary transition-colors">
                                    <BiUser className=" text-2xl xl:text-xl " />
                                </div>
                                <div className=" invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute -left-10 top-full pt-7 transition-all">
                                    <div className={` ${fixTop ? 'bg-white text-secondary bg-opacity-80' : ' bg-black text-white bg-opacity-80 '} w-64 p-5 backdrop-blur-3xl rounded-3xl border-1 border-primary`}>
                                        <div className=" flex justify-center items-center gap-5 border-b-1 border-primary pb-5">
                                            <Image
                                                src={'/images/png/user-icon.png'}
                                                alt="user-icon"
                                                width={55}
                                                height={0}
                                                className=" rounded-full"
                                            />
                                            <div className="">
                                                <h1 className=" text-lg mb-1">{isLogin.name}</h1>
                                                <h3 className=" text-xs">{isLogin.email}</h3>
                                            </div>
                                        </div>
                                        <div className=" flex flex-col gap-3 py-5 ">
                                            {
                                                isLogin.role === "ADMIN" ? (
                                                    <NavBarLinkWithIcon text='پنل ادمین' route={'/p-admin'}>
                                                        <MdAdminPanelSettings />
                                                    </NavBarLinkWithIcon>
                                                ) : null
                                            }
                                            <NavBarLinkWithIcon text='پیشخوان' route={'/p-user'}>
                                                <IoHome />
                                            </NavBarLinkWithIcon>
                                            <NavBarLinkWithIcon text='علاقه مندی ها' route={'/wishlist'}>
                                                <IoHeart />
                                            </NavBarLinkWithIcon>
                                            <NavBarLinkWithIcon text='تیکت ها' route={'/p-user'}>
                                                <IoTicket />
                                            </NavBarLinkWithIcon>
                                            <NavBarLinkWithIcon text='جزئیات حساب' route={'/p-user/account-details'}>
                                                <BiSolidCategory />
                                            </NavBarLinkWithIcon>
                                            <NavBarLinkWithIcon text='خروج' route={null} onclick={logoutHandler}>
                                                <IoLogOut />
                                            </NavBarLinkWithIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className=" flex justify-center items-center w-full gap-5">
                    <Image
                        src={'/images/png/logo-primary.png'}
                        alt="primary-logo"
                        width={60}
                        height={0}
                    />
                    <div className={` fixed xl:relative xl:right-0 top-0 bottom-0 xl:visible ${openSidebar ? 'right-0' : '-right-96'} w-72 xl:w-full p-5 xl:p-0 border-l-2 xl:border-none  border-primary shadow-lg xl:shadow-none  shadow-secondary bg-secondary xl:bg-transparent flex justify-start xl:justify-center items-start flex-col xl:flex-row gap-5 transition-all duration-300 `}>
                        <div className=" flex xl:hidden justify-between items-center  w-full mb-3">
                            <Image
                                src={'/images/png/logo-primary.png'}
                                alt="primary-logo"
                                width={60}
                                height={0}
                            />
                            <div className=" flex items-center gap-3">
                                <div className=" p-3 border-1 border-primary rounded-full bg-opacity-5 bg-white hover:bg-primary transition-colors">
                                    <IoMoonOutline className=" text-xl" />
                                </div>
                                <div className=" p-3 border-1 border-primary rounded-full bg-opacity-5 bg-white hover:bg-red-500 hover:border-red-500 transition-colors" onClick={() => setOpenSideBar(false)}>
                                    <LiaTimesSolid className=" text-xl" />
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col xl:flex-row gap-3 w-full">
                            <NavBarLink route={'/'} text={'صفحه اصلی'} />
                            <NavBarLink route={'/about-us'} text={'درباره ما'} />
                            <NavBarLink route={'/contact-us'} text={'ارتباط با ما'} />
                            <NavBarLink route={'/about-me'} text={'درباره من'} />
                        </div>
                        <div className=" flex xl:hidden justify-center items-center gap-5 text-white text-lg">
                            <a href="https://www.linkedin.com/in/theGjadam">
                                <FaLinkedin className=' hover:text-primary transition-colors duration-200' />
                            </a>
                            <a href="https://instagram.com/thegjad">
                                <FaInstagram className=' hover:text-primary transition-colors duration-200' />
                            </a>
                            <a href="https://t.me/Thegjad">
                                <FaTelegram className=' hover:text-primary transition-colors duration-200' />
                            </a>
                            <FaTwitter className=' hover:text-primary transition-colors duration-200' />
                        </div>
                    </div>
                </div>
                <div className="flex xl:hidden p-2 rounded-full bg-primary hover:bg-secondary text-white transition-colors duration-200" onClick={() => setOpenSideBar(true)}>
                    <HiBars3 className="text-2xl" />
                </div>
            </div>
        </div>
    )
}
