import Image from 'next/image'

// Components
import NavBar from '../../components/modules/NavBar/NavBar'
import CategoryHeader from '../../components/modules/CategoryHeader/CategoryHeader'
import SectionHeader from '../../components/modules/SectionHeader/SectionHeader'
import AboutMeBox from '../../components/modules/AboutMeBox/AboutMeBox'
import Footer from '../../components/modules/Footer/Footer'

// Backend
import { authUser } from '@/utils/serverHelpers'

export const metadata = {
    title: 'باریستا |  درباره من',
  }

export default async function About_me() {

    const user = await authUser()

    return (
        <>
            <NavBar isLogin={user} />
            <CategoryHeader title={'درباره من'} />
            <div className=" flex flex-col gap-24">
                <div className=" container mx-auto p-10">
                    <div data-aos='fade-down' className=" flex items-center flex-col gap-8">
                        <SectionHeader title={'درباره سازنده'} text={'محمد جواد بابائی(React & Next.js  developer)'} />
                        <p className=' text-center opacity-60 max-w-[35rem]'>در طول سال‌ها کاری در این صنعت، پروژه های متعدد با استفاده از تکنولوژی هایی از جمله React، Next.js، JavaScript، HTML/CSS و Git را توسعه داده‌ام. هدف من از طراحی و توسعه وبسایت باریستا این است که تجربه کاربری بهتری برای کاربران به ارمغان آورم و از طریق فناوری‌های نوین، بهبودهای خلاقانه ای در زمینه وب ایجاد کنم.
اگر مایل به اطلاعات بیشتری درباره من و پروژه‌های قبلی من هستید، می‌توانید صفحه گیتهاب من را به آدرس <a className=' hover:text-primary transition-colors' href="https://github.com/Gjadam">https://github.com/Gjadam</a>  مشاهده کنید.</p>
                        <Image
                            src={'/images/png/owner-sign.png'}
                            alt='owner-sign'
                            width={120}
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
