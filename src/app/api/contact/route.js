import connectToDB from "@/configs/db"
import ContactModel from '@/models/Contact'

export async function POST(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { name, email, message } = body

        if (!name || !email || !message) {
            return Response.json(
                { message: "Name or email or message not found !" },
                { status: 404 }
            )
        }


        await ContactModel.create({ name, email, message })

        return Response.json(
            { message: "Message saved successfully" },
            { status: 201 }
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
        await ContactModel.findOneAndDelete({ _id: id })

        return Response.json({ message: "Message deleted successfully" })

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}