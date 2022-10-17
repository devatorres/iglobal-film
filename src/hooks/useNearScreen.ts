import { useEffect, useState } from 'react'

const OPTIONS = Object.freeze({ root: null, rootMargin: '150px', threshold: 0 })

const useNearScreen = (externalRef: any) => {
  const [isNearScreen, setShow] = useState(false)

  useEffect(() => {
    let observer: IntersectionObserver

    if (externalRef?.current !== undefined) {
      observer = new IntersectionObserver(
        ([entry]) => setShow(entry.isIntersecting),
        OPTIONS
      )
      observer.observe(externalRef.current)
    }

    return () => observer && observer.disconnect()
  })

  return { isNearScreen } as const
}

export default useNearScreen
