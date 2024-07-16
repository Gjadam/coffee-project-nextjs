import Image from 'next/image'

export default function SectionHeader({title, text}) {
    return (
        <div className=' flex justify-center items-center flex-col gap-5 text-center'>
            <h1 className=" text-4xl">{title}</h1>
            <Image
                src={'/images/png/title-separator.png'}
                alt="logo"
                width={200}
                height={100}
            ></Image>
            <p className=" opacity-60 text-xl max-w-[35rem]">{text}</p>
        </div>
    )
}
