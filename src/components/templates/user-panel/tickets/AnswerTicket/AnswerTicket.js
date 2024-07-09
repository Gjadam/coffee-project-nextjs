import Link from "next/link";

// Components
import Button from "@/components/modules/Button/Button";
import AnswerBox from "./AnswerBox";

export default function AnswerTicket({ ticket, answerTicket }) {

    return (
        <div className='p-5 w-full'>
            <div className=" flex justify-between items-center gap-5 border-b-1 pb-3">
                <span className=' text-xl'>{ticket.title}</span>
                <Link href={'/p-user/tickets/send-ticket'}>
                    <Button type={'simple'} text={"ارسال تیکت جدید"} />
                </Link>
            </div>
            <div className=" flex flex-col gap-5 mt-5  w-full">
                <AnswerBox {...ticket} type={'user'} />
                {
                    answerTicket ? (
                        <AnswerBox {...answerTicket} type={'admin'} />
                    ) : (
                        <p className=" bg-red-500 text-white w-full p-5 text-center">هنوز پاسخی دریافت نکردید</p>
                    )
                }
            </div>
        </div>
    )
}
