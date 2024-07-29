
// Components
import Alert from "@/components/modules/Alert/Alert";
import ProductBox from "@/components/modules/ProductBox/ProductBox";
import Link from "next/link";

export default function Search({ products }) {
    return (
        <div className=' container mx-auto my-28'>
            <div className=" flex justify-center items-center flex-wrap gap-10">

            {
                products.length > 0 ? (
                    products.map(product => (
                        <Link href={`/product/${product._id}`}>
                            <ProductBox key={product._id} {...product} />
                        </Link>
                    ))
                ) : (
                    <Alert title={'محصول موردنظر یافت نشد'} text={"متاسفانه محصولی که به دنبال اون هستید پیدا نشد."} buttonText={"برگشت به فروشگاه"} route={'/shop'} />
                )
            }
            </div>
        </div>
    )
}
