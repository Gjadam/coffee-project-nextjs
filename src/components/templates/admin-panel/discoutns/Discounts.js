// Components
import SectionHeader from '@/components/modules/SectionHeader/SectionHeader'
import Alert from '@/components/modules/Alert/Alert'
import Cart from './Cart'
import AddDiscount from './AddDiscount'

export default function Discounts({ discounts }) {
    return (
        <div className=' flex justify-center items-center flex-col w-full'>
            <div className="">
                <SectionHeader title={"کدهای تخفیف"} />
            </div>
            <div className="flex justify-center items-center gap-10 flex-col w-full bg-white rounded-xl p-4 overflow-x-auto">
            <AddDiscount />
            <div className=" w-full border-t-1 pt-3">
                {
                    discounts.length > 0 ? (
                        discounts.map(discount => (
                            <Cart key={discount._id} {...discount} />
                        ))
                    ) : (
                        <Alert title={"کد تخفیفی وجود ندارد"} text={"هنوز کد تخفیفی ثبت نشده است!"} />
                    )
                }
                </div>
            </div>
        </div>
    )
}
