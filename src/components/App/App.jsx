import { Home } from 'components/Home/Home';
import { useEffect, useState } from 'react';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchTrending } from 'components/API/Api';
import { Routes, Route, Link } from 'react-router-dom';
import { Movies } from 'components/SearchMovies/Movies';
import { Cast } from 'components/Cast/Cast';
import { Review } from 'components/Review/Review';
import s from './app.module.css';

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchTrending();
        setMovies(movies);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);

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

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        {movies.map(({ id }) => (
          <Route
            path={`/movies/${id}`}
            element={<MovieDetails id={id} path={'/movies'} />}
          >
            <Route path="cast" element={<Cast id={id} />} />
            <Route path="review" element={<Review id={id} />} />
          </Route>
        ))}
      </Routes>
    </>
  );
};
