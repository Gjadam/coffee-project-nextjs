import connectToDB from "@/configs/db"
import { cookies } from "next/headers"
import UserModel from '@/models/User'
import { verifyAccessToken } from "@/utils/auth"

export async function GET() {
    try {
        connectToDB()
        const token = cookies().get("token")
        let user = null

        if (token) {
            const tokenPayload = verifyAccessToken(token.value)
            if (tokenPayload) {
                user = await UserModel.findOne(
                    { email: tokenPayload.email },
                    "-password -refreshToken -__v"
                );
            }
        }

        return Response.json(user)
    } catch (err) {
        return Response.json(
            {
                data: null,
                message: "Not access !!",
            },
            { status: 401 }
        );
    }
}