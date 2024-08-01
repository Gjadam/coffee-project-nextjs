
// Components
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import Orders from "@/components/templates/user-panel/orders/Orders";

// Backend
import connectToDB from "@/configs/db";
import OrderModel from "@/models/Order";
import { authUser } from "@/utils/serverHelpers";

export default async function page() {
    connectToDB()
    const user = await authUser()
    const orders = await OrderModel.find({ user: user._id }, "-__v")
        .lean()
        .sort({ _id: -1 })

    return (
        <UserPanelLayout>
            <Orders orders={JSON.parse(JSON.stringify(orders))} />
        </UserPanelLayout>
    )
}
