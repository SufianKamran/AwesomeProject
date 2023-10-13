import { StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
    button:{
        backgroundColor: 'blue', // Background color
        paddingHorizontal: 20, // Horizontal padding
        paddingVertical: 5,   // Vertical padding
        borderRadius: 5,  
      },
          container: {
        padding: 16,
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        paddingLeft: 8,
      },
      input: {
        flex: 0.5,
      },
 });
 export default styles;