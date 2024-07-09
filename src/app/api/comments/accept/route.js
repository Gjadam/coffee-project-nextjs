import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment"
import { authAdmin } from "@/utils/serverHelpers";
export async function PUT(req) {
    try {

        const isAdmin = await authAdmin()

        if (!isAdmin) {
            throw new Error("This api protected and you can't access it !!")
        }

        connectToDB()
        const body = await req.json()
        const { id } = body

        if(!id) {
            return Response.json(
                {message: "Comment id not found !"},
                {status: 404}
            )
        }


        await CommentModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    isAccept: true
                }
            }
        )

        return Response.json({ message: "Comment accepted successfully." })
    } catch (err) {
        return Response.json(
            { message: err.message },
            { status: 500 }
        )
    }
}