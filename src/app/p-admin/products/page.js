
// Components
import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import Products from '@/components/templates/admin-panel/products/Products'

// Backend
import connectToDB from '@/configs/db'
import ProductModel from '@/models/Product'

export default async function page() {

    connectToDB()
    const products = await ProductModel.find({}, "-tags -comments -__v")
        .sort({ _id: -1 })
        .lean()
    return (
        <AdminPanelLayout>
            <Products products={JSON.parse(JSON.stringify(products))} />
        </AdminPanelLayout>
    )
}
