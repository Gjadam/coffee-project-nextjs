import connectToDB from "@/configs/db"
import UserModel from "@/models/User"
import { generateAccessToken } from "@/utils/auth"
import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"

export async function POST() {
    try {
        connectToDB()
        const refreshToken = cookies().get("refresh-token").value


        if (!refreshToken) {
            return Response.json(
                { message: "No have refresh token !" },
                { status: 401 }
            )
        }

        const user = await UserModel.findOne({ refreshToken })

        if (!user) {
            return Response.json(
                { message: "No have refresh token !" },
                { status: 401 }
            )
        }

        verify(refreshToken, process.env.RefreshTokenSecretKey)

        const newAccessToken = generateAccessToken({ email: user.email })

        return Response.json(
            { message: "New access token generated successfully." },
            {
                status: 200,
                headers: {
                    "Set-Cookie": `token=${newAccessToken};path=/;httpOnly=true;`,
                }
            }
        )

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}