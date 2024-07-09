import connectToDB from "@/configs/db";
import WishListModel from '@/models/Wishlist'

export async function POST(req) {
    try {
        connectToDB()
        const body = await req.json()
        const {
            user,
            product,
        } = body

        if (!user || !product) {
            return Response.json(
                { message: "User or product not found !" },
                { status: 404 }
            )
        }

        const wish = await WishListModel.findOne({ user, product })

        if (!wish) {
            await WishListModel.create({ user, product })
        }

        return Response.json(
            { message: "Product added to wishlist successfully." },
            { status: 201 }
        )
    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}
