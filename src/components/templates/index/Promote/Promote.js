import Image from 'next/image'

// Components
import CoffeeShopInfoBox from '@/components/modules/CoffeeShopInfoBox/CoffeeShopInfoBox'

export default function Promote() {
    return (
        <div className=" w-full  p-28  flex justify-center flex-wrap md:flex-nowrap gap-10 items-center snap-center   bg-white">
            <div data-aos='fade-left' className="flex flex-col md:text-end  gap-10">
                <CoffeeShopInfoBox iconUrl={'/images/png/landing-icon5.png'} title={'بهترین فنجان'} />
                <CoffeeShopInfoBox iconUrl={'/images/png/landing-icon6.png'} title={'قوری موکا'} />
                <CoffeeShopInfoBox iconUrl={'/images/png/landing-icon7.png'} title={'دانه های اعلا'} />
            </div>
            <Image
                src={'/images/png/product-model.png'}
                alt="product-model"
                width={600}
                height={100}
                className=" hidden xl:block"
                data-aos='fade-up'
            />
            <div data-aos='fade-right' className=" flex flex-col gap-10 ">
                <CoffeeShopInfoBox iconUrl={'/images/png/landing-icon8.png'} title={'قهوه ساز'} iconPositionRight={true} />
                <CoffeeShopInfoBox iconUrl={'/images/png/landing-icon9.png'} title={'پرس فرانسه'} iconPositionRight={true} />
                <CoffeeShopInfoBox iconUrl={'/images/png/landing-icon10.png'} title={'قهوه بیرون بر'} iconPositionRight={true} />
            </div>
        </div>
    )
}
