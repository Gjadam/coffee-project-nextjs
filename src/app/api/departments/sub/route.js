import connectToDB from "@/configs/db";
import SubDepartmentModel from '@/models/SubDepartment'
export async function POST(req) {
    try {
        connectToDB()
        const body = await req.json()
        const {
            title,
            department,
        } = body

        await SubDepartmentModel.create({ title, department })

        return Response.json(
            { message: "SubDepartment created successfully." },
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
    const subDepartmentModel = await SubDepartmentModel.find({})
    return Response.json(subDepartmentModel)
}