// Components
import CategoryHeader from "@/components/modules/CategoryHeader/CategoryHeader";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Shop from "@/components/templates/shop/Shop"

// Backend
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";

export default async function page() {

    connectToDB()
    const products = await ProductModel.find({}, "-tags -comments -__v")
    .sort({ _id: -1 })
    .lean()
    
    return (
        <>
        <NavBar/>
        <CategoryHeader title={'فروشگاه'}/>
        <Shop products={products}/>
        <Footer/>
        </>
    )
}
