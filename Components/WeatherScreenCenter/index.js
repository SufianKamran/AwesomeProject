import React,{useState} from 'react'
import { View,Text, Image } from 'react-native'
import styles from './Fetches/style';
import Fetches from './Fetches';

export default function WeatherScreenCenter(weatherData) {
  const [city, setCity] = useState('Paris'); // Initial city
  return (
    <View style={styles.container}>
       <Fetches city={city}/>      
    </View>
  );
}
