import { ADD_FAVORITE, REMOVE_FAVORITE, LOAD_FAVORITES } from '../types';

export const loadFavorites = () => (dispatch) => {
  const stored = JSON.parse(localStorage.getItem('favorites') || '[]');
  dispatch({ type: LOAD_FAVORITES, payload: stored });
};

export const addFavorite = (hotel) => (dispatch, getState) => {
  if (getState().favorites.items.find((h) => h.id === hotel.id)) return;
  const updated = [...getState().favorites.items, hotel];
  localStorage.setItem('favorites', JSON.stringify(updated));
  dispatch({ type: ADD_FAVORITE, payload: hotel });
};

export const removeFavorite = (id) => (dispatch, getState) => {
  const updated = getState().favorites.items.filter((h) => h.id !== id);
  localStorage.setItem('favorites', JSON.stringify(updated));
  dispatch({ type: REMOVE_FAVORITE, payload: id });
};