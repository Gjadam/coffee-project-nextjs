"use client"

import { useState } from "react";

export default function PaginationControls({ items, setShowItems }) {

    const [page, setPage] = useState()
    const paginateHandler = (e, page) => {

        e.preventDefault()
        setPage(page)
        const endIndex = 6 * page
        const startIndex = endIndex - 6

        const paginatedProducts = items.slice(startIndex, endIndex)
        setShowItems(paginatedProducts)
    }

    return (
        <ul className=" flex gap-2">
            {
                Array.from({ length: Math.ceil(items.length / 6) })?.map((item, index) => (
                    <li key={index + 1} className={`flex justify-center items-center  ${page === index + 1 ? " bg-secondary text-white" : "bg-primary text-secondary"} text-lg rounded-full w-10 h-10`} onClick={(e) => paginateHandler(e, index + 1)}>
                        {index + 1}
                    </li>
                ))
            }
        </ul>
    )
}
