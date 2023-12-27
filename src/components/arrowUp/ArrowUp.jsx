import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const ArrowUp = () => {

  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
   window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setScrollTop(true);
      return
    }
    setScrollTop(false);
   }) 
  }, [])

  return (
    scrollTop &&
    <a href="#" className="fixed bg-black right-5 bottom-12 bg-black rounded-full p-5 border border-solid border-white">
        <ArrowUpIcon className="h-7 w-7" color='white'/>
    </a>
  )
}

export default ArrowUp