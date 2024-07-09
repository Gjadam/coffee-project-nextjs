import connectToDB from "@/configs/db"
import OtpModel from "@/models/Otp"
import UserModel from "@/models/User"

export async function POST(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { phone } = body

        if (!phone) {
            return Response.json(
                {message: "Phone number not found !"},
                {status: 404}
            )
        }

        const now = new Date()
        const expTime = now.getTime() + 300_000

        const code = Math.floor(Math.random() * 99999)

        await OtpModel.create({ phone, code, expTime })

        const isUserExist = await UserModel.findOne({
            $or: [{ phone }]
        })

        if (isUserExist) {
            return Response.json(
                { code: code },
                { status: 201 }
            )
        } else {
            return Response.json({
                message: "User not found !!"
            }, {
                status: 422,
            })
        }

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 },
        )
    }
}