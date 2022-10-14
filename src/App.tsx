import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from 'components/Header'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

const App: FC = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
