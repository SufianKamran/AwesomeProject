//SearchBar.js
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const handleCityChange = (newCity) => {
    setSearchText(newCity);
  };

  const handleSubmit = () => {
    // You can perform validation on 'searchText' here if needed
    navigation.navigate('Home', { city: searchText });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search City..."
          onChangeText={handleCityChange}
          value={searchText}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default SearchBar;



// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';
// import styles from './style';
// //import { Icon } from 'react-native-vector-icons/Icon'; // You can choose any icon library you prefer
// import { connect } from 'react-redux';
// import { setSearchText } from '../../Redux/Actions/WeatherAction';

// const SearchBar = () => {
//   const [searchText, setSearchText] = useState('');

//   return (
//     // const SearchBar = ({ searchText, setSearchText }) => {
//     //     return (
//     <View style={styles.container}>
//       <View style={styles.searchContainer}>
//         {/* <Icon name="search" size={20} color="gray" style={styles.searchIcon} /> */}
//         <TextInput
//           style={styles.input}
//           placeholder="Search City..."
//           onChangeText={(text) => setSearchText(text)}
//           value={searchText}
//         />
//       </View>
//     </View>
//   );
// };
// // const mapStateToProps = (state) => ({
// //     searchText: state.searchText,
// //   });
  
// //   const mapDispatchToProps = {
// //     setSearchText,
// //   };
  
//   // export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
// export default SearchBar;


// const mapStateToProps = (state) => ({
//     searchText: state.searchText,
//   });
  
//   const mapDispatchToProps = {
//     setSearchText,
//   };
  
  // export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
// export default SearchBar;

// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, Button } from 'react-native';
// import { connect } from 'react-redux';
// import { setSearchText } from '../../Redux/Actions/WeatherAction';
// import styles from './style';

// const SearchBar = ({ setCity }) => {
//   const [searchText, setSearchText] = useState('');

//   const handleSearch = () => {
//     setCity(searchText);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Search City..."
//           onChangeText={(text) => setSearchText(text)}
//           value={searchText}
//         />
//         <Button title="Search" onPress={handleSearch} />
//       </View>
//     </View>
//   );
// };

// export default SearchBar;

// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';
// import styles from './style';
// //import { Icon } from 'react-native-vector-icons/Icon'; // You can choose any icon library you prefer
// import { connect } from 'react-redux';
// import { setSearchText } from '../../Redux/Actions/WeatherAction';

// const SearchBar = () => {
//   const [searchText, setSearchText] = useState('');

//   return (
//     // const SearchBar = ({ searchText, setSearchText }) => {
//     //     return (
//     <View style={styles.container}>
//       <View style={styles.searchContainer}>
//         {/* <Icon name="search" size={20} color="gray" style={styles.searchIcon} /> */}
//         <TextInput
//           style={styles.input}
//           placeholder="Search City..."
//           onChangeText={(text) => setSearchText(text)}
//           value={searchText}
//         />
//       </View>
//     </View>
//   );
// };
// export default SearchBar;

// const mapStateToProps = (state) => ({
//     searchText: state.searchText,
//   });
  
//   const mapDispatchToProps = {
//     setSearchText,
//   };
  
  // export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
// export default SearchBar;

// import React, { useState } from 'react';
// import { View, TextInput, Button } from 'react-native';
// import styles from './style';

// const SearchBar = ({ onCityChange, city }) => {
//   const [text, setText] = useState('');

//   const handleCityChange = () => {
//     onCityChange(text);
//   };

//   return (
//     <View style={styles.inputContainer}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter city"
//         onChangeText={(text) => setText(text)}
//         value={text}
//       />
//       <Button title="Submit" onPress={handleCityChange} />
//     </View>
//   );
// };

// export default SearchBar;

