import { useEffect, useState } from 'react';
import { fetchMovieDetails } from 'components/API/Api';
import { NavLink, Outlet } from 'react-router-dom';

export const MovieDetails = ({ id }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetchMovieDetails(Number(id));
        setDetails(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovie();
  }, [id]);

  return (
    <>
      {details && (
        <div>
          <NavLink to="/">Go Back</NavLink>
          <img
            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
            alt={details.title}
          />
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
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="review">Review</NavLink>
          <Outlet />
        </div>
      )}
    </>
  );
};
