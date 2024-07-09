import Link from "next/link";

export default function NavBarLink({ route, text }) {
    return (
        <Link href={route}>
            <div className=" p-2 xl:p-0 rounded xl:rounded-none hover:bg-primary xl:hover:bg-transparent hover:text-secondary xl:hover:text-primary transition-colors">
            <span>{text}</span>
            </div>
        </Link>
    )
}
