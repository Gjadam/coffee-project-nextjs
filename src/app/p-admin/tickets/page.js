
// Components
import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import AllTickets from '@/components/templates/admin-panel/tickets/AllTickets'

// Backend
import connectToDB from '@/configs/db'
import TicketModel from '@/models/Ticket'

export default async function Tickets() {

  connectToDB()
  const tickets = await TicketModel.find({ isAnswer: false })
    .populate("department", "title")
    .populate("user", "name")
    .sort({priority: -1})
  return (
    <AdminPanelLayout>
      <AllTickets tickets={JSON.parse(JSON.stringify(tickets))} />
    </AdminPanelLayout>
  )
}
