
export default function InfoBox({ children, title, count }) {
    return (
        <div className=" flex justify-between items-center flex-grow w-72 text-white bg-primary shadow-lg p-5  rounded-2xl transition-colors">
            <div className=" flex flex-col ">
                <span className=' text-lg'>{title}</span>
                <span className=' text-5xl'>{count}</span>
            </div>
            <div className=" bg-white bg-opacity-30 py-4 px-5 rounded-xl text-4xl ">
            {children}
            </div>
        </div>
    )
}
