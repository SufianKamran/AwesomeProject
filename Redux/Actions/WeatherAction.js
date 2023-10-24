// weather/actions.js
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const fetchWeatherRequest = (city) => ({
  type: FETCH_WEATHER_REQUEST,
  city,
});

export const fetchWeatherSuccess = (city, data) => ({
  type: FETCH_WEATHER_SUCCESS,
  city,
  data,
});

export const fetchWeatherFailure = (city, error) => ({
  type: FETCH_WEATHER_FAILURE,
  city,
  error,
});
