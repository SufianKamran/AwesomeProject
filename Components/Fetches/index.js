
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import images from '../../assets/indx';
import { fetchWeatherData } from '../API'; // Adjust the import path as needed
import styles from './style';

const Fetches = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData(cityName) {
    setLoading(true);
    const data = await fetchWeatherData(cityName);
    setWeatherData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData('Lahore');
  }, []);

  if (loading) {
    return <ActivityIndicator size='large' />;
  } else if (!weatherData) {
    return <Text style={styles.errorText}>Error fetching weather data</Text>;
  } else {
    return (
      <>
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
      </>
    );
  }
};

export default Fetches;



// import React, { useEffect, useState } from 'react';
// import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
// // import { StyleSheet} from 'react-native';
// import images from '../../assets/indx';

// const API_Key = '1c3b611c2ee99ff1089c8beb0957b076';

// const Fetches = () => {
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
//     if(weatherData != null){
//    // console.log(weatherData);
//     }
//   }, []);

//   if(loading){
//     return (
//         <ActivityIndicator size='large' />
//     )
// }
// else {

//   return (
//     <>
//    <View style={styles.myContainer}>
//        <Image source={images.winds}  style={styles.icons}/>
//        <Text> {weatherData?.list[0]?.wind.speed} m/s</Text>
       
       
//        </View>
//        <View style={styles.myContainer}>
//        <Image source={images.drop}  style={styles.icons}/>
//        <Text> {weatherData?.list[0]?.main.humidity}%</Text>
//        </View>

//        <View style={styles.myContainer}>
//        <Image source={images.pressure}  style={styles.icons}/>
//        <Text style={styles.sunrise}>{weatherData?.list[0]?.main.pressure} hPa</Text>
       
//        </View>
       

//   </>
//   );
// }
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 0.4,
//         flexDirection: 'row', // for flex-row
//         justifyContent: 'space-evenly', // for justify-between
//        // marginHorizontal: 16, // for mx-4 (adjust the margin as needed)
        
        
            
//           },
//           myContainer: {
//             flexDirection: 'row', // for flex-row
//             marginHorizontal: 4, // for space-x-2 (adjust the margin as needed)
//             alignItems: 'center', // for items-center
//             borderRadius: 20,
//       borderColor:'#eee',
//       borderWidth:1,
//       backgroundColor:'#00000033',
//       width: 90,
//       height: 70,
//       justifyContent:'space-evenly',
//       marginTop:10,
//           },
//             icons: {
//              // tintColor: 'green',
//               width:20,
//               height:20,
//             },
//             sunrise: {
//               color:'black',
//               fontSize:13,
//             },
// });

// export default Fetches;


