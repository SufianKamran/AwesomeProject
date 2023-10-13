// import { useEffect, useState } from 'react';
// import { Text, View,StyleSheet, Dimensions, ActivityIndicator, Image} from "react-native";
// import { Ionicons } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import { Fontisto } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// import {partly_cloudy } from  "../assets/indx";
// import styles from './Styles';

// const API_Key = "1c3b611c2ee99ff1089c8beb0957b076";

// const Weather = (props) => {
// //reducer saga contextap
//     const [ weatherData, setWeatherData ] = useState(null);
//     const [ loading, setLoading ] = useState(false);
//     const [ icon, setIcon ] = useState('');
//  //   const [ background, setBackground ] = useState('');

// async function getWeatherData(cityName){
//     setLoading(true)
//     const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}`;
//     let res = await fetch(API);
//     if(res.status == 200){
//         res = await res.json();
//         setWeatherData(res);
//     }
//     else {
//         setWeatherData(null);
//     }
//     setLoading(false)

// }

// useEffect(() => {
//  getWeatherData(props.cityName);

//  const iconObj = {
//     snow: <Ionicons name="snow" size={28} color="black" />,
//     clear:<Feather name="sun" size={28} color="black" />,
//     rain: <Ionicons name="rainy" size={28} color="black" />,
//     haze: <Fontisto name="day-haze" size={28} color="black" />,
//     cloud: <Entypo name="cloud" size={28} color="black" />,
//     partlycloudy:<Ionicons name="partly-sunny" size={28} color="black" />
//  }
//      if (weatherData != null){

//       /*  const now = new Date();
//         const sunrise = new Date(weatherData.sys.sunrise * 1000);
//         const sunset = new Date(weatherData.sys.sunset * 1000);
//         const isDaytime = now > sunrise && now < sunset;*/

//         switch (weatherData.weather[0].main){
//             case 'Clouds':
//                 setIcon(iconObj.cloud);
//               //  isDaytime ? setBackground(cloud_day) : setBackground(cloud_night);
//                 break;
//             case 'Snow':
//                 setIcon(iconObj.snow);
//               //  isDaytime ? setBackground(cloud_day) : setBackground(cloud_night);
//                 break;
//             case 'Clear':
//                 setIcon(iconObj.clear);
//              //   isDaytime ? setBackground(clear_day) : setBackground(clear_night);
//                 break;
//             case 'Rain':
//                 setIcon(iconObj.rain);
//             //    isDaytime ? setBackground(rain_day) : setBackground(rain_night);
//                 break;
//             case 'Haze':
//                 setIcon(iconObj.haze);
//              //   isDaytime ? setBackground(haze_day) : setBackground(haze_night);
//                 break;
//             case 'Partlycloudy':
//                 setIcon(iconObj.haze);
//              //   isDaytime ? setBackground(partlycloudy_day) : setBackground(partlycloudy_night);    
//             default:
//                 setIcon(iconObj.haze);
//              //   isDaytime ? setBackground(haze_day) : setBackground(haze_night);
//         }
//        // props.background(background)
//      //console.log(weatherData);
//  }
// }, [props.cityName])

// if (loading){
//     return(
// <ActivityIndicator size='large' />
//     );
// }
// else if (weatherData == null){
//     return(
//         <Text style= {{marginTop:20, fontWeight:'bold', fontSize:16}}>Enter City Name</Text>
//     );
// }
// else{

//     return (
        
//         <View >
        
//            <Image source={partly_cloudy} style={styles.img}/>
//            <Text style={styles.deg}>{  weatherData.main.temp }°</Text>
//            <Text style={styles.cityName}>{weatherData.name}</Text>
//            <View style={styles.icon}>
//             <View style={styles.temp}>
//                 <Text style={{ color: 'white', fontSize:18 }}>Humidity: {weatherData.main.humidity}</Text>
//                 <Text style={{ color: 'white', fontSize:18 }}>Wind: {weatherData.wind.deg}</Text>
//                 <Text style={{ color: 'white', fontSize:18 }}>Feels Like: {weatherData.main.feels_like}</Text>
//             </View>
//             <Text>{icon}</Text>
//            </View>
//         </View>
//       );
// }
// }
 
// export default Weather;


