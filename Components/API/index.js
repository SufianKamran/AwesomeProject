
//import React, {  useState } from 'react';
const API_Key = '1c3b611c2ee99ff1089c8beb0957b076';

export async function fetchWeatherData(cityName) {
  const API = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_Key}`;
  
  try {
    const response = await fetch(API);

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
// import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';

// const API_Key = '1c3b611c2ee99ff1089c8beb0957b076';

// function kelvinToCelsius(kelvin) {
//   return (kelvin - 273.15).toFixed(0); // Fix decimal places as needed
// }

// const api = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   async function getWeatherData(cityName) {
//     setLoading(true);
//     const API = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_Key}`;
  
//       let res = await fetch(API);
//       if (res.status === 200) {
//         res = await res.json();
//         setWeatherData(res);
//       } else {
//         setWeatherData(null);
//       }
//     setLoading(false);
//   }
// }
// export default api;




// import { Axios } from "react-native-axios";

// const API_Key = '1c3b611c2ee99ff1089c8beb0957b076';

// const forecastEndpoint = params=> `https://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=${params.cityName}&days=${params.days}`;
// const locationsEndpoint = params=> `https://api.weatherapi.com/v1/search.json?key=${API_Key}&q=${params.cityName}`;
// //const apiCall = async (endpoint, params)=>{
// const apiCall = async (endpoint)=>{
//     const options = {
//         method: 'GET',
//         url: endpoint,
//     };
//       try{
//         const response = await Axios.request(options);
//         return response.data;
//       }catch(error){
//         console.log('error: ',error);
//         return {};
//     }
// }

// //}
// export const fetchWeatherForecast = params=>{
//     let forecastUrl = forecastEndpoint(params);
//     return apiCall(forecastUrl);
// }
// export const fetchLocations = params=>{
//     let locationsUrl = locationsEndpoint(params);
//     return apiCall(locationsUrl);
// }
