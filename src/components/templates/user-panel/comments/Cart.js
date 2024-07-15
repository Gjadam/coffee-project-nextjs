"use client"

// SweetAlert
import Swal from "sweetalert2"

// Icons
import { FaStar } from "react-icons/fa"

export default function Cart({ _id, body, score, productID, isAccept, date }) {

    const showCommentBody = () => {
        Swal.fire({
            text: body,
            confirmButtonText: "باشه"
        })
    }
    return (
        <div className=" flex justify-between items-center gap-10 w-full hover:bg-gray-100 rounded-lg p-3 transition-colors">
            <span className=' max-w-44 min-w-44 text-center'>{_id}</span>
            <span className=' max-w-44 min-w-44 text-center'>{productID.name}</span>
            <span className='flex justify-center items-center max-w-24 min-w-24 text-center'>
                {
                    new Array(score).fill(0).map((star, index) => <FaStar key={index} className=' text-yellow-400' />)
                }
                {
                    new Array(5 - score).fill(0).map((star, index) => <FaStar key={index} className=' text-zinc-300' />)
                }
            </span>
            <div className=" flex justify-center items-center gap-5 text-sm">
                <span>
                    {
                        new Date(date).toLocaleDateString("fa-IR")
                    }
                </span>
                <span className={`text-white min-w-24 text-center p-2 rounded-md ${isAccept ? 'bg-green-500' : "bg-zinc-400"}`} >
                    {
                        isAccept ? "تایید شده" : "در انتظار تایید"
                    }
                </span>
                <span className=' bg-sky-500 text-white min-w-24 text-center p-2  rounded-md ' onClick={showCommentBody}>مشاهده</span>
            </div>
        </div >
    )
}
