"use client"
import { useEffect, useState } from 'react'


// Components
import FormInput from '@/components/modules/FormInput/FormInput'
import Stepper from '@/components/modules/Stepper/Stepper'
import Box from '@/components/templates/cart/Box'
import Factor from './Factor'

// SweetAlert
import Swal from 'sweetalert2'
import toastAlert from '@/utils/toastAlert'

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [discount, setDiscount] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("cart")) || []
        setCart(localCart)
    }, [])

    useEffect(calcTotalPrice, [cart])

    function calcTotalPrice() {
        let price = 0;
        if (cart.length) {
            price = cart.reduce((prev, current) => prev + current.price * current.count, 0)
            setTotalPrice(price)
        }
    }

    const checkDiscount = async () => {
        const res = await fetch('/api/discounts/use', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ code: discount })
        })
        if (res.status === 404) {
            toastAlert.fire({
                title: "کد تخفیف وارد شده معتبر نیست!",
                icon: "error",
            })
        } else if (res.status === 422) {
            toastAlert.fire({
                title: "کد تخفیف منقضی شده!",
                icon: "error",
                confirmButtonText: "تلاش مجدد"
            })
        } else if (res.status === 200) {
            const discountCode = await res.json()
            const newPrice = totalPrice - (totalPrice * discountCode.percent) / 100
            setTotalPrice(newPrice)
            toastAlert.fire({
                title: "کد تخفیف با موفقیت اعمال شد.",
                icon: "success",
            }).then(() => {
                setDiscount("")
            })
        }
    }

    return (
        <>
            <Stepper step={'cart'} />
            <div className="container mx-auto flex justify-center items-start flex-col xl:flex-row gap-10 my-20 p-5">
                <div className=" w-full xl:w-4/5 flex flex-col gap-5">
                    {
                        cart.map((cart) => (
                            <Box key={cart.id} {...cart} />
                        ))
                    }
                    <div className="relative flex justify-center items-end w-full xl:w-96">
                        <FormInput type={'text'} value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder={'کد تخفیف'} />
                        <div className="absolute left-0 bottom-0" onClick={checkDiscount}>
                            <button className=" bg-primary hover:bg-secondary text-white p-[17px] transition-colors">اعمال کوپن</button>
                        </div>
                    </div>
                </div>
                <div className=" w-full xl:w-1/3">
                    <Factor totalPrice={totalPrice} />
                </div>
            </div>
        </>
    )
}
