import Image from 'next/image'

// Components
import Button from '../Button/Button'

export default function HeraldBox({ imgUrl, title }) {
    return (
        <div className='   flex justify-center items-start flex-col gap-5 text-start'>
            <Image
                src={imgUrl}
                alt='herald-img'
                width={0}
                height={0}
                sizes="100vw"
                className=' w-48 md:w-96 rounded-xl'
            />
            <h2 className='text-2xl'>{title}</h2>
            <p className=' max-w-96 opacity-50 w-full'>اگر متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود</p>
            <Button type={'simple'} text={'بیشتر بخوانید'} />
        </div>
    )
}
