"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

// Components
import ProductPrice from "@/components/modules/ProductPrice/ProductPrice";
import QuantityCounter from "@/components/modules/QuantityCounter/QuantityCounter";

// Icons
import { TiTimes } from "react-icons/ti";

// SweetAlert
import toastAlert from "@/utils/toastAlert";

export default function Box({ id, name, price, count: productCount }) {
    const router = useRouter()
    const [count, setCount] = useState(productCount)

    const removeProductFromCart = () => {
        const localCart = JSON.parse(localStorage.getItem("cart")) || []

        const updatedProducts = localCart.filter(product => product.id !== id);

        localStorage.setItem('cart', JSON.stringify(updatedProducts));

        toastAlert.fire({
            text: "محصول با موفقیت از سبدخرید حذف شد.",
            icon: "success",
        }).then(() => {
            router.refresh()
        })
    }

    return (
        <div className=" overflow-x-auto flex justify-between items-center gap-5 p-5 border-y-1 hover:bg-zinc-50 transition-colors">
            <div className="" onClick={removeProductFromCart}>
                <TiTimes className=" text-xl text-zinc-500 hover:text-red-500  transition-colors" />
            </div>
            <span className=" max-w-24 text-center">{name}</span>
            <ProductPrice price={price} />
            <QuantityCounter count={count} setCount={setCount} />
            <div className=" flex items-center gap-3">
                <span>مجموع:</span>
                <ProductPrice price={price * count} />
            </div>
        </div>
    )
}
