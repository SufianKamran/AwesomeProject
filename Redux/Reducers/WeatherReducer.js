// reducers.js

const initialState = {
  searchText: '',
  navigation: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return { ...state, searchText: action.payload };
    case 'NAVIGATE_TO_HOME':
      action.payload.navigate('Home');
      return state;
    default:
      return state;
  }
};

export default rootReducer;


// import { GET_WEATHER, SET_ERROR } from '../type';

// const initialState = {
//   data: null,
//   error: '',
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_WEATHER:
//       return {
//         data: action.payload,
//         error: '',
//       };
//     case SET_ERROR:
//       return {
//         ...state,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };