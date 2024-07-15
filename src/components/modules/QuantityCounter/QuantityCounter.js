
// Icons
import { FaMinus, FaPlus } from "react-icons/fa"


export default function QuantityCounter({count, setCount}) {


    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrementCount = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1)
        } else {
            return false
        }
    }

    return (
        <div className=" flex items-center gap-5">
            <FaPlus className=' hover:text-primary ' onClick={incrementCount} />
            <input type="number" min={1} value={count} onChange={(e) => setCount(e.target.value)} className=' outline-none w-9 h-9  overflow-hidden  flex justify-center items-center text-center text-xl text-white bg-primary  rounded-lg' />
            <FaMinus className=' hover:text-primary ' onClick={decrementCount} />
        </div>
    )
}
