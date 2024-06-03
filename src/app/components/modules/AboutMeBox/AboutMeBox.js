'use client'
import { useState } from "react";
import Image from "next/image";

// Icons
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineZoomInMap, MdOutlineZoomOutMap } from "react-icons/md";
import { LiaTimesCircleSolid } from "react-icons/lia";

export default function AboutMeBox({ imgUrl }) {

    const [showImageFullWidth, setShowImageFullWidth] = useState(false)
    const [isZoomInImage, setIsZoomInImage] = useState(false)

    return (
        <>
            <div className=" flex justify-center items-center  relative group rounded-xl overflow-hidden" onClick={() => setShowImageFullWidth(true)}>
                <Image
                    src={imgUrl}
                    alt='about-me-img'
                    width={400}
                    height={0}
                    className=' group-hover:brightness-50 transition-all duration-200'
                />
                <div className=" absolute text-white text-5xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    <CiCirclePlus />
                </div>
            </div>
            {
                <div className={` ${showImageFullWidth ? 'visible opacity-100' : 'invisible opacity-0 '} flex justify-center items-center flex-col z-50 p-10 fixed left-0 right-0 bottom-0 top-0 bg-zinc-950 bg-opacity-70 transition-all duration-300 `}>
                    <div className="">
                        <div className=" flex justify-between items-center text-white  mb-5">
                            <div className="hidden md:block">
                                {
                                    isZoomInImage ? (
                                        <MdOutlineZoomInMap className="text-3xl cursor-pointer hover:text-primary transition-colors" onClick={() => setIsZoomInImage(false)} />
                                    ) : (
                                        <MdOutlineZoomOutMap className="text-3xl cursor-pointer hover:text-primary transition-colors" onClick={() => setIsZoomInImage(true)} />
                                    )
                                }
                            </div>
                            <LiaTimesCircleSolid className="text-4xl cursor-pointer hover:text-red-500 transition-colors" onClick={() => setShowImageFullWidth(false)} />
                        </div>
                        <Image
                            src={imgUrl}
                            alt='about-me-img'
                            width={isZoomInImage ? 800 : 600}
                            height={0}
                            className='rounded-xl transition-all duration-300'
                        />
                    </div>
                </div>
            }
        </>
    )
}
