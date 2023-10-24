// weather/sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_WEATHER_REQUEST,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from '../Actions/WeatherAction';

const API_Key = '1c3b611c2ee99ff1089c8beb0957b076';

function* fetchWeatherSaga(action) {
  const { city } = action;
  const API = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_Key}`;

  try {
    const response = yield call(() => axios.get(API));

    if (response.status === 200) {
      const data = response.data;
      yield put(fetchWeatherSuccess(city, data));
    } else {
      yield put(fetchWeatherFailure(city, null));
    }
  } catch (error) {
    yield put(fetchWeatherFailure(city, error));
  }
}

function* watchFetchWeather() {
  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeatherSaga);
}

export default watchFetchWeather;
