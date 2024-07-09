
export default function ProductPrice({ price, primaryPrice }) {
    return (
        <div className=" flex  gap-3">
            <span className=" text-2xl text-primary brightness-75  ">
                {price?.toLocaleString()}
                <span className=' text-xs mr-1'>تومان</span>
            </span>
            {
                primaryPrice ? (
                    <span className=" text-2xl text-zinc-400 relative after:absolute after:bg-red-400 after:left-0 after:top-1/2 after:w-full after:h-0.5 ">
                        154,000
                        <span className=' text-xs mr-1'>تومان</span>
                    </span>
                ) : null
            }
        </div>
    )
}
