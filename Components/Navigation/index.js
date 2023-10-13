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
      <Weather />
    </View>
  );
}

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
// import React, { useState, useEffect} from 'react'
// import { StyleSheet, View, Text, Button, TextInput} from "react-native";
// import Weather from "../../Screens";
// import styles from './style';



// export default function StackNavigation() {
//   const Stack = createNativeStackNavigator();
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Search" component={Login} />
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// }

// const Login = ({ navigation }) => {
//     const [searchText, setSearchText] = useState('');
//   return (
//     <View style={styles.container}>
//             <View style={styles.searchContainer}>
//         {/* <Icon name="search" size={20} color="gray" style={styles.searchIcon} /> */}
//         <TextInput
//           style={styles.input}
//         //   placeholder="Enter city"
//         //   value={city}
//         //   onChangeText={(text) => setCity(text)}
//         // />
//           placeholder="Search City..." 
//            onChangeText={(text) => setSearchText(text)}
//            value={searchText}
//          />
//       </View>
//       {/* <TextInput style={{ height:30, paddingLeft:6, }} placeholder='Search City'/> */}
//       <Button style={styles.button} title='Enter' onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

// const Home = ({ navigation }) => {
//   return (
//     <View>
//             <Button
//         title="Settings"
//         onPress={() => navigation.navigate('Settings')}
//       />
//       {/* <Weather /> */}
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
// };

// const Settings = () => {
//   return(
// <View>

// </View>
//   );
// }

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import React from 'react'
// import { StyleSheet, View, Text, Button, TextInput } from "react-native";
// import Weather from "../../Screens";
// import SearchBar from '../SearchBar';
// import styles from './style';


// export default function StackNavigation() {
//   const Stack = createNativeStackNavigator();
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Search" component={Login} />
//       <Stack.Screen name="Home" component={Home} />
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
//       {/* <Weather /> */}
//       <Weather />
//     </View>
//   );
// }

