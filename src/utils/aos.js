'use client'
import { useEffect } from "react"

// AOS 
import Aos from "aos"
import 'aos/dist/aos.css'


export default function AOSInit() {

    useEffect(() => {
        const aosAnimation = document.querySelectorAll('[data-aos]');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
              entry.target.classList.add('aos-animate');
            } else {
              entry.target.classList.remove('aos-animate');
            }
          });
        });
        aosAnimation.forEach(aosObject => {
          observer.observe(aosObject);
        });
        Aos.init({
          duration: 600,
          delay: 100
        })
        Aos.refresh()
    }, [])

    return null

}
