
// Components
import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import InfoBox from '@/components/modules/InfoBox/InfoBox'
import SaleChart from '@/components/templates/admin-panel/index/SaleChart'
import GrowthChart from '@/components/templates/admin-panel/index/GrowthChart'

// Icons
import { FaUsers } from 'react-icons/fa'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { IoTicketOutline } from 'react-icons/io5'
import { AiOutlineShoppingCart } from "react-icons/ai";

// Backend
import connectToDB from '@/configs/db'
import TicketModel from '@/models/Ticket'
import UserModel from '@/models/User'
import ProductModel from '@/models/Product'
import OrderModel from '@/models/Order'

export default async function P_Admin() {

  connectToDB()

  const tickets = await TicketModel.find({isAnswer: false}).lean()
  const users = await UserModel.find({}).lean()
  const products = await ProductModel.find({}).lean()
  const orders = await OrderModel.find({}).lean()


  return (
    <AdminPanelLayout>
      <div className=" flex justify-center xl:justify-between items-center gap-10 flex-wrap">
        <InfoBox title={'مجموع تیکت های دریافتی'} count={tickets.length}>
          <IoTicketOutline />
        </InfoBox>
        <InfoBox title={'مجموع محصولات سایت'} count={products.length}>
          <HiOutlineShoppingBag />
        </InfoBox>
        <InfoBox title={'مجموع سفارشات'} count={orders.length}>
          <AiOutlineShoppingCart />
        </InfoBox>
        <InfoBox title={'مجموع کاربرهای سایت'} count={users.length}>
          <FaUsers />
        </InfoBox>
      </div>
      <div className=" flex justify-center items-start flex-col xl:flex-row gap-5 w-full mt-10 ">
        <div className="bg-white text-secondary p-5 w-full rounded-2xl">
            <p className=" border-b-1 text-xl pb-3">آمار فروش</p>
          <SaleChart />
        </div>
        <div className="bg-white text-secondary p-5 w-full rounded-2xl">
            <p className=" border-b-1 text-xl pb-3">نرخ رشد</p>
          <GrowthChart />
        </div>
      </div>
    </AdminPanelLayout>
  )
}
