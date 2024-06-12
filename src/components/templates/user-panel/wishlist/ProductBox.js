"use client"
import Image from 'next/image'

// Components
import ProductPrice from '@/components/modules/ProductPrice/ProductPrice'
import Button from '@/components/modules/Button/Button'

// SweetAlert
import Swal from 'sweetalert2'

export default async function ProductBox({ productID, name, price }) {

    const removeProduct = () => {
        swal({
            title: "آیا از حذف محصول اطمینان دارید؟",
            icon: "warning",
            buttons: ["نه", "آره"]
        }).then(async (result) => {
            if (result) {
                const res = await fetch(`/api/wishlist/${productID}`, {
                    method: "DELETE"
                })
                if (res.status === 200) {
                    Swal.fire({
                        title: "محصول با موفقیت از علاقه مندی ها حذف شد",
                        icon: "success",
                        confirmButtonText: "باشه"
                    }).then(() => {
                        location.reload()
                    })
                }
            }
        })
    }

    return (
        <div className=" relative w-80 flex justify-center items-center text-start flex-col bg-white p-5 rounded-2xl border-1 transition-all duration-200">
            <div className=" flex justify-center items-center flex-col w-full gap-5">
                <Image
                    alt="product"
                    src={"/images/jpg/product2.jpg"}
                    width={290}
                    height={0}
                    className=' rounded-lg'
                />
                <div className=" w-full">
                    <h2 className=" text-xl text-zinc-600 max-w-64">{name}</h2>
                    <ProductPrice price={price} />
                </div>
                <Button type={'outline'} text={'حذف محصول'} fullWith={true} onClick={removeProduct} />
            </div>
        </div>
    )
}
