import React, { useState, useEffect } from 'react';
import { View,Text } from 'react-native'
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import DailyCast from '../DailyCast.js/Index';
import WeeklyCast from '../WeeklyCast.js';
import axios from 'axios';

const API_KEY = '1c3b611c2ee99ff1089c8beb0957b076' ;

export default function WeatherScreenBottom() {

  const [hourlyForecast, setHourlyForecast] = useState([]);

  useEffect(() => {
    // Function to fetch hourly forecast data
    const fetchHourlyForecast = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=Lahore&appid=${API_KEY}`
        );
        if (response.status === 200) {
          const data = response.data.list;
          setHourlyForecast(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchHourlyForecast function
    fetchHourlyForecast();
  }, []);

    return (
      <>
        <View style={styles.container}>
        <View style={styles.hour}>
          <Icon name="calendar" size={18} color="black" />
          <Text style={styles.text}> Hourly forecast</Text>
        </View>
       <DailyCast hourlyForecast={hourlyForecast}/>
       
       <View style={styles.week}>
       <Icon name="calendar" size={18} color="black" />
          <Text style={styles.text}> Weekly forecast</Text>
       </View>
       <WeeklyCast/>
      </View>
      </>
    );
  }
  
