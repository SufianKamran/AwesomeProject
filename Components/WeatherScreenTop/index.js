
import React from 'react';
import { View, Text, Image } from 'react-native'
import styles from './style';
import images from '../../assets/indx';
import Fetch from '../Fetch/Index';

const WeatherScreenTop = ({ weatherData }) => {

  const iconUri = `https://openweathermap.org/img/w/${weatherData?.list[0]?.weather[0]?.icon}.png`;
  //console.log('Icon URI:', iconUri);
  
 return (
        <View style={styles.container}>
          <View>
            <Text style={styles.myCity}>Lahore</Text>
          </View>
          <View>
            <Fetch />
          </View> 

        </View>
      );
    }
    export default WeatherScreenTop;


// import React, { useState, useEffect } from 'react';
// import { View, Text, Image } from 'react-native'
// import styles from './style';
// import images from '../../assets/indx';
// import Fetch from '../../Fetch/Index';
// import { fetchLocations, fetchWeatherForecast } from '../API';
// import { getData, storeData } from '../Utils';

// const WeatherScreenTop = ({ weatherData }) => {
//   const [showSearch, toggleSearch] = useState(false);
//   const [locations, setLocations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [weather, setWeather] = useState({})

//   const handleSearch = search=>{
//     // console.log('value: ',search);
//     if(search && search.length>2)
//       fetchLocations({cityName: search}).then(data=>{
//         // console.log('got locations: ',data);
//         setLocations(data);
//       })
//   }

//   const handleLocation = loc=>{
//     setLoading(true);
//     toggleSearch(false);
//     setLocations([]);
//     fetchWeatherForecast({
//       cityName: loc.name,
//       days: '7'
//     }).then(data=>{
//       setLoading(false);
//       setWeather(data);
//       storeData('city',loc.name);
//     })
//   }

//   useEffect(()=>{
//     fetchMyWeatherData();
//   },[]);


//   const fetchMyWeatherData = async ()=>{
//     let myCity = await getData('city');
//     let cityName = 'Islamabad';
//     if(myCity){
//       cityName = myCity;
//     }
//     fetchWeatherForecast({
//       cityName,
//       days: '7'
//     }).then(data=>{
//       // console.log('got data: ',data.forecast.forecastday);
//       setWeather(data);
//       setLoading(false);
//     })
    
//   }


//   const {location, current} = weather;

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.myCity}>Lahore</Text>
//       </View>
//       <View>
//         <Image source={{uri: 'https:'+current?.condition?.icon}}  style={styles.img} />
//       </View>
//       <View>
//         <Fetch />
//       </View>
//       <View>
//         <Text style={styles.condition}>{current?.list[0].weather[0].description}</Text>
//       </View>
//     </View>
//   );
// }

// export default WeatherScreenTop;

