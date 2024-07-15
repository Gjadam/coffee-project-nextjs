
import Link from 'next/link'
// Components
import ProductBox from '@/components/modules/ProductBox/ProductBox'
import SectionHeader from '@/components/modules/SectionHeader/SectionHeader'

// Backend
import connectToDB from '@/configs/db'
import ProductModel from '@/models/Product'

export default async function AllProducts() {

    connectToDB()
    const products = await ProductModel.find({})
        .sort({ _id: -1 })
        .limit(8)
        .lean()
    const allProducts = JSON.parse(JSON.stringify(products))


    return (
        <div className=" relative w-full  p-32 flex justify-center items-center snap-center  bg-[url('/images/jpg/landing-bg3.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="flex justify-center items-center flex-col gap-5 text-center">
                <SectionHeader title={'کافی شاپ آنلاین'} />
                <div className="flex justify-center items-center flex-wrap gap-20 mt-10">
                    {
                        allProducts.map(product => (
                            <Link href={`/product/${product._id}`}>
                                <ProductBox key={product._id} {...product} />
                            </Link>
                        ))
                    }
                </div>
            </div>
            <svg className=' absolute right-0 left-0 bottom-0 fill-white' viewBox="0 0 500 150" preserveAspectRatio='none' width="100%" height="150">
                <path
                    d="M0,150 L0,40 Q250,150 500,40 L580,150 Z" />
            </svg>
        </div>
    )
}
