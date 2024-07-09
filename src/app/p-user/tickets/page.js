
// Components
import UserPanelLayout from '@/components/layouts/UserPanelLayout'
import TicketsPage from '@/components/templates/user-panel/tickets/Tickets'

// Backend
import connectToDB from '@/configs/db'
import { authUser } from '@/utils/serverHelpers'
import TicketModel from '@/models/Ticket'

export default async function Tickets() {

    connectToDB()
    const user = await authUser()
    const tickets = await TicketModel.find({ user: user._id, isAnswer: false }).populate(
        "department",
        "title"
    )
    .sort({_id: -1})
    return (
        <UserPanelLayout>
            <TicketsPage tickets={JSON.parse(JSON.stringify(tickets))} />
        </UserPanelLayout>
    )
}
