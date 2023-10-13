import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './style';
//import { Icon } from 'react-native-vector-icons/Icon'; // You can choose any icon library you prefer
import { connect } from 'react-redux';
import { setSearchText } from '../../Redux/Actions/WeatherAction';

// const SearchBar = () => {
//   const [searchText, setSearchText] = useState('');

//   return (
    const SearchBar = ({ searchText, setSearchText }) => {
        return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        {/* <Icon name="search" size={20} color="gray" style={styles.searchIcon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Search City..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({
    searchText: state.searchText,
  });
  
  const mapDispatchToProps = {
    setSearchText,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
// export default SearchBar;