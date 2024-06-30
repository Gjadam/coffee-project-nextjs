import Image from 'next/image'

export default function Gallery() {
    return (
        <div className=" w-full md:w-1/2">
            <Image
                src={'/images/jpg/product2.jpg'}
                alt='product'
                width={600}
                height={0}
                className=' rounded-xl'
            />
        </div>
    )
}
