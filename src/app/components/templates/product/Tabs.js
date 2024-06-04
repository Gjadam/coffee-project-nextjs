'use client'
import { useState } from "react"

// Components
import Comment from "../../modules/Comment/Comment"
import FormInput from "../../modules/FormInput/FormInput"
import Button from "../../modules/Button/Button"
import swal from "sweetalert"

// Icons
import { FaStar } from "react-icons/fa"

export default function Tabs({ product }) {

    const [activeTab, setActiveTab] = useState('desc')
    const [hoverRateIcon, setHoverRateIcon] = useState(null)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [score, setScore] = useState(0)

    const submitComment = async () => {

        const commentData = {
            username,
            email,
            body,
            score,
            productID: product._id
        }

        const res = await fetch('/api/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentData)
        })
        if (res.status === 201) {
            swal({
                title: "کامنت با موفقیت ساخته شد.",
                icon: "success",
                buttons: "فبول"
            })
        }
    }

    return (
        <div className='flex justify-center items-center flex-col gap-8 border-y-1 py-20'>
            <div className=" flex text-center text-sm md:text-xl relative after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-zinc-300 after:-z-10">
                <span className={`pb-4 md:pb-2 px-10  border-b-2 ${activeTab === 'desc' && 'text-primary border-primary'} hover:border-b-primary hover:text-primary  cursor-pointer transition-colors duration-300 `} onClick={() => setActiveTab('desc')}>توضیحات</span>
                <span className={`pb-4 md:pb-2 px-10  border-b-2 ${activeTab === 'info' && 'text-primary border-primary'} hover:border-b-primary hover:text-primary  cursor-pointer transition-colors duration-300 relative after:absolute after:left-0 after:h-8 after:w-0.5 after:bg-zinc-300 before:absolute before:right-0 before:h-8 before:w-0.5 before:bg-zinc-300  `} onClick={() => setActiveTab('info')}>اطلاعات بیشتر</span>
                <span className={`pb-4 md:pb-2 px-10  border-b-2 ${activeTab === 'review' && 'text-primary border-primary'}  hover:text-primary   hover:border-b-primary  cursor-pointer transition-colors duration-300 `} onClick={() => setActiveTab('review')}>نظرات ({product.comments.filter(comment => comment.isAccept).length})</span>
            </div>
            <div className=" w-full p-10">
                {
                    activeTab === 'desc' ? (
                        <p data-aos='fade' className=" text-zinc-600 text-center">{product.longDescription}</p>
                    ) : activeTab === 'info' ? (
                        <table data-aos='fade' className=" w-full border-1 ">
                            <tbody>
                                <tr >
                                    <th className=" text-primary font-normal w-1/2 border-1 p-3">وزن</th>
                                    <th className="font-normal w-1/2 border-1 p-3">{product.weight} گرم</th>
                                </tr>
                                <tr>
                                    <th className=" text-primary font-normal w-1/2 border-1 p-3">رایحه</th>
                                    <th className="font-normal w-1/2 border-1 p-3">{product.smell}</th>
                                </tr>
                                <tr>
                                    <th className=" text-primary font-normal w-1/2 border-1 p-3">مناسب برای</th>
                                    <th className="font-normal w-1/2 border-1 p-3">{product.suitableFor}</th>
                                </tr>
                            </tbody>
                        </table>

                    ) : activeTab === 'review' ? (
                        <div data-aos='fade' className="">
                            <span className=" text-2xl" ><span className=" text-primary ml-1">{product.comments.filter(comment => comment.isAccept).length}</span>دیدگاه برای دانه قهوه اتیوپی</span>
                            <div className=" flex flex-col gap-10 my-10">
                                {
                                    product.comments.map(comment => (
                                        comment.isAccept &&
                                        <Comment key={comment._id} {...comment} />
                                    ))
                                }
                            </div>
                            <div className=" flex flex-col gap-5">
                                <div className="">
                                    <span className=" text-2xl" >دیدگاه خود را بنویسید</span>
                                    <p className=" text-zinc-600 text-sm ">نشانی ایمیل شما منتشر نخواهد شد.</p>
                                </div>
                                <div className=" flex items-center">
                                    <span className=" ml-3">امتیاز شما:</span>
                                    {[...Array(5)].map((star, i) => {
                                        const ratingValue = i + 1
                                        return (
                                            <label >
                                                <input type="radio" name="rating" value={ratingValue} onClick={() => setScore(ratingValue)} className="hidden" />
                                                <FaStar
                                                    className={` ${ratingValue <= (hoverRateIcon || score) ? 'text-yellow-400' : 'text-zinc-300'} active:text-yellow-300 text-xl mb-1 cursor-pointer transition-all duration-200`}
                                                    onMouseEnter={() => setHoverRateIcon(ratingValue)}
                                                    onMouseLeave={() => setHoverRateIcon(null)}
                                                />
                                            </label>
                                        )
                                    })}
                                </div>
                                <div className=" flex flex-col gap-5">
                                    <FormInput type={'textarea'} placeholder={'دیدگاه شما'} onChange={(e) => setBody(e.target.value)} />
                                    <div className=" flex justify-center items-center flex-col md:flex-row gap-5">
                                        <FormInput type={'text'} placeholder={'نام'} onChange={(e) => setUsername(e.target.value)} />
                                        <FormInput type={'email'} placeholder={'ایمیل'} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="">
                                        <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" />
                                        <label for="wp-comment-cookies-consent" className=" mr-2">ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.</label>
                                    </div>
                                    <Button text={'ثبت دیدگاه'} onClick={submitComment} />
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}
