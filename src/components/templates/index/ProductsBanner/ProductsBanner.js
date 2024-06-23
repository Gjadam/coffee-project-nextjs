
// Components
import SectionHeader from '@/components/modules/SectionHeader/SectionHeader'
import Button from '@/components/modules/Button/Button'

export default function ProductsBanner() {
    return (
        <div className=" w-full  p-36  flex justify-end items-center snap-center  bg-[url('/images/jpg/landing-bg4.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
            <div data-aos='fade-right' className=" flex justify-center items-center flex-col gap-5 text-center text-black">
                <SectionHeader title={'محصولات قهوه'} />
                <Button type={'outline'} text={'بیشتر ببینید'} />
            </div>
        </div>
    )
}
