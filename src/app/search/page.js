
// Components
import CategoryHeader from "@/components/modules/CategoryHeader/CategoryHeader";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Search from "@/components/templates/search/Search";

// Backend
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import { authUser } from "@/utils/serverHelpers";

export const metadata = {
    title: 'باریستا | جستوجو',
}

export default async function page({ searchParams }) {
    const { q } = searchParams
    const user = await authUser()

    connectToDB()
    const products = await ProductModel.find({ name: { $regex: q } })
        .lean()

    return (
        <>
            <NavBar isLogin={user} searchParam={q} />
            <CategoryHeader title={"جستوجو"}/>
            <Search products={JSON.parse(JSON.stringify(products))} />
            <Footer />
        </>
    )
}
