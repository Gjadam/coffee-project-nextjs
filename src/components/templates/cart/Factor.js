"use client"
import { useState } from "react";

// Components
import Button from "@/components/modules/Button/Button";
import ProductPrice from "@/components/modules/ProductPrice/ProductPrice";
import Select from "react-select";

// State Options
import stateData from "@/utils/stateData";
const stateOptions = stateData();

export default function Factor({totalPrice}) {

    const [stateSelectedOption, setStateSelectedOption] = useState(null);
    const [changeAddress, setChangeAddress] = useState(false);

    return (
        <div className=" flex justify-center items-center flex-col gap-5 w-full p-5 overflow-hidden border-1 rounded-lg bg-zinc-50">
            <span className=" w-full text-center">جمع کل سبد خرید</span>
            <div className=" flex justify-between items-center w-full border-b-1 pb-3">
                <span>جمع جزء</span>
                <ProductPrice price={255_000} />
            </div>
            <div className=" flex justify-between items-center w-full">
                <span>حمل و نقل</span>
                <div className=" flex flex-col gap-3  text-sm text-zinc-600">
                    <div className="flex items-center gap-2">
                        <span className="">پیک موتوری:</span>
                        <ProductPrice price={30_000} />
                    </div>
                    <span>حمل و نقل به تهران</span>
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
                        <input type="text" placeholder="شهر" className=" w-full outline-blue-500 border-1 border-zinc-300 rounded placeholder:text-zinc-400 p-1.5" />
                        <input type="number" placeholder="کد پستی" className=" w-full outline-blue-500 border-1 border-zinc-300 rounded placeholder:text-zinc-400 p-1.5" />
                    <Button text={"بروزرسانی"} type={'outline'} onClick={() => setChangeAddress(false)} />
                </div>
            </div>
            <div className=" flex justify-between items-center w-full">
                <span>مجموع</span>
                <ProductPrice price={totalPrice} />
            </div>
            <Button fullWith={true} text={"ادامه جهت تسویه حساب"} />
        </div>
    )
}
