import { useRef, useState, useEffect } from "react";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
}

function useOnScreen() {
  const containerRef = useRef(null)
  const [ isVisible, setIsVisible] = useState(false)

  const callback = (entries) => {
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    if (containerRef.current) observer.observe(containerRef.current)

      return () => {
        if (containerRef.current) observer.unobserve(containerRef.current)
      }
  }, [containerRef, options])
  
  return [containerRef, isVisible]
}

export default useOnScreen
