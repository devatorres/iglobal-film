import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { HOME_LINK } from '@/constants/router'
import './styles.css'

const NotFound: FC = () => {
  const { t } = useTranslation()

  return (
    <div className='wrapper-not-found'>
      <Helmet>
        <title>Error 404 · iGlobal Film</title>
      </Helmet>
      <div className='wrapper-content'>
        <p className='title'>404</p>
        <p className='description'>
          {t('404.friendlyMessage')} :) <Link to={HOME_LINK}>{t('404.goHome')}</Link>
        </p>
      </div>
    </div>
  )
}

export default NotFound
