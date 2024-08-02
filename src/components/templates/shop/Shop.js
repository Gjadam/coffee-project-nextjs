'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// Components
import ProductBox from '@/components/modules/ProductBox/ProductBox'
import Alert from '@/components/modules/Alert/Alert'
import PaginationControls from '@/components/modules/PaginationControls/PaginationControls'

// Icons
import { LiaTimesSolid } from 'react-icons/lia'

export default function ShopPage({ products }) {

    const [searchValue, setSearchValue] = useState("")
    const [orderedProducts, setOrderedProducts] = useState([])
    const [isOpenSideBar, setIsOpenSideBar] = useState(false)
    const [status, setStatus] = useState("all")

    useEffect(() => {
        if (status === "expensive") {
            const expensiveProducts = products.slice().sort((s1, s2) => s2.price - s1.price)
            setOrderedProducts(expensiveProducts)
        } else if (status === "cheapest") {
            const cheapestProducts = products.slice().sort((s1, s2) => s2.price - s1.price).reverse()
            setOrderedProducts(cheapestProducts)
        } else if (status === 'all') {
            setOrderedProducts(products)
        }
    }, [status])

    useEffect(() => {
        const getProductWithSearch = async () => {
            if (searchValue.trim()) {
                const res = await fetch(`/api/search?q=${searchValue}`)
                if (res.status === 200) {
                    const data = await res.json()
                    setOrderedProducts(data)
                }
            } else {
                setOrderedProducts(products)
            }
        }
        getProductWithSearch()
    }, [searchValue])

    return (
        <div className=' container mx-auto p-10 mb-28'>
            <button type='button' className=' lg:hidden border-1 border-primary rounded-3xl p-3 mb-5 outline-none  w-full' onClick={() => setIsOpenSideBar(true)}>بازکردن منو</button>
            <div className='flex justify-center items-start gap-5 w-full '>
                <div className={`lg:relative fixed top-0 bottom-0 lg:-left-0 ${isOpenSideBar ? "  left-0 " : " -left-96"} max-w-72 min-w-72 bg-white shadow-lg lg:shadow-none shadow-secondary border-r-1 lg:border-none border-primary p-5 lg:p-0 z-50 lg:z-40  flex justify-start items-center flex-col gap-5 lg:w-1/3 transition-all`}>
                    <div className=" lg:hidden  self-start p-3 border-1 border-primary rounded-full bg-opacity-5 bg-white hover:bg-red-500 hover:border-red-500 transition-colors" onClick={() => setIsOpenSideBar(false)}>
                        <LiaTimesSolid className=" text-xl " />
                    </div>
                    <input type="text" placeholder='جستوجو...' className=' border-1 border-primary rounded-3xl p-3 outline-none w-full' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <div className=" flex justify-center items-center flex-col gap-3">
                        <p>مرتب سازی براساس</p>
                        <Image
                            src={'/images/png/title-separator.png'}
                            alt="logo"
                            width={150}
                            height={0}
                        />
                    </div>
                    <button type='button' className={` ${status === 'all' && "text-white bg-primary"} border-1 border-primary rounded-3xl p-3 outline-none w-full`} onClick={() => { setStatus("all"); setIsOpenSideBar(false) }}>همه</button>
                    <button type='button' className={` ${status === 'cheapest' && "text-white bg-primary"} border-1 border-primary rounded-3xl p-3 outline-none w-full`} onClick={() => { setStatus("cheapest"); setIsOpenSideBar(false) }}>ارزان ترین</button>
                    <button type='button' className={` ${status === 'expensive' && "text-white bg-primary"} border-1 border-primary rounded-3xl p-3 outline-none w-full`} onClick={() => { setStatus("expensive"); setIsOpenSideBar(false) }}>گران ترین</button>
                </div>
                <div className=" flex justify-center items-center flex-col gap-10">
                    <div className="flex justify-center items-center flex-wrap gap-10 w-full">
                        {
                            orderedProducts.length > 0 ? (
                                orderedProducts.slice(0, 6).map((product) => (
                                    <Link href={`/product/${product._id}`}>
                                        <ProductBox key={product._id} {...product} />
                                    </Link>
                                ))
                            ) : (
                                <Alert title={"محصولی وجود ندارد"} text={"محصولی با این مشصاب وجود ندارد!"} />
                            )
                        }
                    </div>
                    <PaginationControls
                        items={products}
                        setShowItems={setOrderedProducts}
                    />
                </div>
            </div>
        </div>
    )
}
