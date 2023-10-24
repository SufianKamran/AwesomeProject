// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import weatherReducer from '../Reducers/WeatherReducer';
import watchFetchWeather from '../Saga/saga';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchWeather);

export default store;
