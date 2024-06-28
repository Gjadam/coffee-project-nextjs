'use client'
import { useEffect, useState } from "react"

// Icons
import { FaHeart, FaRegHeart } from "react-icons/fa"

// SweetAlert
import Swal from "sweetalert2"

export default function AddToWishlist({ productID }) {

    const [isActiveWishlist, setIsActiveWishlist] = useState(false)
    const [userID, setUserID] = useState("")

    useEffect(() => {
        const authUser = async () => {
            const res = await fetch("/api/auth/me");
            if (res.status === 200) {
                const data = await res.json();
                setUserID(data?._id);
            }
        }
        authUser()
    }, [])

    const addToWishlist = async (e) => {
        e.preventDefault()
        if (userID) {
            const res = await fetch('/api/wishlist', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user: userID,
                    product: productID,
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
                confirmButtonText: "باشه",
                confirmButtonColor: "#3085d6",
            })
        }
    }

    return (
        <div className=" bg-zinc-100 text-zinc-600 p-3 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-colors " onClick={(e) => addToWishlist(e)}>
            {
                isActiveWishlist ? (
                    <FaHeart />
                ) : (
                    <FaRegHeart />
                )
            }
        </div>
    )
}
