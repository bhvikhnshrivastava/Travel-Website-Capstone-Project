import { combineReducers } from 'redux';
import { ADD_FAVORITE, REMOVE_FAVORITE, LOAD_FAVORITES, SET_CURRENCY } from '../actions';

const favoriteReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case LOAD_FAVORITES: return { ...state, items: action.payload };
    case ADD_FAVORITE: return { ...state, items: [...state.items, action.payload] };
    case REMOVE_FAVORITE: return { ...state, items: state.items.filter(id => id !== action.payload) };
    default: return state;
  }
};

const currencyReducer = (state = 'EUR', action) => {
  switch (action.type) {
    case SET_CURRENCY: return action.payload;
    default: return state;
  }
};

export default combineReducers({ favorites: favoriteReducer, currency: currencyReducer });