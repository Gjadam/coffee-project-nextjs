import Image from 'next/image'

// Components
import NavBar from '../../components/modules/NavBar/NavBar'
import CategoryHeader from '../../components/modules/CategoryHeader/CategoryHeader'
import SectionHeader from '../../components/modules/SectionHeader/SectionHeader'
import AboutUsBox from '../../components/modules/AboutUsBox/AboutUsBox'
import CounterBanner from '../../components/templates/index/CounterBanner/CounterBanner'
import Button from '../../components/modules/Button/Button'
import Footer from '../../components/modules/Footer/Footer'

// Backend
import { authUser } from '@/utils/serverHelpers'

export const metadata = {
  title: 'باریستا |  درباره ما',
}

async function AboutUs() {

  const user = await authUser()
  return (
    <>
      <NavBar isLogin={user} />
      <CategoryHeader title={'درباره ما'} />
      <div className='flex justify-center items-center flex-col gap-10 mt-28 p-10 '>
        <Image
          src={'/images/png/about-title.png'}
          alt='about-title'
          width={200}
          height={0}
          data-aos='fade-down'
        />
        <SectionHeader title={'درباره باریستا'} />
        <div data-aos='fade-up' className=" flex justify-center items-center flex-wrap gap-10">
          <AboutUsBox imgUrl={'/images/jpg/about-img1.jpg'} />
          <AboutUsBox imgUrl={'/images/jpg/about-img2.jpg'} />
        </div>
      </div>
      <CounterBanner />
      <div className="  bg-[url('/images/jpg/landing-bg2.jpg')] bg-center bg-cover bg-no-repeat">
        <div className=" container mx-auto  flex justify-between items-center flex-wrap gap-5 p-14">
          <h1 className=' text-xl'>اگر متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود</h1>
          <Button text={'ارتباط با ما'} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs