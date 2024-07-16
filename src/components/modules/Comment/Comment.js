import Image from 'next/image'

// Icons
import { FaStar } from 'react-icons/fa'
import { PiArrowBendDownLeft } from "react-icons/pi";

export default function Comment({ username, body, score, date, answer }) {

    return (
        <div className="border-b-1 pb-14">
            <div className=" flex items-center gap-5 ">
                <Image
                    src={'/images/png/user-icon.png'}
                    alt="user icon"
                    width={70}
                    height={0}
                    className=" rounded-full"
                />
                <div className=" flex flex-col gap-2 w-full">
                    <div className=" flex justify-between items-start w-full">
                        <div className=" flex flex-col">
                            <span className=" text-xl">{username}</span>
                            <span className=" text-sm text-primary">
                                {new Date(date).toLocaleDateString('fa-IR')}
                            </span>
                        </div>
                        <div className=" flex justify-center items-center">
                            {
                                new Array(score).fill(0).map((item, index) => <FaStar key={index} className=' text-yellow-400' />)
                            }
                            {
                                new Array(5 - score).fill(0).map((item, index) => <FaStar key={index} className=' text-zinc-300' />)
                            }
                        </div>
                    </div>
                    <p className=" text-zinc-600">{body}</p>
                </div>
            </div>
            {
                answer && 
            <div className=" flex items-start gap-5 mt-7 mr-8">
                <PiArrowBendDownLeft className=' text-4xl text-primary' />
                <div className=" flex items-start  gap-2 w-full bg-secondary p-5  rounded-3xl">
                    <Image
                        src={'/images/png/user-icon.png'}
                        alt="user icon"
                        width={50}
                        height={0}
                        className=" rounded-full"
                    />
                    <div className=" flex justify-center items-start flex-col w-full">
                        <span className=" text-xl text-primary">ادمین</span>
                        <p className=" text-white">{answer}</p>
                    </div>
                </div>
            </div>
            }
        </div>

    )
}
