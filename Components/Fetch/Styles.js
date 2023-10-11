 import { StyleSheet, Dimensions} from 'react-native';
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    temp: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'black',
      fontSize: 20, // Adjust the font size as needed
      marginTop:4,
      marginLeft: 10,
    },
    condition: {
      textAlign: 'center',
      //fontWeight: 'bold',
      color: 'gold',
      fontSize: 20, // Adjust the font size as needed to match text-6xl
      marginLeft: 10, // Adjust the margin left as needed to match ml-5
    },
    img:{
      flexDirection:'row',
      justifyContent: 'center',
      height:115,
      width:115,
      marginTop:3,
      marginLeft: 0,
     //backgroundColor:'black'
    },
  });
  export default styles;
