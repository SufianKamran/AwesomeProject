import { useEffect, useState } from 'react';
import { Text, View,StyleSheet, Dimensions, ActivityIndicator, Image, ScrollView, FlatList, Button} from "react-native";
import WeatherScreenTop from '../Components/WeatherScreenTop';
import WeatherScreenCenter from  '../Components/WeatherScreenCenter';
import WeatherScreenBottom from  '../Components/WeatherScreenBottom';

 const Weather = () => {

    return (      
        <View>
            <ScrollView>
            <WeatherScreenTop />
            <WeatherScreenCenter />
            <WeatherScreenBottom/>     
            </ScrollView>   
        </View>
      );
}

 
export default Weather;


