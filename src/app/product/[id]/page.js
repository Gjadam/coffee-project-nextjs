
// Components
import CategoryHeader from '@/app/components/modules/CategoryHeader/CategoryHeader'
import NavBar from '@/app/components/modules/NavBar/NavBar'
import Footer from '@/app/components/modules/Footer/Footer'
import Details from '@/app/components/templates/product/Details'
import Gallery from '@/app/components/templates/product/Gallery'
import Tabs from '@/app/components/templates/product/Tabs'
import MoreProducts from '@/app/components/templates/product/MoreProducts'

// Backend
import connectToDB from '@/configs/db'
import ProductModel from '@/models/Product'
import { authUser } from '@/utils/auth'

export default async function Product({ params }) {
    
    connectToDB()
    const user = await authUser()
    const productID = params.id
    const product = await ProductModel.findOne({_id: productID}).populate("comments")
    
    const relatedProducts = await ProductModel.find({ smell: product.smell })
    

    return (
        <>
            <NavBar isLogin={user} />
            <CategoryHeader title={'فروشگاه'} />
            <div className=" container mx-auto my-28">
                <div className=" flex justify-start items-start flex-col md:flex-row gap-10 p-10 ">
                    <Gallery />
                    <Details product={JSON.parse(JSON.stringify(product))} userID={user ? user._id : null} />
                </div>
                    <Tabs product={JSON.parse(JSON.stringify(product))} />
                    <MoreProducts relatedProducts={JSON.parse(JSON.stringify(relatedProducts))} />
            </div>
            <Footer />

        </>
    )
}
