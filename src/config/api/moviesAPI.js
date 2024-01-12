import { movieClient } from '@config/api/requests';

export const getMovies = (page) => movieClient.get(`discover/movie?page=${page}`);
export const getMovie = (id) => movieClient.get(`movie/${id}`);
export const getTrendingTodayMovies = () => movieClient.get('trending/movie/day');
export const getTopRatedMovies = (page) => movieClient.get(`movie/top_rated?page=${page}`);

export const getShows = (page) => movieClient.get(`discover/tv?page=${page}`);
export const getShow = (id) => movieClient.get(`tv/${id}`);
export const getTrendingTodayShows = () => movieClient.get('trending/tv/day');
export const getTopRatedShows = (page) => movieClient.get(`tv/top_rated?page=${page}`);
