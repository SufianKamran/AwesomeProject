import React,{useState} from 'react';
import { View, Text, Image } from 'react-native'
import styles from './style';
import images from '../../assets/indx';
import Fetch from './Fetch/Index';

const WeatherScreenTop = ({ weatherData }) => {
  const [city, setCity] = useState('Paris'); // Initial city
 return (
        <View style={styles.container}>
          <View>
            <Fetch city={city}/>
          </View> 
        </View>
      );
    }
    export default WeatherScreenTop;

