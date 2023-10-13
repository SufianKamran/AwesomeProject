
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './style';
import images from '../../assets/indx';

const WeeklyCast = ({ weeklyWeatherData, loading, error }) => {
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!weeklyWeatherData || weeklyWeatherData.length === 0) {
    return <Text>No weather data available.</Text>;
  }

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(0);
  };

  const imageMappings = {
    'Clear': 'sunny',
    'Clouds': 'cloud',
    'Rain': 'moderate_rain',
    // Add more mappings as needed for other weather conditions
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {weeklyWeatherData.map((dayData, index) => {
        const weatherDescription = dayData[0].weather[0].main;
        const imageKey = imageMappings[weatherDescription] || 'sunny';

        return (
          <View key={index} style={styles.itemContainer}>
            <Image source={images[imageKey]} style={styles.itemImage} />
            <Text style={styles.dayText}>{dayData[0].dt_txt.split(' ')[0]}</Text>
            <Text style={styles.temperatureText}>
              {kelvinToCelsius(dayData[0].main.temp)} °C
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default WeeklyCast;


// import React, { useEffect, useState } from 'react';
// import { ScrollView, View, Text, Image } from 'react-native';
// import axios from 'axios';
// import styles from './style';
// import images from '../../assets/indx';

// const API_Key = '1c3b611c2ee99ff1089c8beb0957b076';

// const WeeklyCast = () => {
//   const [weeklyWeatherData, setWeeklyWeatherData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Paris&appid=${API_Key}`;

//     axios.get(apiUrl)
//       .then((response) => {
//         // Extract and group forecast data by day
//         const dailyForecasts = groupByDay(response.data.list);

//         setWeeklyWeatherData(dailyForecasts);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching weather data:', error);
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   // Function to group forecast data by day
//   const groupByDay = (forecastData) => {
//     const dailyForecasts = {};

//     forecastData.forEach((forecast) => {
//       const date = forecast.dt_txt.split(' ')[0]; // Extract date (YYYY-MM-DD)
//       const dayData = dailyForecasts[date] || [];
//       dayData.push(forecast);
//       dailyForecasts[date] = dayData;
//     });

//     return Object.values(dailyForecasts);
//   };

//   if (loading) {
//     return <Text>Loading...</Text>;
//   }

//   if (error) {
//     return <Text>Error: {error.message}</Text>;
//   }

//   // Check if weeklyWeatherData is defined before mapping over it
//   if (!weeklyWeatherData || weeklyWeatherData.length === 0) {
//     return <Text>No weather data available.</Text>;
//   }

//   function kelvinToCelsius(kelvin) {
//     return (kelvin - 273.15).toFixed(0); // Fix decimal places as needed
//   }

//   const imageMappings = {
//     'Clear': 'sunny',
//     'Clouds': 'cloud',
//     'Rain': 'moderate_rain',
//     // Add more mappings as needed for other weather conditions
//   };
  
//   return (
//     <ScrollView contentContainerStyle={styles.scrollViewContent}>
//       {weeklyWeatherData.map((dayData, index) => {
//         // Extract the weather condition description from the first forecast of the day
//         const weatherDescription = dayData[0].weather[0].main;
  
//         // Get the corresponding image key from the mapping or use 'sunny' as default
//         const imageKey = imageMappings[weatherDescription] || 'sunny';
  
//         return (
//           <View key={index} style={styles.itemContainer}>
//             <Image source={images[imageKey]} style={styles.itemImage} />
//             <Text style={styles.dayText}>{dayData[0].dt_txt.split(' ')[0]}</Text>
//             <Text style={styles.temperatureText}> {kelvinToCelsius(dayData[0].main.temp)} °C</Text>
//           </View>
//         );
//       })}
//     </ScrollView>
//   );
// };
//   export default WeeklyCast;

  //const imageKey = imageMappings[item?.weather[0]?.main.toLowerCase()] || 'default';

  // return (
  //   <ScrollView
  //     contentContainerStyle={styles.scrollViewContent}>
  //     {weeklyWeatherData.map((dayData, index) => (
  //       <View key={index} style={styles.itemContainer}>
  //         <Image source={images.sunny} style={styles.itemImage}/>
  //         {/* <Text style={styles.dayText}>{dayData[0].dt_txt}</Text> */}
  //         <Text style={styles.dayText}>{dayData[0].dt_txt.split(' ')[0]}</Text>
  //         <Text style={styles.temperatureText}> {kelvinToCelsius(dayData[0].main.temp)} °C</Text>
  //       </View>
  //     ))}
  //   </ScrollView>
  // );

