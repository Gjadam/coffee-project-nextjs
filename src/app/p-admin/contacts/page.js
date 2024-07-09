
// Components
import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import Contacts from '@/components/templates/admin-panel/contacts/Contacts'

// Backend
import connectToDB from '@/configs/db'
import ContactModel from '@/models/Contact'


export default async function page() {

    connectToDB()
    const contacts = await ContactModel.find({}, '-__v').lean()

    return (
        <AdminPanelLayout>
            <Contacts contacts={JSON.parse(JSON.stringify(contacts))} />
        </AdminPanelLayout>
    )
}
