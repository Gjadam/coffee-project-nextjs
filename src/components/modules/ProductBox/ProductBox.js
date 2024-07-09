import Image from 'next/image'

// Components
import AddToWishlist from './AddToWishlist';
import ProductPrice from '../ProductPrice/ProductPrice';

// Icons
import { FaRegStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";

// Backend

export default async function ProductBox({ _id, name, price, shortDescription, score, img }) {

    return (
        <div className=" relative w-80 flex justify-center items-center text-start flex-col bg-white p-5 rounded-2xl  hover:border-1 border-opacity-0 hover:border-opacity-100 border-primary transition-all duration-200">
            <div className=" flex justify-center items-center flex-col w-full gap-5">
                <div className=" w-72 h-72">
                <Image
                    alt="product"
                    src={img}
                    width={0}
                    height={0}
                    sizes='100%'
                    className=' w-full h-full rounded-lg'
                    />
                    </div>
                <div className=" w-full">
                    <h2 className=" text-xl text-zinc-600 max-w-64">{name}</h2>
                    <p  className='  mb-2 text-zinc-400 text-sm'>{shortDescription?.length > 20 ? `${shortDescription.slice(0, 60)}...` : shortDescription}</p>
                    <ProductPrice price={price} />
                </div>
                <div className=" flex justify-between items-center w-full">
                    <div className=" flex justify-center items-center gap-3">
                        <div className=" bg-zinc-100 text-zinc-600 p-3 rounded-full cursor-pointer hover:bg-primary hover:text-white transition-colors ">
                            <HiOutlineShoppingCart />
                        </div>
                        <AddToWishlist productID={_id} />
                    </div>
                    <div className=" flex justify-center items-center flex-row-reverse text-lg">
                        {
                            new Array(score).fill(0).map((star, index) => <FaRegStar key={index} className=' text-yellow-400' />)
                        }
                        {
                            new Array(5 - score).fill(0).map((star, index) => <FaRegStar key={index} className=' text-zinc-300' />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
