

// Icons
import { FaCircleCheck } from "react-icons/fa6";

export default function Stepper({ step }) {
    return (
        <div className=' flex justify-center items-center gap-10 mt-10'>
            <div className="flex justify-center items-center flex-col gap-2 w-20 text-primary ">
                <FaCircleCheck className=" text-3xl"/>
                <span className=" text-sm">سبد خرید</span>
            </div>
            <div className={`flex justify-center items-center flex-col gap-2 w-20 ${step === 'checkout' ? 'text-primary after:bg-primary' : step === 'complete' ? 'text-primary after:bg-primary' : 'text-zinc-400 after:bg-zinc-400'} relative after:absolute  after:w-[6rem] after:h-[2px] after:-right-[4.3rem] after:top-3.5 after:-z-10`}>
                <FaCircleCheck className=" text-3xl"/>
                <span className=" text-sm">پرداخت</span>
            </div>
            <div className={`flex justify-center items-center flex-col gap-2 w-20 ${step === 'complete' ? 'text-primary after:bg-primary' : 'text-zinc-400 after:bg-zinc-400'} relative after:absolute  after:w-[6rem] after:h-[2px] after:-right-[4.3rem] after:top-3.5 after:-z-10`}>
                <FaCircleCheck className=" text-3xl"/>
                <span className=" text-sm">تکمیل سفارش</span>
            </div>
        </div>
    )
}
