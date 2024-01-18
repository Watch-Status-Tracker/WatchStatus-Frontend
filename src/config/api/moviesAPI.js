import { movieClient } from '@config/api/requests';

export const getMovies = (page = 1) => movieClient.get(`discover/movie?page=${page}`);
export const getMovie = (id = 1) => movieClient.get(`movie/${id}`);
export const getMovieCast = (id = 1) => movieClient.get(`movie/${id}/credits`);
export const getTrendingTodayMovies = () => movieClient.get('trending/movie/day');
export const getTopRatedMovies = (page = 1) => movieClient.get(`movie/top_rated?page=${page}`);

export const getShows = (page = 1) => movieClient.get(`discover/tv?page=${page}`);
export const getShow = (id = 1) => movieClient.get(`tv/${id}`);
export const getTrendingTodayShows = () => movieClient.get('trending/tv/day');
export const getTopRatedShows = (page = 1) => movieClient.get(`tv/top_rated?page=${page}`);
