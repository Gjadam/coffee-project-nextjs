import connectToDB from "@/configs/db";
import UserModel from "@/models/User"
import { generateAccessToken, hashPassword } from "@/utils/auth";
import { roles } from "@/utils/constants";

export async function POST(req) {
    connectToDB()
    const body = await req.json();
    const { name, phone, email, password } = body

    if (!name || !phone || !email || !password ) {
        return Response.json(
            {message: "Name or phone or email or password not found !"},
            {status: 404}
        )
    }

        const isUserExist = await UserModel.findOne({
            $or: [{ name }, { email }, { phone }]
        })

    if (isUserExist) {
        return Response.json({
            message: "The username or email or phone exist already !!"
        }, {
            status: 422,
        })
    }

    const hashedPassword = await hashPassword(password)
    const accessToken = generateAccessToken({ email })

    const users = await UserModel.find({})

    await UserModel.create({
        name,
        email,
        phone,
        password: hashedPassword,
        role: users.length > 0 ? roles.USER : roles.ADMIN
    })


    return Response.json(
        { message: "Creating user successfully :)" },
        {
            status: 201,
            headers: { 'Set-Cookie': `token=${accessToken};path=/;httpOnly=true` }
        }
    )
}
