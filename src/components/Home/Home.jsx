import { useEffect, useState } from 'react';
import { fetchTrending } from 'components/API/Api';
import { Link } from 'react-router-dom';
import s from './home.module.css';

export const Home = () => {
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
    <ul className={s.list}>
      {movies.map(({ id, poster_path, title }) => (
        <Link to={`/movies/${id}`} className={s.item}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            className={s.poster}
          />
          <h3 className={s.title}>{title}</h3>
        </Link>
      ))}
    </ul>
  );
};
