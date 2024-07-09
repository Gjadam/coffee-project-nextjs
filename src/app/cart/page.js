
// Components
import CategoryHeader from "@/components/modules/CategoryHeader/CategoryHeader";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Cart from "@/components/templates/cart/Cart";

// Backend
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";

export default async function page() {

    connectToDB()
    const user = await authUser()

    return (
        <>
            <NavBar isLogin={user} />
            <CategoryHeader title={'سبد خرید'} />
            <Cart />
            <Footer />
        </>
    )
}
