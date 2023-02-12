import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../api/tmdbApi';
import genreOrCategory from "../api/GenreCategory"


const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategory
  },
});

export default store;