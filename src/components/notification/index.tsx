import { type FC } from 'react'
import { DEFAULT_ANCHOR_ORIGIN } from '@/constants/default'
import Snackbar from '@mui/material/Snackbar'

type NotificationProps = {
  message: string
  open: boolean
  close: any
}

const Notification: FC<NotificationProps> = (props) => {
  const { message, open, close } = props

  return (
    <Snackbar
      autoHideDuration={5000}
      anchorOrigin={DEFAULT_ANCHOR_ORIGIN}
      open={open}
      onClose={close}
      message={message}
    />
  )
}

export default Notification
