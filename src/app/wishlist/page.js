
// Components
import NavBar from '../../components/modules/NavBar/NavBar'
import CategoryHeader from '../../components/modules/CategoryHeader/CategoryHeader'
import Footer from '../../components/modules/Footer/Footer'

// Icons
import { MdHeartBroken } from "react-icons/md";
import Button from '../../components/modules/Button/Button';

// Backend
import connectToDB from '@/configs/db';
import WishlistModel from '@/models/Wishlist';
import { authUser } from '@/utils/serverHelpers'
import ProductBox from '../../components/modules/ProductBox/ProductBox';
import SectionHeader from '../../components/modules/SectionHeader/SectionHeader';
import Alert from '@/components/modules/Alert/Alert';

export default async function Wishlist() {

    connectToDB()
    const user = await authUser()
    let wishes = {}
    if (user) {
        wishes = await WishlistModel.find({ user: user._id })
            .populate("product", 'name price score img')
            .lean()
    }

    return (
        <>
            <NavBar isLogin={user} />
            <CategoryHeader title={'علاقه مندی ها'} />
            <div className="container mx-auto my-28">
                <SectionHeader title={'محصولات مورد علاقه شما'} />
                {
                    wishes.length > 0 ? (
                        <div data-aos='fade-up' className=" flex justify-center items-center flex-wrap gap-20">
                            {
                                wishes.map(wish => (
                                    <ProductBox key={wish._id} {...wish.product} />
                                ))
                            }
                        </div>
                    ) : (
                        <Alert buttonText={'برگشت به فروشگاه'} route={'/'} title={'لیست علاقه مندی ها خالیه!!!'} text={'شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید! در صفحه "فروشگاه" محصولات جالب زیادی پیدا خواهید کرد.'} />
                    )
                }
            </div >
            <Footer />
        </>
    )
}
