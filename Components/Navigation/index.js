import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import Weather from "../../Screens";
import SearchBar from '../SearchBar';
import styles from './style';


export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
const Login = ({ navigation }) => {
  return (
    <View>
      <SearchBar/>
      {/* <TextInput style={{ height:30, paddingLeft:6, }} placeholder='Search City'/> */}
      <Button style={styles.button} title='Enter' onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
const Home = () => {
  return (
    <View>
      {/* <Weather /> */}
      <Weather />
    </View>
  );
}

