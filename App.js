
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Components/Navigation';
//import Weather from './Screens';

export default function App() {
  return (
    // <Weather />
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

// import { StyleSheet, View, ImageBackground,Dimensions} from 'react-native';
// import React from 'react';
// import Navigation from './Components/Navigation';
// import Weather from './Screens';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/native-stack';
// import StackNavigation from './Components/Navigation';
// //const Stack =createStackNavigator();
// export default function App() {

//   return (

//     <View>
//       <Weather />
//       <NavigationContainer>
//       <StackNavigation/>
//        {/* <Stack.Screen name='login' /> */}
// </NavigationContainer>
//     </View>
//   );
// }


  
