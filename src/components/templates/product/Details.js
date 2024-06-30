'use client'
import { useState } from 'react'

// Components
import { FaFacebook, FaHeart, FaInstagram, FaRegHeart, FaStar, FaTelegram, FaTwitter } from 'react-icons/fa'
import ProductPrice from '../../modules/ProductPrice/ProductPrice'
import Button from '../../modules/Button/Button'
import Tag from '../../modules/Tag/Tag'

// SweetAlert
import Swal from 'sweetalert2'
import QuantityCounter from '@/components/modules/QuantityCounter/QuantityCounter'


export default function Details({ product, userID }) {

    const [count, setCount] = useState(1)
    const [isActiveWishlist, setIsActiveWishlist] = useState(false)

    const addToWishlist = async () => {
        if (userID) {
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
            Swal.fire({
                title: "برای افزودن محصول به علاقه مندی ها ابتدا باید لاگین کنید.",
                icon: "error",
                confirmButtonText: "باشه"
            })
        }
    }

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length) {
            const isInCart = cart.some((item) => item.id === product._id);

            if (isInCart) {
                cart.forEach((item) => {
                    if (item.id === product._id) {
                        item.count = item.count + count;
                    }
                });
                localStorage.setItem("cart", JSON.stringify(cart));
                Swal.fire({
                    title: "محصول با موفقیت به سبد خرید اضافه شد.",
                    icon: "success",
                    confirmButtonText: "فهمیدم"
                })
            } else {
                const cartItem = {
                    id: product._id,
                    name: product.name,
                    price: product.price,
                    count,
                };

                cart.push(cartItem);

                localStorage.setItem("cart", JSON.stringify(cart));
                Swal.fire({
                    title: "محصول با موفقیت به سبد خرید اضافه شد.",
                    icon: "success",
                    confirmButtonText: "فهمیدم"
                })
            }
        } else {
            const cartItem = {
                id: product._id,
                name: product.name,
                price: product.price,
                count,
            };

            cart.push(cartItem);

            localStorage.setItem("cart", JSON.stringify(cart));
            Swal.fire({
                title: "محصول با موفقیت به سبد خرید اضافه شد.",
                icon: "success",
                confirmButtonText: "فهمیدم"
            })
        }
    };
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
                <QuantityCounter count={count} setCount={setCount}/>
                <div className=" flex items-center gap-3">
                    <Button text={'افزودن به سبد خرید'} onClick={addToCart} />
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
