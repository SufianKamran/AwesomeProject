
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import images from '../../../assets/indx';
import { fetchWeatherData } from '../../API'; // Adjust the import path as needed
import styles from './style';

const Fetches = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData(cityName) {
    setLoading(true);
    const data = await fetchWeatherData(cityName);
    setWeatherData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData(city); // Fetch weather data based on the passed city prop
  }, [city]);

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



