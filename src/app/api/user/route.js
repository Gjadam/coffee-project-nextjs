import connectToDB from "@/configs/db";
import UserModel from '@/models/User'
import { authUser } from "@/utils/serverHelpers";
export async function POST(req) {
    try {
        connectToDB()
        const user = await authUser()
        const body = await req.json()
        const { name, email, phone } = body

        await UserModel.findOneAndUpdate(
            { _id: user._id },
            {
                $set: {
                    name,
                    email,
                    phone
                }
            }
        )

        return Response.json(
            { message: "User updated successfully." },
        )

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}

export async function DELETE(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { id } = body

        await UserModel.findOneAndDelete({ _id: id })

        return Response.json(
            { message: "User deleted successfully." },
        )

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}

export async function PUT(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { id, name, email, phone } = body
        await UserModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    name,
                    email,
                    phone
                }
            }
        )

        return Response.json(
            { message: "User updated successfully." },
        )

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}