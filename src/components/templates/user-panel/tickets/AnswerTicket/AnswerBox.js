import Image from 'next/image'

export default function AnswerBox({ type, user, createdAt, body }) {
  return (
    <div className={`${type === 'admin' ? 'bg-primary rounded-r-3xl rounded-tl-3xl self-end w-full' : 'bg-secondary rounded-l-3xl rounded-tr-3xl'} lg:w-1/2  p-5  text-white`}>
      <div className="flex items-center gap-3 border-b-1 pb-3">
        <Image
          src={'/images/png/user-icon.png'}
          alt='user-icon'
          width={55}
          height={0}
          className=' rounded-full'
        />
        <div className=" flex justify-between items-start w-full">
          <div className=" flex flex-col">
            <span className=' text-lg'>{user.name}</span>
            <span className=' '>{type === "ADMIN" ? "ادمین" : "کاربر"}</span>
          </div>
          <span className=''>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
        </div>
      </div>
      <div className=" pt-3">
        <p className=' leading-7'>{body}</p>
      </div>
    </div>
  )
}
