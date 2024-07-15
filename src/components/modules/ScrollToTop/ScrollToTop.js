'use client'
import { useEffect, useState } from "react";
// Icons
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
      const showScrollToTop = () => {
          const currentScroll = window.pageYOffset
          if (currentScroll > 105) {
            setShowScrollToTop(true)
          } else {
            setShowScrollToTop(false)
          }
      }

      window.addEventListener('scroll', showScrollToTop)
      return () => window.removeEventListener('scroll', showScrollToTop)
  }, [])


  return (
    <div className={`fixed left-7 ${showScrollToTop ? ' bottom-7  visible opacity-100 ' : '-bottom-20 invisible opacity-0 '}  z-50 text-2xl p-2 rounded-md hover:rounded-none  bg-primary hover:bg-secondary hover:text-white transition-all duration-300 `} onClick={scrollToTop}>
      <IoIosArrowUp />
    </div>
  )
}
