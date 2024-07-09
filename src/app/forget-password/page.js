import Link from 'next/link'

// Components
import RegisterFormTitle from '../../components/modules/RegisterFormTitle/RegisterFormTitle'
import FormInput from '../../components/modules/FormInput/FormInput'
import Button from '../../components/modules/Button/Button'

export default function Forget_password() {
  return (
    <div className=' flex gap-5 w-full h-screen  overflow-hidden '>
      <div className=" h-full hidden lg:block lg:w-3/5 p-10 ">
        <div className=" w-full  h-full rounded-3xl bg-[url('/images/jpg/register-bg.jpg')] bg-cover bg-center bg-no-repeat ">
        </div>
      </div>
      <div className="flex justify-start items-center w-full lg:w-2/5 transition-all duration-200">
        <div className=" flex justify-start items-center w-full p-10">
          <div data-aos='fade-right' className=' w-full'>
            <RegisterFormTitle title={'بازیابی رمز عبور'} />
            <div className=" flex flex-col gap-5 my-5">
              <FormInput placeholder={'ایمیل یا شماره مویایل'} type={'text'} />
              <Button text={'بازیابی رمز عبور'} fullWith={true}/>
              <Link href={'/login-register'}>
                <Button text={'بازگشت به صفحه ورود'} type={'outline'} fullWith={true}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
