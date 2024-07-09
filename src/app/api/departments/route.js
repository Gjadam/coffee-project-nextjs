import connectToDB from "@/configs/db"
import DepartmentModel from '@/models/Department'
export async function POST(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { title } = body

        if(!title) {
            return Response.json(
                {message: "Title of department not found !"},
                {status: 404}
            )
        }

        await DepartmentModel.create({ title })

        return Response.json(
            { message: "Department created successfully." },
            { status: 200 }
        )

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}

export async function GET() {
    connectToDB()
    const departments = await DepartmentModel.find({})
    return Response.json(departments)
}