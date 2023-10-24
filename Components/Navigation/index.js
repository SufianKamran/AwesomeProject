//Navigation.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from "react-native";
import Weather from "../../Screens";
import { Feather } from '@expo/vector-icons';
import styles from './style';
import SearchBar from '../SearchBar';

export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Login} />
      <Stack.Screen name="Home" component={Home} options={({ navigation }) => HomeScreenOptions(navigation)} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

const Login = ({ navigation }) => {
  const [city, setCity] = useState(''); // Initialize with an empty string

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <View>
      <SearchBar />
    </View>
  );
}

const Home = ({ route }) => {
  const { city } = route.params;

  return (
    <View>
      <Weather city={city} />
    </View>
  );
}


// const Login = ({ navigation }) => {
//   return (
//     <View>
//       <SearchBar/>
//       {/* <TextInput style={{ height:30, paddingLeft:6, }} placeholder='Search City'/> */}
//       {/* <Button style={styles.button} title='Enter' onPress={() => navigation.navigate('Home')} /> */}
//     </View>
//   );
// }

// const Home = () => {
//   return (
//     <View>
//       <Weather />
//     </View>
//   );
// }

const Settings = () => {
  return (
    <View>
      <Text>This is the Settings page.</Text>
      {/* Add your settings options here */}
    </View>
  );
}

const HomeScreenOptions = (navigation) => ({
  headerRight: () => (
    <Feather
      name="settings"
      size={24}
      color="black"
      onPress={() => navigation.navigate('Settings')}
      style={{ marginRight: 16 }}
    />
  ),
});



// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import React, { useState } from 'react';
// import { View, Text, Button, TextInput } from "react-native";
// import Weather from "../../Screens";
// import { Feather } from '@expo/vector-icons';
// import styles from './style';
// import SearchBar from '../SearchBar';

// export default function StackNavigation() {
//   const Stack = createNativeStackNavigator();
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Search" component={Login} />
//       <Stack.Screen name="Home" component={Home} options={({ navigation }) => HomeScreenOptions(navigation)} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// }

// const Login = ({ navigation }) => {
//   return (
//     <View>
//       <SearchBar/>
//       {/* <TextInput style={{ height:30, paddingLeft:6, }} placeholder='Search City'/> */}
//       <Button style={styles.button} title='Enter' onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

// const Home = () => {
//   return (
//     <View>
//       <Weather />
//     </View>
//   );
// }

// const Settings = () => {
//   return (
//     <View>
//       <Text>This is the Settings page.</Text>
//       {/* Add your settings options here */}
//     </View>
//   );
// }

// const HomeScreenOptions = (navigation) => ({
//   headerRight: () => (
//     <Feather
//       name="settings"
//       size={24}
//       color="black"
//       onPress={() => navigation.navigate('Settings')}
//       style={{ marginRight: 16 }}
//     />
//   ),
// });


// import React, { useState } from 'react';
// import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Weather from "../../Screens";
// import WeatherDisplay from '../../Screens';
// import { Feather } from '@expo/vector-icons';
// import styles from './style';

// export default function StackNavigation() {
//   const Stack = createNativeStackNavigator();
//   const [city, setCity] = useState('');

//   const handleCityChangeAndNavigate = (navigation) => {
//     console.log(`City changed to: ${city}`);
//     //  navigation.navigate('Home');
//     navigation.navigate('Home', { city }); // Pass the city to the Home screen
//   };

//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Search">
//         {({ navigation }) => (
//           <View style={stackStyles.container}>
//             <TextInput
//               style={stackStyles.input}
//               placeholder="Enter city"
//               onChangeText={(text) => setCity(text)}
//               value={city}
//             />
//             <Button
//               title="Submit and Navigate"
//               onPress={() => handleCityChangeAndNavigate(navigation)}
//             />
//           </View>
//         )}
//       </Stack.Screen>
//       <Stack.Screen name="Home" component={Home} options={({ navigation }) => HomeScreenOptions(navigation)} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// }
// const Home = ({city}) => {
//   return (
//     <View>
//       <Weather  city={city}/>
//     </View>
//   );
// }

// const Settings = () => {
//   return (
//     <View>
//       <Text>This is the Settings page.</Text>
//     </View>
//   );
// }

// const HomeScreenOptions = (navigation) => ({
//   headerRight: () => (
//     <Feather
//       name="settings"
//       size={24}
//       color="black"
//       onPress={() => navigation.navigate('Settings')}
//       style={{ marginRight: 16 }}
//     />
//   ),
// });

// const stackStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     padding: 10,
//   },
// });


