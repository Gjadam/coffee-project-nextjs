import Link from 'next/link'

// Components
import UserPanelLayout from '../../components/layouts/UserPanelLayout'
import InfoBox from '../../components/modules/InfoBox/InfoBox'
import Button from '../../components/modules/Button/Button'
import Cart from '../../components/templates/user-panel/index/Cart'
import Alert from '@/components/modules/Alert/Alert'

// Icons
import { IoChatbubblesOutline, IoTicketOutline } from 'react-icons/io5'
import { IoMdHeartEmpty } from 'react-icons/io'
import { HiOutlineShoppingBag } from 'react-icons/hi2'

// Backend
import { authUser } from '@/utils/serverHelpers'
import connectToDB from '@/configs/db'
import TicketModel from '@/models/Ticket'
import CommentModel from '@/models/Comment'
import WishlistModel from '@/models/Wishlist'
import OrderModel from '@/models/Order'

export default async function P_user() {
  connectToDB()
  const user = await authUser()
  const tickets = await TicketModel.find({ user: user._id })
    .populate('department', 'title')
    .limit(4)
    .sort({ _id: -1 })
    
  const orders = await OrderModel.find({ user: user._id }, "-__v")
    .limit(4)
    .sort({ _id: -1 })


  const allTickets = await TicketModel.find({ user: user._id })
  const allComments= await CommentModel.find({ user: String(user._id)})
  const allWishes = await WishlistModel.find({ user: user._id })
  const allOrders= JSON.parse(JSON.stringify(orders))

  return (
    <div className=' '>
      <UserPanelLayout>
        <div className="">
          <div className=" flex justify-center xl:justify-between items-center gap-10 flex-wrap">
            <InfoBox title={'مجموع تیکت ها'} count={allTickets.length}>
              <IoTicketOutline />
            </InfoBox>
            <InfoBox title={'مجموع کامنت ها'} count={allComments.length}>
              <IoChatbubblesOutline />
            </InfoBox>
            <InfoBox title={'مجموع سفارشات '} count={allOrders.length}>
              <HiOutlineShoppingBag />
            </InfoBox>
            <InfoBox title={'مجموع علاقه مندی ها'} count={allWishes.length}>
              <IoMdHeartEmpty />
            </InfoBox>
          </div>
          <div className=" flex justify-center items-start flex-col xl:flex-row gap-5 w-full mt-10 ">
            <div className="bg-white text-secondary p-5 w-full rounded-2xl">
              <div className=" flex justify-between items-center border-b-1  text-xl pb-3">
                <span>تیکت های اخیر</span>
                <Link href='/p-user/tickets'>
                  <Button type={'simple'} text={'همه تیکت ها'} />
                </Link>
              </div>
              <div className=" mt-5">
                {
                  tickets.length > 0 ? (
                    tickets.map(ticket => (
                      <Link href={`/p-user/tickets/answer/${ticket._id}`}>
                        <Cart key={ticket._id} title={ticket.title} date={ticket.createdAt} ticketCondition={ticket.hasAnswer} support={ticket.department.title} />
                      </Link>
                    ))
                  ) : (
                    <Alert title={"تیکتی وجود ندارد"} text={"هنوز هیچ تیکتی به پشتیبانی ارسال نکرده اید!"} buttonText={'ارسال تیکت جدید'} route={'/p-user/tickets/send-ticket'} />
                  )
                }
              </div>
            </div>
            <div className="bg-white text-secondary p-5 w-full rounded-2xl">
              <div className=" flex justify-between items-center border-b-1  text-xl pb-3">
                <span>سفارش های اخیر</span>
                <Link href='/p-user/orders'>
                <Button type={'simple'} text={'همه سفارش ها'} />
                </Link>
              </div>
              <div className="mt-5">
              {
                  allOrders.length > 0 ? (
                    allOrders.map(order => (
                      <Cart key={order._id} title={order._id} price={order.totalPrice} date={order.createdAt} orderCondition={true}  />
                  ))
                  ) : (
                    <Alert title={"سفارشی وجود ندارد"} text={"هنوز هیچ سفارشی ثبت نشده است!"} buttonText={'برگشت به فروشگاه'} route={'/shop'} />
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </UserPanelLayout>
    </div>
  )
}
