import { type FC } from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { useTranslation } from 'react-i18next'
import './styles.css'

type GuestSessionModalProps = {
  open: boolean
  setOpen: (open: boolean) => void
  action: any
}

const GuestSessionModal: FC<GuestSessionModalProps> = (props) => {
  const { open, setOpen, action } = props
  const { t } = useTranslation()

  const handleCreateSession = () => {
    setOpen(false)
    action()
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      className='guest-session-modal'
      open={open}
      onClose={handleClose}
      aria-labelledby='guest-session-modal'
      aria-describedby='say-user-can-create-guest-session'
    >
      <DialogTitle id='guest-session-modal' className='title reset-skew'>
        {t('guestSessionModal.title')}
      </DialogTitle>
      <DialogContent className='description reset-skew'>
        <p id='say-user-can-create-guest-session'>{t('guestSessionModal.description')}</p>
      </DialogContent>
      <DialogActions className='actions reset-skew'>
        <button
          className='btn-action'
          aria-describedby='create-session'
          onClick={handleCreateSession}
        >
          {t('createSession')}
        </button>
        <button
          className='btn-cancel'
          aria-describedby='create-session'
          onClick={handleClose}
        >
          {t('noThanks')}
        </button>
      </DialogActions>
    </Dialog>
  )
}

export default GuestSessionModal
