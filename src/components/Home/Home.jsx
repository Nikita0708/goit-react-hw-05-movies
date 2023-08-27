import { useEffect, useState } from 'react';
import { fetchTrending } from 'components/API/Api';
import { MovieList } from 'components/MovieList/MovieList';
import { useLocation } from 'react-router-dom';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
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

  return <MovieList movies={movies} location={location} />;
};
export default Home;
