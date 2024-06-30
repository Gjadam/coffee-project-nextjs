import Image from 'next/image'

export default function SimpleBanner() {
    return (
        <div className=" w-full p-48 relative flex justify-center items-center snap-center  bg-[url('/images/jpg/sponsored-bg.jpg')] bg-fixed bg-cover bg-no-repeat">
            <div className=" flex justify-center items-center">
                <Image
                    alt="sponsored-logo"
                    src={"/images/png/slider-logo1.png"}
                    width={300}
                    height={100}
                    data-aos='zoom-in'
                />
            </div>
        </div>
    )
}
