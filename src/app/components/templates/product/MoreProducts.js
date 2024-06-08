'use client'

// Components
import SectionHeader from '../../modules/SectionHeader/SectionHeader'
import ProductBox from '../../modules/ProductBox/ProductBox';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function MoreProducts({ relatedProducts }) {
    return (
        <div data-aos='fade-up' className=' my-20'>
            <SectionHeader title={'محصولات مرتبط'} />
            <div className="">

                <Swiper
                    style={{
                        '--swiper-navigation-color': '#be9c79',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        720: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4,
                        },
                    }}
                    slidesPerView={4}
                    loop={true}
                    speed={1000}
                    navigation={true}
                    autoplay={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {
                        relatedProducts.map(product => (
                            <SwiperSlide>
                                <Link href={`/product/${product._id}`}>
                                    <div className=" flex justify-center">
                                        <ProductBox key={product._id} {...product} />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}
