
//WeatherScreenCenter
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import images from '../../assets/indx';
import { fetchWeatherData } from '../API';
import styles from './style';

const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(0);

const WeatherScreenCenter = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData(cityName) {
    setLoading(true);
    const data = await fetchWeatherData(cityName);
    setWeatherData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData(city); // Use the city parameter from props
  }, [city]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  } else if (!weatherData) {
    return <Text style={styles.errorText}>Error fetching weather data</Text>;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.myContainer}>
          <Image source={images.winds} style={styles.icons} />
          <Text>{weatherData?.list[0]?.wind.speed} m/s</Text>
        </View>
        <View style={styles.myContainer}>
          <Image source={images.drop} style={styles.icons} />
          <Text>{weatherData?.list[0]?.main.humidity}%</Text>
        </View>
        <View style={styles.myContainer}>
          <Image source={images.pressure} style={styles.icons} />
          <Text style={styles.sunrise}>{weatherData?.list[0]?.main.pressure} hPa</Text>
        </View>
      </View>
    );
  }
};

export default WeatherScreenCenter;


// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
// import images from '../../assets/indx';
// import { fetchWeatherData } from '../API';
// import styles from './style';

// const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(0);

// const WeatherScreenCenter = () => {
//   const [city, setCity] = useState('Paris'); // Initial city
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   async function fetchData(cityName) {
//     setLoading(true);
//     const data = await fetchWeatherData(cityName);
//     setWeatherData(data);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData(city);
//   }, [city]);

//   if (loading) {
//     return <ActivityIndicator size="large" />;
//   } else if (!weatherData) {
//     return <Text style={styles.errorText}>Error fetching weather data</Text>;
//   } else {
//     return (
//       <View style={styles.container}>
//         <View style={styles.myContainer}>
//           <Image source={images.winds} style={styles.icons} />
//           <Text>{weatherData?.list[0]?.wind.speed} m/s</Text>
//         </View>
//         <View style={styles.myContainer}>
//           <Image source={images.drop} style={styles.icons} />
//           <Text>{weatherData?.list[0]?.main.humidity}%</Text>
//         </View>
//         <View style={styles.myContainer}>
//           <Image source={images.pressure} style={styles.icons} />
//           <Text style={styles.sunrise}>{weatherData?.list[0]?.main.pressure} hPa</Text>
//         </View>
//       </View>
//     );
//   }
// };

// export default WeatherScreenCenter;
