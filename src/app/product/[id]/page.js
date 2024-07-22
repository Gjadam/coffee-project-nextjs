
// Components
import CategoryHeader from '@/components/modules/CategoryHeader/CategoryHeader'
import NavBar from '@/components/modules/NavBar/NavBar'
import Footer from '@/components/modules/Footer/Footer'
import Details from '@/components/templates/product/Details'
import Gallery from '@/components/templates/product/Gallery'
import Tabs from '@/components/templates/product/Tabs'
import MoreProducts from '@/components/templates/product/MoreProducts'

// Backend
import connectToDB from '@/configs/db'
import ProductModel from '@/models/Product'
import { authUser } from '@/utils/serverHelpers'

export const metadata = {
    title: 'باریستا | فروشگاه ',
  }

export default async function Product({ params }) {
    
    connectToDB()
    const user = await authUser()
    const productID = params.id
    const product = await ProductModel.findOne({_id: productID}).populate("comments")
    
    const relatedProducts = await ProductModel.find({ smell: product.smell })
    

    return (
        <>
            <NavBar isLogin={user} />
            <CategoryHeader title={product.name} />
            <div className=" container mx-auto my-28">
                <div className=" flex justify-start items-start flex-col md:flex-row gap-10 p-10 ">
                    <Gallery img={JSON.parse(JSON.stringify(product)).img} />
                    <Details product={JSON.parse(JSON.stringify(product))} userID={user ? user._id : null} />
                </div>
                    <Tabs product={JSON.parse(JSON.stringify(product))} />
                    <MoreProducts relatedProducts={JSON.parse(JSON.stringify(relatedProducts))} />
            </div>
            <Footer />

        </>
    )
}
