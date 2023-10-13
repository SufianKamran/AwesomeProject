import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import axios from 'axios';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import DailyCast from '../DailyCast.js/Index';
import WeeklyCast from '../WeeklyCast.js';
import images from '../../assets/indx';

const API_KEY = '1c3b611c2ee99ff1089c8beb0957b076';

const WeatherScreenBottom = () => {
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [weeklyWeatherData, setWeeklyWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHourlyForecast = async (cityName) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
        );
        if (response.status === 200) {
          const data = response.data.list;
          setHourlyForecast(data);
        }
      } catch (error) {
        console.error('Error fetching hourly forecast data:', error);
      }
    };

    const fetchWeeklyWeatherData = async (cityName) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
        );
        if (response.status === 200) {
          const dailyForecasts = groupByDay(response.data.list);
          setWeeklyWeatherData(dailyForecasts);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching weekly weather data:', error);
        setError(error);
        setLoading(false);
      }
    };
    fetchHourlyForecast('Paris');
    fetchWeeklyWeatherData('Paris');
  }, []);

  const groupByDay = (forecastData) => {
    const dailyForecasts = {};

    forecastData.forEach((forecast) => {
      const date = forecast.dt_txt.split(' ')[0];
      const dayData = dailyForecasts[date] || [];
      dayData.push(forecast);
      dailyForecasts[date] = dayData;
    });

    return Object.values(dailyForecasts);
  };

  return (
    <View style={styles.container}>
      <View style={styles.hour}>
        <Icon name="calendar" size={18} color="black" />
        <Text style={styles.text}> Hourly forecast</Text>
      </View>
      <DailyCast hourlyForecast={hourlyForecast} />

      <View style={styles.week}>
        <Icon name="calendar" size={18} color="black" />
        <Text style={styles.text}> Weekly forecast</Text>
      </View>
      <WeeklyCast
        weeklyWeatherData={weeklyWeatherData}
        loading={loading}
        error={error}
      />
    </View>
  );
};

export default WeatherScreenBottom;

// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import styles from './style';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import DailyCast from '../DailyCast.js/Index';
// import WeeklyCast from '../WeeklyCast.js';
// import axios from 'axios';

// const API_KEY = '1c3b611c2ee99ff1089c8beb0957b076';
// const API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// export default function WeatherScreenBottom() {
//   const [hourlyForecast, setHourlyForecast] = useState([]);

//   useEffect(() => {
//     const fetchWeatherData = async (cityName) => {
//       try {
//         const response = await axios.get(`${API_URL}?q=${cityName}&appid=${API_KEY}`);
//         if (response.status === 200) {
//           const data = response.data.list;
//           setHourlyForecast(data);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     // Call the fetchWeatherData function with the desired city name
//     fetchWeatherData('Paris');
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View style={styles.hour}>
//         <Icon name="calendar" size={18} color="black" />
//         <Text style={styles.text}> Hourly forecast</Text>
//       </View>
//       <DailyCast hourlyForecast={hourlyForecast} />

//       <View style={styles.week}>
//         <Icon name="calendar" size={18} color="black" />
//         <Text style={styles.text}> Weekly forecast</Text>
//       </View>
//       <WeeklyCast />
//     </View>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { View,Text } from 'react-native'
// import styles from './style';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import DailyCast from '../DailyCast.js/Index';
// import WeeklyCast from '../WeeklyCast.js';
// import { fetchWeatherData } from '../API';
// import axios from 'axios';

// const API_KEY = '1c3b611c2ee99ff1089c8beb0957b076' ;

// export default function WeatherScreenBottom() {

//   const [hourlyForecast, setHourlyForecast] = useState([]);

//   useEffect(() => {
//     // Function to fetch hourly forecast data
//     const fetchHourlyForecast = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.openweathermap.org/data/2.5/forecast?q=$Paris&appid=${API_KEY}`
//         );
//         if (response.status === 200) {
//           const data = response.data.list;
//           setHourlyForecast(data);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     // Call the fetchHourlyForecast function
//     fetchHourlyForecast();
//   }, []);
  

//     return (
//       <>
//         <View style={styles.container}>
//         <View style={styles.hour}>
//           <Icon name="calendar" size={18} color="black" />
//           <Text style={styles.text}> Hourly forecast</Text>
//         </View>
//        <DailyCast hourlyForecast={hourlyForecast}/>
       
//        <View style={styles.week}>
//        <Icon name="calendar" size={18} color="black" />
//           <Text style={styles.text}> Weekly forecast</Text>
//        </View>
//        <WeeklyCast/>
//       </View>
//       </>
//     );
//   }
  
