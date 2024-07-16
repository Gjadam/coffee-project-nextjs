import Link from 'next/link'

export default function NavBarLinkWithIcon({ children, text, route, onclick }) {
    return (
        <div className=" rounded hover:last:border-red-600 hover:last:bg-red-600 hover:bg-primary hover:text-secondary  transition-colors cursor-pointer" onClick={onclick}>
            {
                route ? (
                    <Link href={route}>
                        <div className="flex items-center gap-3  p-2 ">
                            {children}
                            <span>{text}</span>
                        </div>
                    </Link>
                ) : (
                    <div className="flex items-center gap-3  p-2 ">
                        {children}
                        <span>{text}</span>
                    </div>
                )
            }
        </div>
    )
}
