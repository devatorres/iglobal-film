import { FC, useEffect } from 'react'
import Rellax from 'rellax'
import './styles.css'

const Logo: FC = () => {
  useEffect(() => {
    new Rellax('.rellax')
  }, [])

  return (
    <svg
      className="rellax header-logo"
      data-rellax-speed="-3"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 395.37">
      <defs>
        <linearGradient
          id="gradient"
          x1="166.5"
          y1="350.39"
          x2="480"
          y2="350.39"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#b9edf5" stopOpacity="0" />
          <stop offset="0.05" stopColor="#b9edf5" stopOpacity="0.02" />
          <stop offset="0.11" stopColor="#b9edf5" stopOpacity="0.09" />
          <stop offset="0.18" stopColor="#b9edf5" stopOpacity="0.2" />
          <stop offset="0.26" stopColor="#b9edf5" stopOpacity="0.35" />
          <stop offset="0.34" stopColor="#b9edf5" stopOpacity="0.54" />
          <stop offset="0.43" stopColor="#b9edf5" stopOpacity="0.77" />
          <stop offset="0.5" stopColor="#b9edf5" />
          <stop offset="0.56" stopColor="#acdff2" />
          <stop offset="0.68" stopColor="#89bae8" />
          <stop offset="0.84" stopColor="#507eda" />
          <stop offset="1" stopColor="#103ac9" />
        </linearGradient>
      </defs>
      <path
        fill="var(--header-logo)"
        d="M184.53,0C82.61,0,0,82.62,0,184.54S82.61,369.07,184.53,369.07s184.54-82.63,184.54-184.53S286.44,0,184.53,0Zm101,77.33a50.09,50.09,0,1,1-50.09,50.09A50.09,50.09,0,0,1,285.58,77.33ZM185.41,18.46a50.09,50.09,0,1,1-50.09,50.08A50.08,50.08,0,0,1,185.41,18.46ZM201,184.54a16.48,16.48,0,1,1-16.48-16.48A16.47,16.47,0,0,1,201,184.54ZM85.24,77.33a50.09,50.09,0,1,1-50.1,50.09A50.09,50.09,0,0,1,85.24,77.33Zm0,215.28a50.09,50.09,0,1,1,50.08-50.08A50.09,50.09,0,0,1,85.24,292.61Zm100.17,58.88a50.09,50.09,0,1,1,50.08-50.09A50.1,50.1,0,0,1,185.41,351.49Zm100.17-58.88a50.09,50.09,0,1,1,50.09-50.08A50.09,50.09,0,0,1,285.58,292.61Z"
      />
      <path
        fill="url(#gradient)"
        d="M480,342c-111-17.23-192,90.19-313.5,39.81C286.66,424,423.63,226.92,480,342Z"
      />
    </svg>
  )
}

export default Logo
