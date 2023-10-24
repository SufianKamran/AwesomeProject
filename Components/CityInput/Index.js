import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './style';

const CityInput = ({ onCityChange, city }) => {
  const [text, setText] = useState('');

  const handleCityChange = () => {
    onCityChange(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={<Text>Enter city</Text>}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Button title="Submit" onPress={handleCityChange} />
    </View>
  );
  
  // return (
  //   <View style={styles.inputContainer}>
  //     <TextInput
  //       style={styles.input}
  //       placeholder="Enter city"
  //       onChangeText={(text) => setText(text)}
  //       value={text}
  //     />
  //     <Button title="Submit" onPress={handleCityChange} />
  //   </View>
  // );
};

export default CityInput;
