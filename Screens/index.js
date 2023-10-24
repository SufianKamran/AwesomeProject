//Weather.js

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, TextInput } from 'react-native';
import WeatherScreenTop from '../Components/WeatherScreenTop';
import { connect } from 'react-redux';
import { fetchWeatherRequest } from '../Redux/Actions/WeatherAction';
import styles from './style';
import WeatherScreenCenter from '../Components/WeatherScreenCenter';
import WeatherScreenBottom from '../Components/WeatherScreenBottom';

const Weather = ({ city, fetchWeatherRequest }) => {

  return (
    <View>
      <ScrollView>
        <WeatherScreenTop city={city} />
        <WeatherScreenCenter city={city}/>
        <WeatherScreenBottom city={city} />
      </ScrollView>
    </View>
  );
};

export default connect(null, { fetchWeatherRequest })(Weather);


// import React, { useState } from 'react';
// import { Text, View, StyleSheet, Dimensions, ActivityIndicator, ScrollView, Button, TextInput } from 'react-native';
// import WeatherScreenTop from '../Components/WeatherScreenTop';
// import { connect } from 'react-redux';
// import { fetchWeatherRequest } from '../Redux/Actions/WeatherAction';
// import styles from './style';

// const Weather = ({ fetchWeatherRequest }) => {
//   const [city, setCity] = useState('Paris');
//   const [inputCity, setInputCity] = useState('');

//   const handleCityChange = (newCity) => {
//     setInputCity(newCity);
//   };

//   const fetchWeatherForInputCity = () => {
//     if (inputCity) {
//       fetchWeatherRequest(inputCity);
//       setCity(inputCity);
//       setInputCity('');
//     }
//   };

//   return (
//     <View>
//       <ScrollView>
//         <View style={styles.cityInputContainer}>
//           <TextInput
//             style={styles.cityInput}
//             placeholder="Enter City"
//             value={inputCity}
//             onChangeText={handleCityChange}
//           />
//           <Button
//             title="Get Weather"
//             onPress={fetchWeatherForInputCity}
//           />
//         </View>
//         <WeatherScreenTop city={city} />
//       </ScrollView>
//     </View>
//   );
// };

// export default connect(null, { fetchWeatherRequest })(Weather);



// import { useEffect, useState } from 'react';
// import { Text, View,StyleSheet, Dimensions, ActivityIndicator, Image, ScrollView, FlatList, Button} from "react-native";
// import WeatherScreenTop from '../Components/WeatherScreenTop';
// import WeatherScreenCenter from  '../Components/WeatherScreenCenter';
// import WeatherScreenBottom from  '../Components/WeatherScreenBottom';

//  const Weather = () => {

//     return (      
//         <View>
//             <ScrollView>
//             <WeatherScreenTop />
//             <WeatherScreenCenter />
//             <WeatherScreenBottom/>     
//             </ScrollView>   
//         </View>
//       );
// }
// export default Weather;

// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet, ActivityIndicator } from 'react-native';
// import WeatherScreenTop from '../Components/WeatherScreenTop';

// const WeatherDisplay = () => {
//   const [city, setCity] = useState('');
  
//   return (
//     <View>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter city"
//         onChangeText={(text) => setCity(text)}
//         value={city}
//       />
//       <Button
//         title="Submit"
//         onPress={() => setCity(city)}
//       />
//       <WeatherScreenTop city={city} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     padding: 15,
//     marginTop: 30,
//     color: 'black',
//   },
// });

// export default WeatherDisplay;


// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet, ActivityIndicator } from 'react-native';
// import WeatherScreenTop from '../Components/WeatherScreenTop';
// import { fetchWeatherData } from '../Components/API';

// const WeatherDisplay = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleCityChange = async () => {
//     setLoading(true);
//     try {
//       const data = await fetchWeatherData(city);
//       setWeatherData(data);
//       setError(null);
//     } catch (error) {
//       setWeatherData(null);
//       setError('Error fetching weather data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter city"
//         onChangeText={(text) => setCity(text)}
//         value={city}
//       />
//       <Button
//         title="Submit"
//         onPress={handleCityChange}
//       />
//       {loading && <ActivityIndicator size="large" />}
//       {error && <Text style={styles.errorText}>{error}</Text>}
//       {weatherData && <WeatherScreenTop city={city} weatherData={weatherData} />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     padding: 15,
//     marginTop: 30,
//     color: 'black',
//   },
//   errorText: {
//     color: 'red',
//   },
// });

// export default WeatherDisplay;



// Weather.js

// import React, { useState } from 'react';
// import { View, Text, Button, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
// import WeatherScreenTop from '../Components/WeatherScreenTop';
// import { fetchWeatherData } from '../Components/API';

// export default function Weather() {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleCityChange = async () => {
//     setLoading(true);
//     try {
//       const data = await fetchWeatherData(city);
//       setWeatherData(data);
//       setError(null);
//     } catch (error) {
//       setWeatherData(null);
//       setError('Error fetching weather data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter city"
//         onChangeText={(text) => setCity(text)}
//         value={city}
//       />
//       <Button
//         title="Submit"
//         onPress={handleCityChange}
//       />
//       {loading && <ActivityIndicator size="large" />}
//       {error && <Text style={styles.errorText}>{error}</Text>}
//       {weatherData && <WeatherScreenTop city={city} weatherData={weatherData} />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   input: {
//     // Add your input styles here
//     padding: 15,
//     marginTop:30,
//     color:'black',
//   },
//   errorText: {
//     // Add your error text styles here
//   },
// });


// import { useEffect, useState } from 'react';
// import { Text, View,StyleSheet, Dimensions, ActivityIndicator, Image, ScrollView, FlatList, Button} from "react-native";
// import WeatherScreenTop from '../Components/WeatherScreenTop';
// import WeatherScreenCenter from  '../Components/WeatherScreenCenter';
// import WeatherScreenBottom from  '../Components/WeatherScreenBottom';

//  const Weather = () => {

//     return (      
//         <View>
//             <ScrollView>
//             <WeatherScreenTop />    
//             </ScrollView>   
//         </View>
//       );
// }
// export default Weather;

{/* <WeatherScreenCenter />
<WeatherScreenBottom/>  */}
