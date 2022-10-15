import { FC, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from 'components/navBar'
import SearchMovies from 'pages/searchMovies'
import DetailMovie from 'pages/detailMovie'
import RatedMovies from 'pages/ratedMovies'
import NotFound from 'pages/notFound'
import { MoviesContextProvider } from 'contexts/moviesContext'

const Home = lazy(() => import('pages/home'))

//? El Context de las peliculas solo lo leen los Route
const App: FC = () => {
  return (
    <div className='App'>
      <NavBar />
      <MoviesContextProvider>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:keyword" element={<SearchMovies />} />
            <Route path="/movie/:movieId" element={<DetailMovie />} />
            <Route path="/mylist/rated" element={<RatedMovies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MoviesContextProvider>
    </div>
  )
}

export default App
