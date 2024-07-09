
// Components
import Alert from '@/components/modules/Alert/Alert'
import Cart from './Cart'
import SectionHeader from '@/components/modules/SectionHeader/SectionHeader'

export default function Comments({comments}) {
    return (
        <div className=' flex justify-center items-center flex-col w-full'>
            <div className="">
                <SectionHeader title={"کامنت ها"} />
            </div>
            <div className="flex justify-center items-center gap-5 flex-col w-full bg-white rounded-xl p-4 overflow-x-auto">
                {
                    comments.length > 0 ? (
                        comments.map((comment) => (
                            <Cart key={comment._id} {...comment} />
                        ))
                    ) : (
                        <Alert title={"کامنتی وجود ندارد"} text={"هنوز هیچ کامنتی ثبت نشده است!"} />
                    )
                }
            </div>
        </div>
    )
}
