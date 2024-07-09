
// Components
import SectionHeader from '@/components/modules/SectionHeader/SectionHeader'
import Alert from '@/components/modules/Alert/Alert'
import Cart from './Cart'
import AddProduct from './AddProduct'


export default function Comments({ products }) {
    return (
        <div className=' flex justify-center items-center flex-col w-full'>
            <div className="">
                <SectionHeader title={"محصولات"} />
            </div>
            <div className="flex justify-center items-center gap-10 flex-col w-full bg-white rounded-xl p-4">
                <AddProduct />
                <div className="flex justify-center items-center gap-5 flex-col w-full bg-white rounded-xl p-4 overflow-x-auto ">
                    <div className=" w-full border-t-1 pt-3">
                        {
                            products.length > 0 ? (
                                products.map((comment) => (
                                    <Cart key={comment._id} {...comment} />
                                ))
                            ) : (
                                <Alert title={"محصولی وجود ندارد"} text={"هنوز هیچ محصولی ایجاد نشده است!"} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
