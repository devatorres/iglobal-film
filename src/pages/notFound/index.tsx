import { FC } from 'react'
import { Helmet } from 'react-helmet'
import './styles.css'

const NotFound: FC = () => {
  return (
    <div className="wrapper-not-found">
      <Helmet>
        <title>Error 404 · iGlobal Film</title>
      </Helmet>
      <p className="title">404</p>
    </div>
  )
}

export default NotFound
