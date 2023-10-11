import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './style';
import images from '../../assets/indx';

const DailyCast = ({ hourlyForecast }) => {
  // Filter the hourly forecast data for the next 24 hours
  const currentTime = new Date().getTime() / 1000;
  const next24HoursForecast = hourlyForecast.filter(item => item.dt <= currentTime + (24 * 60 * 60));

  const renderHourlyItem = ({ item }) => {
    // Convert the timestamp to a Date object
    const date = new Date(item.dt * 1000);
  
    // Get the hours and minutes in 12-hour format
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
  
    // Determine if it's AM or PM
    const period = date.getHours() < 12 ? 'AM' : 'PM';
  
    // Construct the time string in the desired format
    const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;

    function kelvinToCelsius(kelvin) {
      return (kelvin - 273.15).toFixed(0); // Fix decimal places as needed
    }
  
    const isNight = date.getHours() >= 18 || date.getHours() < 6; // Assuming night is between 6 PM and 6 AM
    const weatherCondition = item?.weather[0]?.main.toLowerCase();

    const imageMappings = {
      'clear': isNight ? 'night' : 'sunny',
    'clouds': isNight ? 'night' : 'cloud',
      'clear': 'sunny',
      'clouds': 'cloud',
      'rain': 'heavy_rain',
      'rainy' : 'moderate_rain',
      'misty' : 'mist',
      'haze' : 'mist',
      'partly cloudy' : 'partly_cloudy',
      'partly cloudy': isNight ? 'night' : 'partly_cloudy',
      'moon' : 'night',
      // Add more mappings as needed
    };
    // Get the corresponding image key or use a default
    // const imageKey = imageMappings[item?.weather[0]?.main.toLowerCase()] || 'default';
    const imageKey = imageMappings[weatherCondition] || 'default';

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.dayText}> {timeString}</Text>
        <Image source={images[imageKey]} style={styles.itemImage} />
        <Text style={styles.temperatureText}>{kelvinToCelsius(item.main.temp)}°C</Text>
        {/* <Text>Weather: {item.weather[0].description}</Text> */}
      </View>
    );
  };
  
  return (
    <View>
      <FlatList     
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
        data={next24HoursForecast}
        keyExtractor={(item) => item.dt.toString()}
        renderItem={renderHourlyItem}
        horizontal={true} // Set this to true for horizontal layout
      />
    </View>  
  );
};

export default DailyCast;



// import React from 'react';
// import { ScrollView, View, Text, Image, FlatList, } from 'react-native';
// import styles from './style';
// import images from '../../assets/indx';

// const DailyCast = ({ hourlyForecast }) => {
//   const renderHourlyItem = ({ item }) => {
//     // Convert the timestamp to a Date object
//     const date = new Date(item.dt * 1000);
  
//     // Get the hours and minutes in 12-hour format
//     const hours = date.getHours() % 12 || 12;
//     const minutes = date.getMinutes();
  
//     // Determine if it's AM or PM
//     const period = date.getHours() < 12 ? 'AM' : 'PM';
  
//     // Construct the time string in the desired format
//     const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;

//     function kelvinToCelsius(kelvin) {
//       return (kelvin - 273.15).toFixed(0); // Fix decimal places as needed
//     }
  
//     return (
//       <View style={styles.itemContainer}>
//         <Text style={styles.dayText}> {timeString}</Text>
//         <Image source={images.partly_cloudy} style={styles.itemImage} />
//         <Text style={styles.temperatureText}>{kelvinToCelsius (item.main.temp)}°C</Text>
//         {/* <Text>Weather: {item.weather[0].description}</Text> */}
//       </View>
//     );
//   };
  
//   return (
//     <>
// <View>
//         <FlatList     
//         contentContainerStyle={styles.scrollViewContent}
//         showsHorizontalScrollIndicator={false}
//   data={hourlyForecast}
//   keyExtractor={(item) => item.dt.toString()}
//   renderItem={renderHourlyItem}
//   horizontal={true} // Set this to true for horizontal layout
// />
//     </View>  
//  </>
//   );
// };

// export default DailyCast; 


