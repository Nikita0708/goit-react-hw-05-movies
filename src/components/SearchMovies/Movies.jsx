import { useState, useEffect } from 'react';
import { fetchMoviesWithQuery } from 'components/API/Api';
import { useSearchParams, useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.currentTarget.elements.query.value.toLowerCase().trim());
    setSearchParams({
      query: e.currentTarget.elements.query.value.toLowerCase().trim(),
    });
  };
  const currentQuery = searchParams.get('query');

  useEffect(() => {
    if (query !== '') {
      const getMovieBySearch = async () => {
        try {
          const response = await fetchMoviesWithQuery(query);
          setMovies(response);
        } catch (error) {
          console.log(error.message);
        }
      };
      getMovieBySearch();
    } else if (currentQuery) {
      const getMovieBySearch = async () => {
        try {
          const response = await fetchMoviesWithQuery(currentQuery);
          setMovies(response);
        } catch (error) {
          console.log(error.message);
        }
      };
      getMovieBySearch();
    }

    return;
  }, [query, currentQuery]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="off" name="query" />
        <button type="submit">search</button>
      </form>
      {movies.length !== 0 ? (
        <MovieList movies={movies} location={location} />
      ) : (
        <p>No results found for {query}</p>
      )}
    </>
  );
};
export default Movies;
