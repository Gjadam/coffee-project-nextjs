
// Components
import SectionHeader from '@/components/modules/SectionHeader/SectionHeader'
import Cart from './Cart'
import Alert from '@/components/modules/Alert/Alert'

export default function AllTickets({tickets}) {
    return (
        <div className=' flex justify-center items-center flex-col w-full'>
            <div className="">
                <SectionHeader title={"تیکت ها"} />
            </div>
            <div className="flex justify-center items-center gap-5 flex-col w-full bg-white rounded-xl p-4">
                {
                    tickets.length > 0 ? (
                        tickets.map((ticket) => (
                            <Cart key={ticket._id} {...ticket} />
                        ))
                    ) : (
                        <Alert title={"تیکتی وجود ندارد"} text={"هنوز هیچ تیکتی ثبت نشده است!"}  />
                    )
                }
            </div>
        </div>
    )
}
