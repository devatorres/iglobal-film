import { FC, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ArrowIcon from '@mui/icons-material/ArrowUpward'
import './styles.css'

const ScrollToTop: FC = () => {
  const { t } = useTranslation()
  const scrollToTopRef = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    window.onscroll = () => {
      if (scrollToTopRef.current) {
        scrollToTopRef.current.style.display =
          window.scrollY > 200 ? 'grid' : 'none'
      }
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleScrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className="scroll-to-top"
      aria-label="scroll-to-top"
      title={t('scrollToTop')}
      onClick={handleScrollToTop}
      ref={scrollToTopRef}>
      <div className="animator">
        <ArrowIcon />
      </div>
    </button>
  )
}

export default ScrollToTop
