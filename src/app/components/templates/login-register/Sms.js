// Components
import Button from '../../modules/Button/Button'
import FormInput from '../../modules/FormInput/FormInput'
import RegisterFormText from '../../modules/RegisterFormText/RegisterFormText'
import RegisterFormTitle from '../../modules/RegisterFormTitle/RegisterFormTitle'

export default function Sms({ showLoginWithOtp }) {
    return (
        <div data-aos='fade-right' className=' w-full'>
            <RegisterFormTitle title={'کد تایید'} />
            <RegisterFormText text={'لطفا کد تایید ارسال شده را تایپ کنید'} />
            <span className=' flex justify-center items-center text-center text-2xl text-primary'>09191234567</span>
            <div className=" flex flex-col gap-5 mt-3">
                <FormInput placeholder={'ایمیل یا شماره مویایل'} type={'forget-pass'} />
                <Button text={'ورود'} fullWith={true}/>
            </div>
            <RegisterFormText text={'ارسال مجدد کد یکبار مصرف'} />
            <Button text={'بازگشت به صفحه ورود'} type={'outline'} onClick={showLoginWithOtp} fullWith={true} />
        </div>
    )
}
