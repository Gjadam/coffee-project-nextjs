import Image from 'next/image'
// Components
import Button from '@/components/modules/Button/Button'
// Icons
import { LuMouse } from 'react-icons/lu'


export default function Header() {
    return (
        <div className=" relative flex justify-center lg:justify-start items-center snap-center  w-full h-full  p-28  text-black bg-[url('/images/jpg/landing-bg.jpg')] bg-fixed bg-cover bg-no-repeat">
            <div data-aos='fade-up' className=" flex justify-center items-center flex-col gap-5  text-center">
                <Image
                    src={'/images/png/slider-logo4.png'}
                    alt="logo"
                    width={300}
                    height={100}
                ></Image>
                <h1 className="text-5xl md:text-7xl lg:text-9xl ">باریستا</h1>
                <Image
                    src={'/images/png/title-separator.png'}
                    alt="logo"
                    width={200}
                    height={100}
                ></Image>
                <p className=" opacity-70 md:text-xl max-w-[35rem]">اگر متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود</p>
                <Button text={'فروشگاه'} type={'outline'} />
            </div>
            <svg className=' absolute right-0 left-0 bottom-0 fill-white' viewBox="0 0 500 150" preserveAspectRatio='none' width="100%" height="150">
                <path
                    d="M0,150 L0,40 Q250,150 500,40 L580,150 Z" />
            </svg>
            <div className=" hidden md:flex justify-center items-center flex-col absolute left-0 right-0 bottom-1 z-40 ">
                <div className="text-black text-3xl  ">
                    <div className=" bg-white p-5 rounded-full relative after:absolute after:top-6 after:right-[33px] after:bg-white after:p-0.5 after:rounded-full after:animate-toBottomFromTop">
                        <LuMouse className="opacity-60 " />
                    </div>
                </div>
            </div>
        </div>
    )
}
