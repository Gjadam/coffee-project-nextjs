import connectToDB from "@/configs/db"
import BanModel from "@/models/Ban"

export async function POST(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { phone, email } = body

        if (phone) {
            const banUserWithPhone = await BanModel.findOne({ phone })
            if (banUserWithPhone) {
                return Response.json(
                    { message: "This user is banned." },
                )
            }
        } else if (email) {
            const banUserWithEmail = await BanModel.findOne({ email })
            if (banUserWithEmail) {
                return Response.json(
                    { message: "This user is banned." },
                )
            }
        } else {
            return Response.json(
                { message: "Phone or email not found !" },
                { status: 404 }
            )
        }

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}