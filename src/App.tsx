import { FC, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from 'components/navBar'
import SearchMovies from 'pages/searchMovies'
import DetailMovie from 'pages/detailMovie'
import NotFound from 'pages/notFound'
import { MoviesContextProvider } from 'contexts/moviesContext'

const Home = lazy(() => import('pages/home'))

const App: FC = () => {
  return (
    <div className='App'>
      <NavBar />
      <Suspense fallback={null}>
        <MoviesContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/:searchKeyword" element={<SearchMovies />} />
              <Route path="/movie/:movieId" element={<DetailMovie />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </MoviesContextProvider>
      </Suspense>
    </div>
  )
}

export default App
