import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './style';
//import { Icon } from 'react-native-vector-icons/Icon'; // You can choose any icon library you prefer

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

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

export default SearchBar;
