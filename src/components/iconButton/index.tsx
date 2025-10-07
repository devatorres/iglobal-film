import { type FC, type JSX } from 'react'
import './styles.css'

type IconButtonProps = {
  id?: string | undefined
  title?: string | undefined
  click: any
  children: JSX.Element
}

const IconButton: FC<IconButtonProps> = (props) => {
  const { id = undefined, title = undefined, click, children } = props

  return (
    <button className='icon-button' aria-describedby={id} title={title} onClick={click}>
      {children}
    </button>
  )
}

export default IconButton
