
// Components
import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import Discounts from '@/components/templates/admin-panel/discoutns/Discounts'

// Backend
import connectToDB from '@/configs/db'
import DiscountModel from '@/models/Discount'

export default async function page() {

    connectToDB()
    const discounts = await DiscountModel.find({})
    .lean()
    .sort({_id: -1})
    return (
        <AdminPanelLayout>
            <Discounts discounts={JSON.parse(JSON.stringify(discounts))}/>
        </AdminPanelLayout>
    )
}
