"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

// Components
import Button from "@/components/modules/Button/Button";
import ProductPrice from "@/components/modules/ProductPrice/ProductPrice";
import Select from "react-select";

// State Options
import stateData from "@/utils/stateData";
import Swal from "sweetalert2";
const stateOptions = stateData();

export default function Factor({ totalPrice, cart }) {

    const router = useRouter()

    const [stateSelectedOption, setStateSelectedOption] = useState(null);
    const [changeAddress, setChangeAddress] = useState(false);

    const orderProducts = async () => {

        const orders = {
            cart,
            totalPrice
        }

        const res = await fetch('/api/orders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orders)
        })
        if (res.status === 200) {
            Swal.fire({
                title: "خرید شما با موفقیت انجام شد.",
                icon: "success",
                confirmButtonText: "دیدن سفارشات"
            }).then(result => {
                if (result.isConfirmed) {
                    router.replace('/p-user/orders')
                } else {
                    router.refresh()
                }
                localStorage.removeItem("cart")
            })
        }
    }

    return (
        <div className=" flex justify-center items-center flex-col gap-5 w-full p-5 overflow-hidden border-1 rounded-lg bg-zinc-50">
            <span className=" w-full text-center border-b-1 pb-3">جمع کل سبد خرید</span>
            <div className=" flex justify-between items-center w-full">
                <span>حمل و نقل</span>
                <div className=" flex flex-col gap-3  text-sm text-zinc-600">
                    <div className="flex items-center gap-2">
                        <span className="">هزینه ارسال:</span>
                        <ProductPrice price={30_000} />
                    </div>
                    {
                        stateSelectedOption ? (
                            <span>حمل و نقل به {stateSelectedOption?.label}</span>

                        ) : (
                            <span className=" max-w-36 text-red-500">لطفا ادرس را با فشردن دکمه تغییر آدرس در زیر وارد کنید</span>
                        )
                    }
                </div>
            </div>
            <div className=" flex items-start flex-col gap-5 w-full border-b-1 pb-3">
                <div className=" mr-4">
                    <Button text={"تغییر آدرس"} type={'simple'} onClick={() => setChangeAddress(!changeAddress)} />
                </div>
                <div data-aos='fade-left' className={` ${changeAddress ? 'block' : 'hidden'} flex flex-col gap-5 w-full transition-all z-50`}>
                    <Select
                        defaultValue={stateSelectedOption}
                        onChange={setStateSelectedOption}
                        isClearable={true}
                        placeholder={"استان"}
                        isRtl={true}
                        isSearchable={true}
                        options={stateOptions}
                    />
                    <select className=" w-full outline-blue-500 border-1 border-zinc-300 rounded text-zinc-500  p-1.5">
                        <option value={-1} >شهر</option>
                        {
                            stateSelectedOption?.value &&
                            stateSelectedOption.value.map(cities => (
                                <option value={cities}>{cities}</option>
                            ))
                        }
                    </select>
                    <Button text={"بروزرسانی"} type={'outline'} onClick={() => setChangeAddress(false)} />
                </div>
            </div>
            <div className=" flex justify-between items-center w-full">
                <span>مجموع</span>
                <ProductPrice price={totalPrice} />
            </div>
            <Button fullWith={true} text={"ادامه جهت تسویه حساب"} onClick={orderProducts} />
        </div>
    )
}
