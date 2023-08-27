import { Link, useLocation } from 'react-router-dom';
import s from '../Home/home.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies &&
        movies.map(({ id, poster_path, title }) => (
          <Link
            to={`/movies/${id}`}
            key={id}
            state={{ from: location }}
            className={s.item}
          >
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
