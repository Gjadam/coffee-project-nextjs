import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import TicketModel from '@/models/Ticket'

export async function POST(req) {
    try {
        connectToDB()
        const user = await authUser()
        const reqBody = await req.json()
        const {
            title,
            body,
            department,
            subDepartment,
            priority,
        } = reqBody

        await TicketModel.create({
            title,
            body,
            department,
            subDepartment,
            priority,
            user: user._id
        })

        return Response.json(
            { message: "Ticket saved successfully." },
            { status: 201 }
        )

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}
