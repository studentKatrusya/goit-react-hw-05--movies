import axios from 'axios';
// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
// 4867f71c2cc3334fef3a71f8c4706576

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTranding = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?page=1&api_key=
b2e625c7bfa1b5b54460e1c069c61bdc`);
  return results;
};

export const getMovie = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=
b2e625c7bfa1b5b54460e1c069c61bdc`);
  return data;
};

export const getSearchMovie = async query => {
  const {
    data: { results },
  } = await axios.get(`/search/movie?api_key=b2e625c7bfa1b5b54460e1c069c61bdc&query=${query}
`);
  return results;
};

export const getReview = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=
b2e625c7bfa1b5b54460e1c069c61bdc&language=en-US`);
  return data;
};

export const getCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=
4867f71c2cc3334fef3a71f8c4706576&language=en-US`);
  return data;
};
