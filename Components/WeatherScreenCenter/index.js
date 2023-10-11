import React from 'react'
import { View,Text, Image } from 'react-native'
import styles from './style'
import Fetches from '../Fetches';


export default function WeatherScreenCenter(weatherData) {
  return (
    <View style={styles.container}>
       <Fetches/>      
    </View>
  );
}
