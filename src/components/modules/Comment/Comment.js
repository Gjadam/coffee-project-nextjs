import Image from 'next/image'

// Icons
import { FaStar } from 'react-icons/fa'

export default function Comment({ username, body, score, date }) {

    return (
        <div className=" flex items-center gap-5 border-b-1 pb-14">
            <Image
                src={'/images/png/user-icon.png'}
                alt="user icon"
                width={80}
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
    )
}
