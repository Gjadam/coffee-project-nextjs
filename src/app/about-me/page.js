import Image from 'next/image'

// Components
import NavBar from '../../components/modules/NavBar/NavBar'
import CategoryHeader from '../../components/modules/CategoryHeader/CategoryHeader'
import SectionHeader from '../../components/modules/SectionHeader/SectionHeader'
import AboutMeBox from '../../components/modules/AboutMeBox/AboutMeBox'
import Footer from '../../components/modules/Footer/Footer'

// Backend
import { authUser } from '@/utils/serverHelpers'

// Icons

export default async function About_me() {

    const user = await authUser()

    return (
        <>
            <NavBar isLogin={user} />
            <CategoryHeader title={'درباره من'} />
            <div className=" flex flex-col gap-24">
                <div className=" container mx-auto p-10">
                    <div data-aos='fade-down' className=" flex items-center flex-col gap-8">
                        <SectionHeader title={'درباره سازنده'} text={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'} />
                        <p className=' text-center text-sm opacity-60 max-w-[35rem]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                        <Image
                            src={'/images/png/owner-sign.png'}
                            alt='owner-sign'
                            width={150}
                            height={0}
                        />
                    </div>
                </div>
                <SectionHeader title={"علایق من"} />
                <div  className="flex justify-center items-center flex-wrap gap-5">
                   <AboutMeBox imgUrl='/images/jpg/about-me-img-1.jpg' />
                   <AboutMeBox imgUrl='/images/jpg/about-me-img-2.jpg' />
                   <AboutMeBox imgUrl='/images/jpg/about-me-img-3.jpg' />
                   <AboutMeBox imgUrl='/images/jpg/about-me-img-4.jpg' />
                </div>
            </div>
            <Footer />
        </>
    )
}
