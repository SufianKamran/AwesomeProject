// weather/reducers.js
import {
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
    FETCH_WEATHER_REQUEST
  } from '../Actions/WeatherAction';
  
  const initialState = {
    weather: {},
    loading: false,
    error: null,
  };
  
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WEATHER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_WEATHER_SUCCESS:
        return {
          ...state,
          weather: {
            ...state.weather,
            [action.city]: action.data,
          },
          loading: false,
        };
      case FETCH_WEATHER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default weatherReducer;
  