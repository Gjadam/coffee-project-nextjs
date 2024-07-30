import Image from 'next/image'
// Components
import Button from '@/components/modules/Button/Button'

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
                <p className=" opacity-70 md:text-xl max-w-[35rem]">"جادوی قهوه را در هر لحظه از زندگی تان تجربه کنید."</p>
                <Button text={'فروشگاه'} type={'outline'} />
            </div>
            <svg className=' absolute right-0 left-0 bottom-0 fill-white' viewBox="0 0 500 150" preserveAspectRatio='none' width="100%" height="150">
                <path
                    d="M0,150 L0,40 Q250,150 500,40 L580,150 Z" />
            </svg>
            <div className=" hidden md:flex justify-center items-center flex-col absolute left-0 right-0 bottom-1 z-40 ">
                <div className=" bg-white p-5 rounded-full relative after:absolute after:top-10 after:right-[29px] after:bg-black after:w-0.5 after:h-[5px] after:rounded-full  after:animate-trackBallSlide">
                    <div class=" w-5 animate-nudgeMouse">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 45" enable-background="new 0 0 30 45">
                            <path class="nectar-scroll-icon-path" fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
