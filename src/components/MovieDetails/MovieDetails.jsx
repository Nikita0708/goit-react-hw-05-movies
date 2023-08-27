import { useEffect, useState } from 'react';
import { fetchMovieDetails } from 'components/API/Api';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import s from './moviedetails.module.css';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetchMovieDetails(Number(movieId));
        setDetails(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <>
      {details && (
        <div>
          <NavLink to={location?.state?.from ?? '/'} className={s.details_link}>
            Go Back
          </NavLink>
          <div className={s.details}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
              alt={details.title}
              className={s.poster}
            />
            <div className={s.details_wrap}>
              <div>
                <h1>{details.original_title}</h1>
                <p>({details.release_date})</p>
              </div>
              <div>
                <h2>User votes:</h2>
                <p>User popularity: {details.popularity}</p>
                <p>Vote average: {details.vote_average}</p>
              </div>
              <div>
                <h2>description:</h2>
                <p>{details.overview}</p>
              </div>
              <div>
                <h2>genres:</h2>
                <p>{details.genres.map(genre => genre.name).join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={s.bottom_wrap}>
        <div className={s.link_wrap}>
          <NavLink
            to="cast"
            state={{ from: location?.state?.from ?? '/' }}
            className={s.details_link}
          >
            Cast
          </NavLink>
          <NavLink
            to="review"
            state={{ from: location?.state?.from ?? '/' }}
            className={s.details_link}
          >
            Review
          </NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetails;
