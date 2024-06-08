
export default function Cart({ title, date, support, price, condition }) {
    return (
        <div className=" pt-5">
            <div className=" flex justify-between items-center flex-wrap gap-3 p-4 hover:bg-gray-100 rounded-xl transition-colors  ">
                <span>{title}</span>
                <div className=" flex items-center flex-wrap gap-5 text-xs text-white ">
                    <span className='text-gray-500 text-sm'>{date}</span>
                    {
                        support ? (
                            <span className=' bg-sky-500 rounded-md p-2'>
                                {support}
                            </span>
                        ) : null
                    }
                    {
                        price ? (
                            <span className=' text-base bg-sky-500 rounded-md px-2 py-1'>
                                {price}
                                <span className=' text-xs mr-1'>تومان</span>
                            </span>

                        ) : null
                    }
                    <span className=' bg-green-500  rounded-md p-2'>{condition}</span>
                </div>
            </div>
        </div>
    )
}
