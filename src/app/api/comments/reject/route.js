import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment"
export async function PUT(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { id } = body

        await CommentModel.findOneAndUpdate(
            {_id: id},
            {
                $set: {
                    isAccept: false
                }
            }
        )

        return Response.json({ message: "Comment accepted successfully." })
    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}