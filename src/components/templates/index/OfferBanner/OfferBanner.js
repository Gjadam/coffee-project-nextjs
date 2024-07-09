
// Components
import OfferBox from '@/components/modules/OfferBox/OfferBox'
import SectionHeader from '@/components/modules/SectionHeader/SectionHeader'

export default function OfferBanner() {
    return (
        <div className=" w-full  p-28  flex justify-center items-center snap-center   bg-white">
            <div className=" flex justify-center items-center flex-col gap-5 text-center">
                <SectionHeader title={'پیشنهاد خوشمزه ما'} />
                <div data-aos='fade-up' className=" flex justify-center items-center flex-wrap gap-24">
                    <OfferBox imgUrl={'/images/png/landing-icon1.png'} title={'انواع قهوه'} text={'اگر متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود'} />
                    <OfferBox imgUrl={'/images/png/landing-icon2.png'} title={'انواع دانه'} text={'اگر متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود'} />
                    <OfferBox imgUrl={'/images/png/landing-icon3.png'} title={'قهوه و شیرینی'} text={'اگر متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود'} />
                    <OfferBox imgUrl={'/images/png/landing-icon4.png'} title={'قهوه برای رفتن'} text={'اگر متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود'} />
                </div>
            </div>
        </div>
    )
}
