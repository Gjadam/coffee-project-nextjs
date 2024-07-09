import Image from 'next/image'

export default function Gallery({img}) {
    return (
        <div className=" w-full md:w-1/2">
            <Image
                src={img}
                alt='product'
                width={600}
                height={0}
                className=' rounded-xl'
            />
        </div>
    )
}
