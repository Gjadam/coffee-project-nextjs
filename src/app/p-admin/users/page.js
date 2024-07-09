
// Components
import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import AllUsers from '@/components/templates/admin-panel/users/Users'

// Backend
import connectToDB from '@/configs/db'
import UserModel from '@/models/User'

export default async function Users() {

    connectToDB()
    const users = await UserModel.find({})

    return (
        <AdminPanelLayout>
            <AllUsers users={JSON.parse(JSON.stringify(users))} />
        </AdminPanelLayout>
    )
}
