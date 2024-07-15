
export default function Button({ type, isSubmitType, text, onClick, fullWith, isDisabled }) {
  return (
    type === 'simple' ? (
      <button type={isSubmitType ? "submit" : "button"} className=' translate-x-4 flex group text-sm hover:text-primary relative before:absolute before:w-3 before:h-[1px] before:top-1/2 before:bg-current before:transition-all before:duration-300 hover:before:w-4 ' onClick={onClick} disabled={isDisabled}>
        <span className='-translate-x-4 group-hover:-translate-x-5 transition-all duration-300'>{text}</span>
      </button>
    ) : type === 'outline' ? (
      <button type={isSubmitType ? "submit" : "button"} className={` text-center ${fullWith ? 'w-full' : 'w-40'} w-full p-4 text-sm  rounded-xl  border-1 border-primary hover:border-secondary hover:bg-secondary text-primary hover:text-white transition-colors duration-300`} onClick={onClick} disabled={isDisabled}>
        {text}
      </button>
    ) : (
      <button type={isSubmitType ? "submit" : "button"} className={` text-center ${fullWith ? 'w-full' : 'w-40'} p-4 text-sm  rounded-xl bg-primary hover:bg-secondary text-white transition-colors duration-300`} onClick={onClick} disabled={isDisabled}>
        {text}
      </button>
    )


  )
}
