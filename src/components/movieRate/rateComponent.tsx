import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import useRate from '@/hooks/useRate'
import useUser from '@/hooks/useUser'
import Rating from '@mui/material/Rating'
import GuestSessionModal from '@/components/guestSessionModal'
import Notification from '@/components/notification'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import './styles.css'

interface RateComponentProps {
  movieId: number
}

const RateComponent: FC<RateComponentProps> = (props) => {
  const { t } = useTranslation()
  const { user, createGuestSession } = useUser()
  const { movieId } = props
  const { value, setValue, rateMovie } = useRate({ movieId })
  const [openSessionModal, setOpenSessionModal] = useState(false)
  const [openNotification, setOpenNotification] = useState(false)
  const [openRate, setOpenRate] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!user) {
      setOpenSessionModal(true)
      return undefined
    }

    await rateMovie()
    setOpenRate(true)
  }

  const handleChange = (_event: any, newValue: any) => {
    setValue(newValue)
  }

  const handleCreateGuestSession = async () => {
    await createGuestSession()
    setOpenNotification(true)
  }

  const handleCloseNotification = () => {
    setOpenNotification(false)
  }

  const handleCloseRate = () => {
    setOpenRate(false)
  }

  return (
    <>
      <form className='rate' onSubmit={handleSubmit}>
        <Rating
          name='half-rating'
          size='large'
          precision={0.5}
          value={value}
          onChange={handleChange}
          emptyIcon={
            <StarBorderIcon
              fontSize='inherit'
              style={{ color: 'var(--color-secondary-hover)' }}
            />
          }
        />
        <button type='submit'>{t('vote')}</button>
      </form>
      <GuestSessionModal
        open={openSessionModal}
        setOpen={setOpenSessionModal}
        action={handleCreateGuestSession}
      />
      <Notification
        message={t('notification.sessionCreate')}
        open={openNotification}
        close={handleCloseNotification}
      />
      <Notification
        message={t('notification.rateMovie')}
        open={openRate}
        close={handleCloseRate}
      />
    </>
  )
}

export default RateComponent
