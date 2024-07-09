import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Image
        src={'/images/gif/loading.gif'}
        alt='loading'
        width={100}
        height={0}
        unoptimized={true}
      />
    </div>
  )
}
