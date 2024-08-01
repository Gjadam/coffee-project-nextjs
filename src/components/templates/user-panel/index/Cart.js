
export default function Cart({ title, date, support, price, ticketCondition, orderCondition }) {
    return (
        <div className="">
            <div className=" flex justify-between items-center flex-wrap gap-3 p-4 hover:bg-gray-100 rounded-xl transition-colors  ">
                <span className=" text-center">{title}</span>
                <div className=" flex items-center flex-wrap gap-5 text-xs text-white ">
                    <span className=' flex-grow w-24 text-center text-gray-500 text-sm'>
                        {
                            new Date(date).toLocaleDateString("fa-IR")
                        }
                    </span>
                    {
                        support ? (
                            <span className=' flex-grow w-24 text-center bg-sky-500 rounded-md p-2'>
                                {support}
                            </span>
                        ) : null
                    }
                    {
                        price ? (
                            <span className=' flex-grow w-24 text-center text-base bg-sky-500 rounded-md px-2 py-1'>
                                {price}
                                <span className=' text-xs mr-1'>تومان</span>
                            </span>

                        ) : null
                    }
                    {
                        ticketCondition &&
                        <span className={` flex-grow w-24 text-center ${ticketCondition ? 'bg-green-500' : 'bg-red-500'} rounded-md p-2`}>{ticketCondition ? "پاسخ داده شده" : "پاسخ داده نشده"}</span>
                    }
                    {
                        orderCondition &&
                        <span className={` flex-grow w-24 text-center ${orderCondition ? 'bg-green-500' : 'bg-red-500'} rounded-md p-2`}>{orderCondition ? "ثبت شده" : "ثبت نشده"}</span>
                    }
                </div>
            </div>
        </div>
    )
}
