import axios from 'axios';
import {
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTELS_FAILURE,
  FETCH_HOTEL_DETAIL_REQUEST,
  FETCH_HOTEL_DETAIL_SUCCESS,
} from '../types';

const BASE = 'https://api.liteapi.travel/v3.0';
const KEY = import.meta.env.VITE_LITEAPI_KEY;

export const fetchHotels = (countryCode) => async (dispatch) => {
  dispatch({ type: FETCH_HOTELS_REQUEST });
  try {
    const res = await axios.get(BASE + '/data/hotels', {
      params: { countryCode, limit: 50 },
      headers: { 'X-API-Key': KEY },
    });
    let hotels = res.data.data || [];
    if (hotels.length > 50) hotels = hotels.slice(0, 50);
    dispatch({ type: FETCH_HOTELS_SUCCESS, payload: hotels });
  } catch (err) {
    dispatch({ type: FETCH_HOTELS_FAILURE, payload: err.message });
  }
};

export const fetchHotelDetail = (hotelId) => async (dispatch) => {
  dispatch({ type: FETCH_HOTEL_DETAIL_REQUEST });
  try {
    const res = await axios.get(BASE + '/data/hotel', {
      params: { hotelId },
      headers: { 'X-API-Key': KEY },
    });
    dispatch({ type: FETCH_HOTEL_DETAIL_SUCCESS, payload: res.data.data });
  } catch (e) {
    console.error(e);
  }
};