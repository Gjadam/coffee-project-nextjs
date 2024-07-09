
// Components
import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import Comments from '@/components/templates/admin-panel/comments/Comments'

// Backend
import connectToDB from '@/configs/db'
import CommentModel from '@/models/Comment'

export default async function page() {

    connectToDB()
    const comments = await CommentModel.find({})
        .populate("productID", "name")
    return (
        <AdminPanelLayout>
            <Comments comments={JSON.parse(JSON.stringify(comments))} />
        </AdminPanelLayout>
    )
}
