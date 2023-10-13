import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import images from '../../assets/indx';
import { fetchWeatherData } from '../API';
import styles from './style';

function kelvinToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(0);
}

const WeatherScreenTop = () => {
  const [city, setCity] = useState('Paris'); // Initial city
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData(cityName) {
    setLoading(true);
    const data = await fetchWeatherData(cityName);
    setWeatherData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData(city);
  }, [city]);

  const imageMappings = {
    'Clear': 'sunny',
    'Clouds': 'cloud',
    'Rain': 'moderate_rain',
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  } else if (!weatherData) {
    return <Text style={styles.errorText}>Error fetching weather data</Text>;
  } else {
    const weatherCondition = weatherData.list[0].weather[0].main;
    const imageKey = imageMappings[weatherCondition] || 'sunny';

    return (
      <View style={styles.container}>
        <Text style={styles.myCity}>{city}</Text>
        <Image source={images[imageKey]} style={styles.img} />
        <Text style={styles.temp}>{kelvinToCelsius(weatherData.list[0].main.temp)}°C</Text>
        <Text style={styles.condition}>{weatherData.list[0].weather[0].main}</Text>
      </View>
    );
  }
};

export default WeatherScreenTop;


// import React,{useState} from 'react';
// import { View, Text, Image } from 'react-native'
// import styles from './style';
// import images from '../../assets/indx';
// import Fetch from './Fetch/Index';

// const WeatherScreenTop = ({ weatherData }) => {
//   const [city, setCity] = useState('Paris'); // Initial city
//  return (
//         <View style={styles.container}>
//           <View>
//             <Fetch city={city}/>
//           </View> 
//         </View>
//       );
//     }
//     export default WeatherScreenTop;

