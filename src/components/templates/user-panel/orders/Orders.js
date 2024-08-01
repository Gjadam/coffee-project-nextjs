
// Components
import Alert from "@/components/modules/Alert/Alert";
import Cart from "./Cart";
import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";

export default function Orders({ orders }) {
    return (
        <div className=' flex justify-center items-center flex-col w-full'>
            <div className="">
                <SectionHeader title={"سفارش ها"} />
            </div>
            <div className="flex justify-center items-center gap-5 flex-col w-full bg-white rounded-xl p-4 overflow-x-auto">
                {
                    orders.length > 0 ? (
                        orders.map(order => (
                            <Cart key={order._id} {...order} />
                        ))
                    ) : (
                        <Alert title={"سفارشی وجود ندارد"} text={"هنوز هیچ سفارشی ثبت نشده است!"} buttonText={'برگشت به فروشگاه'} route={'/shop'} />
                    )
                }
            </div>
        </div>
    )
}
