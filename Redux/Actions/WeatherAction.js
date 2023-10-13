// actions.js

export const setSearchText = (text) => {
  return {
    type: 'SET_SEARCH_TEXT',
    payload: text,
  };
};

export const navigateToHome = (navigation) => {
  return {
    type: 'NAVIGATE_TO_HOME',
    payload: navigation,
  };
};


// import { GET_WEATHER, SET_ERROR } from '../type';
// import { openweathermap_api_key } from '../../config.json';

// export const getWeather = (city, onSuccess = () => {}, onError = () => {}) => {
//   return async dispatch => {
//     try {
//       const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${openweathermap_api_key}`);
      
//       if (!res.ok) {
//         const resData = await res.json();
//         throw new Error(resData.message);
//       }

//       const resData = await res.json();
//       console.log(resData)
//       dispatch({
//         type: GET_WEATHER,
//         payload: resData,
//       });
//       onSuccess();
//     } catch (err) {
//       dispatch(setError(err.message));
//       onError();
//     }
//   };
// };

// const setError = (err) => {
//     return {
//       type: SET_ERROR,
//       payload: err,
//     };
//   };