import { fetchCast } from 'components/API/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './cast.module.css';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const resp = await fetchCast(Number(movieId));
        setCast(resp);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDetails();
  }, [movieId]);

  return (
    <div>
      {cast.length !== 0 && (
        <ul className={s.list}>
          {cast.map(({ name, profile_path, character, id }) => {
            return (
              <li key={id} className={s.item}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                  className={s.poster}
                />
                <p>{name}</p>
                <p>Character: {character} </p>
              </li>
            );
          })}
        </ul>
      )}
      {cast.length === 0 && (
        <p>We have no information about the actors of this movie</p>
      )}
    </div>
  );
};
export default Cast;
