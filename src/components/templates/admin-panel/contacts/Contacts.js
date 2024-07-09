
// Components
import Alert from '@/components/modules/Alert/Alert'
import SectionHeader from '@/components/modules/SectionHeader/SectionHeader'
import Cart from './Cart'

export default function Contacts({ contacts }) {
    return (
        <div className=' flex justify-center items-center flex-col w-full'>
            <div className="">
                <SectionHeader title={"ارتباط با ما"} />
            </div>
            <div className="flex justify-center items-center gap-5 flex-col w-full bg-white rounded-xl p-4 overflow-x-auto">
                {
                    contacts.length > 0 ? (
                        contacts.map((contact) => (
                            <Cart key={contact._id} {...contact} />
                        ))
                    ) : (
                        <Alert title={"پیغامی وجود ندارد"} text={"هنوز هیچ پیغامی ثبت نشده است!"} />
                    )
                }
            </div>
        </div>
    )
}
