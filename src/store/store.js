import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../slices/favoritesSlice';
import moviesReducer from '../slices/moviesSlice';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    movies: moviesReducer,
  },
});

export default store;
