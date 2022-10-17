import { FC } from 'react'
import { Helmet } from 'react-helmet'
import './styles.css'

const NotFound: FC = () => {
  //Todo los helmet con i18n
  return (
    <div>
      <Helmet>
        <title>Error 404 | Ipglobal Test</title>
      </Helmet>
    </div>
  )
}

export default NotFound
