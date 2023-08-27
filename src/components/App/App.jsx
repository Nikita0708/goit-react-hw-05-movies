import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import s from './app.module.css';

const Home = lazy(() => import('../Home/Home'));
const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../SearchMovies/Movies'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Review/Review'));

const App = () => {
  return (
    <>
      <header className={s.header}>
        <Link to="/" className={s.nav_link}>
          Home
        </Link>
        <Link to="/movies" className={s.nav_link}>
          Search Movies
        </Link>
      </header>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route
            path={`/movies/:movieId`}
            element={<MovieDetails path={'/movies'} />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
