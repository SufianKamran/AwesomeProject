
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import images from '../../assets/indx';
import { fetchWeatherData } from '../API'; // Adjust the import path as needed
import styles from './Styles';

function kelvinToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(0);
}

const Fetch = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchWeatherData('Lahore'); 
      setWeatherData(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  const imageMappings = {
    'Clear': 'sunny',
    'Clouds': 'cloud',
    'Rain': 'moderate_rain',
    // Add more mappings as needed for other weather conditions
  };
  
  // const isNighttime = () => {
  //   const now = new Date();
  //   const currentHour = now.getHours();
  //   return currentHour >= 18 || currentHour < 5;
  // }

  if (loading) {
    return <ActivityIndicator size="large" />;
  } else if (!weatherData) {
    return <Text style={styles.errorText}>Error fetching weather data</Text>;
  } else {

    // Extract the weather condition description from the fetched data
    const weatherCondition = weatherData.list[0].weather[0].main;

    // Get the corresponding image key from the mapping or use 'sunny' as default
    const imageKey = imageMappings[weatherCondition] || 'sunny';
//     const isNight = isNighttime();

  // Use 'night' image if it's nighttime, otherwise use the daytime image
//  const imageSource = isNight ? images['night'] : images[imageKey];

    return (
      <View style={styles.container}>
         {/* <Image source={imageSource} style={styles.img} /> */}
        <Image source={images[imageKey]} style={styles.img} />
        <Text style={styles.temp}>{kelvinToCelsius(weatherData.list[0].main.temp)}°C</Text>
        <Text style={styles.condition}>{weatherData.list[0].weather[0].main}</Text>
      </View>
    );
  }
};

export default Fetch;


// import React, { useEffect, useState } from 'react';
// import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
// import images from '../../assets/indx';

// const API_Key = '1c3b611c2ee99ff1089c8beb0957b076';

// function kelvinToCelsius(kelvin) {
//   return (kelvin - 273.15).toFixed(0); // Fix decimal places as needed
// }

// const Fetch = () => {
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
//   useEffect(() => {
//     getWeatherData('Lahore'); 
//   }, []);


//   if(loading){
//     return (
//         <ActivityIndicator size='large' />
//     )
// }
// else {
//   return (
//     <>
//     <View>
//         <Image source={images.sunny} style={styles.img}/>
//           </View>
//     <View>
// <Text style={styles.temp}>{kelvinToCelsius(weatherData?.list[0]?.main.temp)}°C</Text>
//     </View>
//     <View>
//     <Text style={styles.condition}>{weatherData?.list[0]?.weather[0].main}</Text>
//   </View>
//   </>
//   );
// }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   temp: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: 'black',
//     fontSize: 20, // Adjust the font size as needed
//     marginTop:4,
//     marginLeft: 10,
//   },
//   condition: {
//     textAlign: 'center',
//     //fontWeight: 'bold',
//     color: 'gold',
//     fontSize: 20, // Adjust the font size as needed to match text-6xl
//     marginLeft: 10, // Adjust the margin left as needed to match ml-5
//   },
//   img:{
//     flexDirection:'row',
//     justifyContent: 'center',
//     height:115,
//     width:115,
//     marginTop:3,
//     marginLeft: 120,
//    //backgroundColor:'black'
//   },
// });

// export default Fetch;


