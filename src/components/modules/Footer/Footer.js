import Image from 'next/image'
import Link from 'next/link';
// Icons 
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

export default function Footer() {
    return (
        <div className=' relative snap-center'>
            <svg className=' absolute right-0 left-0 top-0 rotate-180 fill-white' viewBox="0 0 500 150" preserveAspectRatio='none' width="100%" height="150">
                <path
                    d="M0,150 L0,40 Q250,150 500,40 L580,150 Z" />
            </svg>
            <div className=" flex justify-center items-center flex-col gap-16 p-20 text-white bg-[url('/images/jpg/footer-bg.jpg')] bg-cover bg-center bg-no-repeat z-50">
                <div className=" flex justify-center items-center gap-5 flex-col">
                    <Image
                        src={'/images/png/logo-primary.png'}
                        alt='logo'
                        width={80}
                        height={0}
                    />
                    <p className='  leading-6 max-w-[35rem] text-sm text-center'>"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."</p>
                </div>
                <div className=" flex flex-col text-center">
                    <span className=' text-lg mb-3'>فروشگاه ها</span>
                    <span className=' text-zinc-300 hover:text-zinc-200 transition-colors'>خیابان دانزمیر، لس آنجلس، کالیفرنیا 90036، ایالات متحده آمریکا</span>
                    <span className=' text-zinc-300 hover:text-zinc-200 transition-colors'>خیابان آتکینز، بروکلین، نیویورک 11208، ایالات متحده</span>
                </div>
                <div className=" flex flex-col text-center  ">
                    <span className='text-lg mb-3'>اخبار تازه مثل قهوه ما</span>
                    <div className=" relative">
                        <input type="email" placeholder='آدرس ایمیل شما...' className='w-72 p-3 rounded bg-white text-black placeholder:text-black placeholder:text-xs bg-[rgba(0,0,0,0.1)] border-1 border-zinc-400 focus:border-black transition-all duration-200 outline-none' />
                        <div className=" absolute left-0 bottom-0 rounded-l text-white bg-black hover:bg-primary h-full flex justify-center items-center p-3 text-2xl transition-colors">
                            <CiMail />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary">
                <div className=" container mx-auto flex justify-center md:justify-between items-center flex-wrap gap-5 p-10 ">
                    <div className=" flex justify-center items-center gap-5 text-white text-lg">
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
                    <div className="flex justify-center items-center gap-5 md:mr-24">
                        <Link href={'/'}>
                            <span className="text-white hover:text-primary transition-colors">صفحه اصلی</span>
                        </Link>
                        <Link href={''}>
                            <span className="text-white hover:text-primary transition-colors">فروشگاه</span>
                        </Link>
                        <Link href={'about-us'}>
                            <span className="text-white hover:text-primary transition-colors">درباره ما</span>
                        </Link>
                        <Link href={''}>
                            <span className="text-white hover:text-primary transition-colors">تماس با ما</span>
                        </Link>
                    </div>
                    <span>
                        <a href="https://github.com/Gjadam">
                            <span className=' flex justify-center items-center gap-1 text-white hover:text-primary transition-colors duration-200'>ساخته شده با<IoMdHeart className='text-red-500' />توسط TheGjadam</span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}
