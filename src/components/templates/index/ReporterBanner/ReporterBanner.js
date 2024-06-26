
// Components
import HeraldBox from '@/components/modules/HeraldBox/HeraldBox'
import SectionHeader from '@/components/modules/SectionHeader/SectionHeader'

export default function ReporterBanner() {
    return (
        <div className=" w-full p-24 relative flex justify-center items-center snap-center  bg-[url('/images/jpg/landing-bg2.jpg')] bg-cover bg-no-repeat">
            <div className="flex justify-center items-center flex-col gap-5 text-center">
                <SectionHeader title={'خبرنگار قهوه'} />
                <div data-aos='fade-up' className="flex justify-center items-center flex-wrap gap-24 mt-10">
                    <HeraldBox imgUrl={'/images/jpg/herald1.jpg'} title={'تکنیک های آماده سازی'} />
                    <HeraldBox imgUrl={'/images/jpg/herald2.jpg'} title={'تکنیک های آماده سازی'} />
                    <HeraldBox imgUrl={'/images/jpg/herald3.jpg'} title={'تکنیک های آماده سازی'} />
                </div>
            </div>
        </div>
    )
}
