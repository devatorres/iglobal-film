import { FC } from 'react'
import { Popover } from '@mui/material'
import './styles.css'

type PopOverProps = {
  id?: string
  open: boolean
  anchorEl: any
  close: any
  children: JSX.Element
}

const PopOver: FC<PopOverProps> = ({ id, open, anchorEl, close, children }) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={close}
      elevation={0}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'right'
      }}>
      <section className="popover-list">{children}</section>
    </Popover>
  )
}

export default PopOver
