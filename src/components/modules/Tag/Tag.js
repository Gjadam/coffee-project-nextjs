
export default function Tag({ tagKey, tagValue, children }) {
    return (
        <div className=' flex  items-center'>
            <span>{tagKey}:</span>
            <span className=' mr-3 text-zinc-600'>{tagValue}</span>
            <div className=" flex gap-5">
                {children}
            </div>
        </div>
    )
}
