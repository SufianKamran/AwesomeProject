import { useEffect, useState } from 'react';
import { Text, View,StyleSheet, Dimensions, ActivityIndicator, Image, ScrollView, FlatList, Button} from "react-native";
// import { Ionicons } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import { Fontisto } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// import {partly_cloudy } from  "../assets/indx";
 import styles from './style';
import WeatherScreenTop from '../Components/WeatherScreenTop';
import WeatherScreenCenter from  '../Components/WeatherScreenCenter';
import WeatherScreenBottom from  '../Components/WeatherScreenBottom';
// import API from  '../Components/WeatherScreenTop';



// const API_Key = "1c3b611c2ee99ff1089c8beb0957b076";

 const Weather = () => {

// //reducer saga contextap
    // const [ weatherData, setWeatherData ] = useState(null);
    // const [ loading, setLoading ] = useState(false);

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
// // getWeatherData(props.cityName);
// getWeatherData('Lahore');
//      if (weatherData != null){
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

// const [ savedName, setSavedName ] = useState('');

// function cityNameHandler(cityName) {
//   setSavedName(cityName);
// }

    return (
        <>
        {/* // <View >
        
        //    <Image source={partly_cloudy} style={styles.img}/>
        //    <Text style={styles.deg}>{  weatherData.main.temp }°</Text>
        //    <Text style={styles.cityName}>{weatherData.name}</Text>
        //    <View style={styles.icon}>
        //     <View style={styles.temp}>
        //         <Text style={{ color: 'white', fontSize:18 }}>Humidity: {weatherData.main.humidity}</Text>
        //         <Text style={{ color: 'white', fontSize:18 }}>Wind: {weatherData.wind.deg}</Text>
        //         <Text style={{ color: 'white', fontSize:18 }}>Feels Like: {weatherData.main.feels_like}</Text>
        //     </View>
        //     <Text>{icon}</Text>
        //    </View>
        // </View> */}
        
        <View>
            <ScrollView>
            <WeatherScreenTop />
            <WeatherScreenCenter />
            <WeatherScreenBottom/>
            </ScrollView>   
        </View>
        </>
      );
}

 
export default Weather;


