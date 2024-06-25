
// Components
import Link from 'next/link'
import Button from '../components/modules/Button/Button'
import NavBar from '../components/modules/NavBar/NavBar'

// Authorization
import { authUser } from '@/utils/serverHelpers'

export default async function NotFound() {

    const user = await authUser()

    return (

        <>
            <NavBar isLogin={user} />
            <div className="flex justify-center items-center h-screen ">
                <div className=" flex justify-center items-center flex-col gap-5 h-full">
                    <h1 className=' text-[10rem] scale-150 text-primary'>404</h1>
                    <h2 className=' text-secondary text-lg'>صفحه مورد نظر پیدا نشد</h2>
                    <p className=' text-zinc-400 text-sm'> متاسفانه صفحه ای که دنبالشی وجود نداره !</p>
                        <Link href={'/'}>
                            <Button text={'بازگشت به صفحه اصلی'} type={'outline'} />
                        </Link>
                </div>
            </div>
        </>
    )
}
