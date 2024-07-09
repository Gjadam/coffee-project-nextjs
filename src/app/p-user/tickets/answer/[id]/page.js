
// Components
import UserPanelLayout from '@/components/layouts/UserPanelLayout'
import AnswerTicket from '@/components/templates/user-panel/tickets/AnswerTicket/AnswerTicket'

// Backend
import connectToDB from '@/configs/db'
import TicketModel from '@/models/Ticket'

export default async function page({ params }) {

    const ticketID = params.id
    connectToDB()
    const ticket = await TicketModel.findOne({ _id: ticketID }).populate("user", "name")
    const answerTicket = await TicketModel.findOne({ mainTicket: ticket._id }).populate("user", "name")

    return (
        <UserPanelLayout>
            <AnswerTicket answerTicket={JSON.parse(JSON.stringify(answerTicket))} ticket={JSON.parse(JSON.stringify(ticket))} />
        </UserPanelLayout>
    )
}
