import { fetchReviews } from 'components/API/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './review.module.css';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const resp = await fetchReviews(Number(movieId));
        setReviews(resp);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDetails();
  }, [movieId]);
  return (
    <div>
      {reviews.length !== 0 ? (
        <ul className={s.list}>
          {reviews &&
            reviews.map(({ content, author_details, id }) => {
              return (
                <li key={id} className={s.item}>
                  <p className={s.author}>
                    Author:{' '}
                    {author_details.name ? author_details.name : 'Anonymous'}
                  </p>
                  <p className={s.rating}>Rating: {author_details.rating}</p>

                  <p className={s.content}>{content}</p>
                </li>
              );
            })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
export default Reviews;
