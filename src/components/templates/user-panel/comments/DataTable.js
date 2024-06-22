"use client"
// Icons
import { FaEye, FaStar } from 'react-icons/fa'

// SweetAlert
import Swal from 'sweetalert2';

export default function DataTable({ comments }) {

    const showCommentBody = (commentBody) => {
        Swal.fire({
            title: commentBody,
            confirmButtonText: "باشه"
          });
    }

    return (
        <div className="relative overflow-x-auto rounded-2xl m-5">
            <table className="w-full text-center text-secondary">
                <thead className=" text-secondary border-b-1  bg-white uppercase ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            شناسه
                        </th>
                        <th scope="col" className="px-6 py-3">
                            تاریخ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            محصول
                        </th>
                        <th scope="col" className="px-6 py-3">
                            امتیاز
                        </th>
                        <th scope="col" className="px-6 py-3">
                            وضعیت
                        </th>
                        <th scope="col" className="px-6 py-3">
                            مشاهده
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        comments.map(comment => (
                            <tr className="bg-white border-b text-sm hover:bg-gray-50 transition-colors" key={comment._id}>
                                <th scope="row" className="px-6 py-4 border-l-1 ">
                                    {comment._id}
                                </th>
                                <th scope="row" className="px-6 py-4 border-l-1 ">
                                    {new Date(comment.date).toLocaleDateString('fa-IR')}
                                </th>
                                <th scope="row" className="px-6 py-4 border-l-1 ">
                                    {comment.productID.name}
                                </th>
                                <th scope="row" className="px-6 py-4 border-l-1 ">
                                    <div className="flex justify-center items-center">
                                        {
                                            new Array(comment.score).fill(0).map((star, index) => <FaStar key={index} className=' text-yellow-400' />)
                                        }
                                        {
                                            new Array(5 - comment.score).fill(0).map((star, index) => <FaStar key={index} className=' text-zinc-400' />)
                                        }
                                    </div>
                                </th>
                                <th scope="row" className="px-6 py-4 border-l-1 ">
                                    <span className={` flex justify-center rounded-md p-2 ${comment.isAccept ? 'bg-green-500' : "bg-zinc-400"}  text-xs text-white`} >
                                        {
                                            comment.isAccept ? "تایید شده" : "در انتظار تایید"
                                        }
                                    </span>
                                </th>
                                <th scope="row" className="px-6 py-4 border-l-1 ">
                                    <div className={` flex justify-center rounded-md p-2 bg-primary hover:bg-secondary text-white transition-colors duration-300 cursor-pointer`} onClick={() => showCommentBody(comment.body)} >
                                        <FaEye className=' text-base' />
                                    </div>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
