import Image from 'next/image'

export default function SectionHeader({title}) {
    return (
        <div data-aos='zoom-in-down' className=' flex justify-center items-center flex-col gap-5'>
            <h1 className=" text-5xl">{title}</h1>
            <Image
                src={'/images/png/title-separator.png'}
                alt="logo"
                width={200}
                height={100}
            ></Image>
            <p className=" opacity-60 text-xl max-w-[35rem]">اگر متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود</p>
        </div>
    )
}
