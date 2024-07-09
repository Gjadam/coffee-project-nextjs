
// Components
import UserPanelLayout from '@/components/layouts/UserPanelLayout'
import AllComments from '@/components/templates/user-panel/comments/Comments'

// Backend
import CommentModel from '@/models/Comment'
import connectToDB from '@/configs/db'
import { authUser } from '@/utils/serverHelpers'

export default async function Comments() {
    connectToDB()
    const user = await authUser()
    const comments = await CommentModel.find({ user: String(user._id) })
        .populate("productID", "name")

    return (
        <UserPanelLayout>
            <AllComments comments={JSON.parse(JSON.stringify(comments))} />
        </UserPanelLayout>
    )
}
