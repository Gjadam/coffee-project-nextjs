'use client'
import { useState } from 'react'

// Components
import { FaFacebook, FaHeart, FaInstagram, FaMinus, FaPlus, FaRegHeart, FaStar, FaTelegram, FaTwitter } from 'react-icons/fa'
import ProductPrice from '../../modules/ProductPrice/ProductPrice'
import Button from '../../modules/Button/Button'
import Tag from '../../modules/Tag/Tag'
import swal from 'sweetalert'


export default function Details({ product, userID }) {

    const [count, setCount] = useState(1)
    const [isActiveWishlist, setIsActiveWishlist] = useState(false)

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrementCount = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1)
        } else {
            return false
        }
    }

    const addToWishlist = async () => {
        if(userID) {
   const res = await fetch(`/api/wishlist`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: userID,
                product: product._id,
            })
        })
        if (res.status === 201) {
            setIsActiveWishlist(true)
        } else {
            setIsActiveWishlist(false)
        }
        } else {
            swal({
                title: "برای افزودن محصول به علاقه مندی ها ابتدا باید لاگین کنید.",
                icon: "error",
                buttons: "باشه"
            })
        }
     
    }

    return (
        <div className="flex flex-col gap-5  w-full md:w-1/2 ">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center flex-wrap gap-2">
                    <h1 className=' text-3xl'>{product.name}</h1>
                    <div className=" flex items-center">
                        <p className=' ml-1 text-sm opacity-60'>(دیدگاه {product.comments.filter(product => product.isAccept).length} کاربر)</p>
                        {
                            new Array(product.score).fill(0).map((item, index) => <FaStar key={index} className=' text-yellow-400' />)
                        }
                        {
                            new Array(5 - product.score).fill(0).map((item, index) => <FaStar key={index} className=' text-zinc-300' />)
                        }
                    </div>
                </div>
                <ProductPrice price={product.price} />
                <p className='  w-full opacity-60'>{product.shortDescription}</p>
            </div>
            <div className=" flex items-center flex-wrap gap-10">
                <div className=" flex items-center gap-5">
                    <FaPlus className=' hover:text-primary cursor-pointer' onClick={incrementCount} />
                    <input type="number" min={1} value={count} onChange={(e) => setCount(e.target.value)} className=' outline-none w-12 h-12  overflow-hidden  flex justify-center items-center text-center text-xl text-white bg-primary  rounded-lg' />
                    <FaMinus className=' hover:text-primary cursor-pointer' onClick={decrementCount} />
                </div>
                <div className=" flex items-center gap-3">
                    <Button text={'افزودن به سبد خرید'} />
                    <div className="" onClick={addToWishlist}>
                        {
                            isActiveWishlist ? (
                                <FaHeart className=' text-lg text-red-600 hover:text-zinc-500 transition-colors cursor-pointer' />
                            ) : (
                                <FaRegHeart className=' text-lg text-zinc-600 hover:text-red-500 transition-colors cursor-pointer' />
                            )
                        }
                    </div>
                </div>
            </div>
            <div className=" flex flex-col gap-3 border-y-1 py-5">
                <Tag tagKey='شناسه محصول' tagValue={product._id} />
                <Tag tagKey='برچسب' tagValue={product.tags.join(" ,")} />
            </div>
            <div className="">
                <Tag tagKey='اشتراک گذاری' >
                    <FaTwitter className=' text-zinc-600 hover:text-primary transition-colors duration-300 cursor-pointer text-lg' />
                    <FaInstagram className=' text-zinc-600 hover:text-primary transition-colors duration-300 cursor-pointer text-lg' />
                    <FaTelegram className=' text-zinc-600 hover:text-primary transition-colors duration-300 cursor-pointer text-lg' />
                    <FaFacebook className=' text-zinc-600 hover:text-primary transition-colors duration-300 cursor-pointer text-lg' />
                </Tag>
            </div>
        </div>
    )
}
