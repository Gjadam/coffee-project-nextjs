import connectToDB from "@/configs/db"
import BanModel from "@/models/Ban"
export async function POST(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { phone, email } = body

        if (!phone || !email) {
            return Response.json(
                { message: "Phone or email not found !" },
                { status: 404 }
            )
        }

        await BanModel.create({ phone, email })

        return Response.json(
            { message: "User banned successfully." },
        )

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}