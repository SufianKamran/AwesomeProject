
// store.js

import { createStore } from 'redux';
import rootReducer from '../Reducers/WeatherReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer);

export default store;


// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

// import WeatherReducer from './Reducers/WeatherReducer';

// const rootReducer = combineReducers({
//   weather: WeatherReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;