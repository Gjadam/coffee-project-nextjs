import connectToDB from "@/configs/db"
import OrderModel from '@/models/Order'
import { authUser } from "@/utils/serverHelpers"
export async function POST(req) {
    try {
        connectToDB()
        const user = await authUser()
        
        const body = await req.json()
        const { cart, totalPrice } = body


        if (!cart || !totalPrice) {
            return Response.json(
                { message: "cart or totalPrice not found !" },
                { status: 404 }
            )
        }

        await OrderModel.create(
            {
                cart,
                totalPrice,
                user: user._id
            }
        )

        return Response.json({ message: "Order created successfully." })

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}