'use client'
import Image from 'next/image'

// Infinite Logo
import Slider from 'react-infinite-logo-slider'

export default function InfiniteLogos() {
  return (
    <div data-aos='fade' className=" w-full h-80 relative flex justify-center items-center snap-center bg-white overflow-x-hidden">
    <div className="flex justify-center items-center flex-col gap-5 text-center">
        <Slider
            width="300px"
            duration={15}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <Image
                    alt="slider-logo"
                    src={"/images/png/slider-logo1.png"}
                    width={300}
                    height={100}
                />
            </Slider.Slide>
            <Slider.Slide>
                <Image
                    alt="slider-logo"
                    src={"/images/png/slider-logo2.png"}
                    width={300}
                    height={100}
                />
            </Slider.Slide>
            <Slider.Slide>
                <Image
                    alt="slider-logo"
                    src={"/images/png/slider-logo3.png"}
                    width={300}
                    height={100}
                />
            </Slider.Slide>
            <Slider.Slide>
                <Image
                    alt="slider-logo"
                    src={"/images/png/slider-logo4.png"}
                    width={300}
                    height={100}
                />
            </Slider.Slide>
            <Slider.Slide>
                <Image
                    alt="slider-logo"
                    src={"/images/png/slider-logo5.png"}
                    width={300}
                    height={100}
                />
            </Slider.Slide>
            <Slider.Slide>
                <Image
                    alt="slider-logo"
                    src={"/images/png/slider-logo6.png"}
                    width={300}
                    height={100}
                />
            </Slider.Slide>
        </Slider>
    </div>
</div>
  )
}
