import { FC, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MoviesContextProvider } from 'contexts/moviesContext'
import NavBar from 'components/navBar'
import ProtectedRoute from 'components/protectedRoute'
import ScrollToTop from 'components/scrollToTop'
import SearchMovies from 'pages/searchMovies'
import DetailMovie from 'pages/detailMovie'
import RatedMovies from 'pages/ratedMovies'
import NotFound from 'pages/notFound'

const Home = lazy(() => import('pages/home'))

//? El Context de las peliculas solo lo leen los Route
const App: FC = () => {
  return (
    <div className='App'>
      <ScrollToTop />
      <NavBar />
      <MoviesContextProvider>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:keyword" element={<SearchMovies />} />
            <Route path="/movie/:movieId" element={<DetailMovie />} />
            {/* ? Si cierras sesión te sales de /mylist */}
            <Route path="/mylist/rated" element={<ProtectedRoute><RatedMovies /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MoviesContextProvider>
    </div>
  )
}

export default App
