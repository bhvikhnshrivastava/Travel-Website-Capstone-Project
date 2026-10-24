export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const LOAD_FAVORITES = 'LOAD_FAVORITES';
export const SET_CURRENCY = 'SET_CURRENCY';

export const loadFavorites = () => (dispatch) => {
  const saved = localStorage.getItem('bhvikhn_wishlist');
  dispatch({ type: LOAD_FAVORITES, payload: saved ? JSON.parse(saved) : [] });
};
export const toggleFavorite = (id) => (dispatch, getState) => {
  const wishlist = getState().favorites.items;
  const newWishlist = wishlist.includes(id) ? wishlist.filter(item => item !== id) : [...wishlist, id];
  localStorage.setItem('bhvikhn_wishlist', JSON.stringify(newWishlist));
  dispatch({ type: wishlist.includes(id) ? REMOVE_FAVORITE : ADD_FAVORITE, payload: id });
};
export const setCurrency = (currency) => ({ type: SET_CURRENCY, payload: currency });