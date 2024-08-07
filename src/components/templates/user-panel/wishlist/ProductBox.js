"use client"
import Image from 'next/image'

// Components
import ProductPrice from '@/components/modules/ProductPrice/ProductPrice'
import Button from '@/components/modules/Button/Button'

// SweetAlert
import Swal from 'sweetalert2'
import toastAlert from '@/utils/toastAlert'

export default async function ProductBox({ productID, name, price, img }) {

    const removeProduct = () => {
        Swal.fire({
            title: "آیا میخواهید این محصول را از علاقه مندی ها حذف کنید؟",
            icon: "warning",
            showDenyButton: true,
            denyButtonText: "خیر",
            confirmButtonText: "بله"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch(`/api/wishlist/${productID}`, {
                    method: "DELETE"
                })
                if (res.status === 200) {
                    toastAlert.fire({
                        text: "محصول با موفقیت از علاقه مندی ها حذف شد",
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
                    <ProductPrice price={price} />
                </div>
                <Button type={'outline'} text={'حذف محصول'} fullWith={true} onClick={removeProduct} />
            </div>
        </div>
    )
}
