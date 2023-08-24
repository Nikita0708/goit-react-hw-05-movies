import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = 'e32606210989f5ad28c9406f2323d1f2';

export async function fetchTrending() {
  const { data } = await axios.get(`/trending/movie/day?api_key=${key}`);
  const response = data.results;
  return response;
}

export async function fetchMoviesWithQuery(searchQuery) {
  const { data } = await axios.get(
    `/search/movie?api_key=${key}&language=en-US&page=1&query=${searchQuery}`
  );
  return data.results;
}

export async function fetchMovieDetails(id) {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${key}&language=en-US`
  );
  return data;
}

export async function fetchCast(id) {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=${key}&language=en-US`
  );

  return data.cast;
}

export async function fetchReviews(id) {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
  );
  return data.results;
}
