import Link from "next/link";

// Components
import Button from "../Button/Button";

// Icons
import { MdHeartBroken } from "react-icons/md";

export default function Alert({ title, text, buttonText, route }) {
    return (
        <div className=" flex justify-center items-center gap-5 flex-col">
            <div className=" text-center">
                <h1 className=' text-xl'>{title}</h1>
                <p className=' mt-2 text-zinc-600 max-w-96 '>{text}</p>
            </div>
            {
                buttonText ? (
                    <Link href={route}>
                        <Button text={buttonText} type={'outline'} />
                    </Link>
                ) : null
            }
        </div>
    )
}
