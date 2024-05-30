import Image from 'next/image'

export default function AboutUsBox({ imgUrl }) {
  return (
    <div className=' max-w-[40rem]'>
    <Image
    src={imgUrl}
    alt='about-img'
    width={0}
    height={0}
    sizes='100'
    className=' w-full mb-8 rounded-2xl'
    />
    <p className=' w-full opacity-60'>اگر متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود</p>
</div>
  )
}
