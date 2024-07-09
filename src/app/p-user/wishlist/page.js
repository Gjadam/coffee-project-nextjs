
// Components
import UserPanelLayout from '@/components/layouts/UserPanelLayout'
import SectionHeader from '@/components/modules/SectionHeader/SectionHeader'
import ProductBox from '../../../components/templates/user-panel/wishlist/ProductBox'
import Alert from '@/components/modules/Alert/Alert'

// Backend
import connectToDB from '@/configs/db'
import WishListModel from '@/models/Wishlist'
import { authUser } from '@/utils/serverHelpers'

export default async function User_wishlist() {

    connectToDB()
    const user = await authUser()
    const wishlist = await WishListModel.find({ user: user._id })
        .populate('product', 'name price img')
        .lean()
    return (
        <UserPanelLayout>
            <SectionHeader title={'علاقه مندی ها'} />
            <div className=' flex justify-center items-center flex-wrap gap-10 p-5'>
                {
                    wishlist.length > 0 ? (
                        wishlist.map(wish => (
                            <ProductBox key={wish._id} productID={wish.product._id} name={wish.product.name} price={wish.product.price} img={wish.product.img} />
                        ))
                    ) : (
                        <Alert title={'لیست علاقه مندی ها خالیه!!!'}  text={'شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید! در صفحه "فروشگاه" محصولات جالب زیادی پیدا خواهید کرد.'} route={'/'} />
                    )
                }
            </div>
        </UserPanelLayout>
    )
}
