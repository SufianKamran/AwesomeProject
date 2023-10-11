import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    scrollViewContent: {
      //paddingHorizontal: 0,
      //paddingVertical:5, 
      //justifyContent: 'space-evenly'
      marginLeft:10,
      marginTop:2,
    },
    itemContainer: {
      flex: 1,
      flexDirection:'row',
      backgroundColor:'#00000033',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      //width: 96,
      height: 46.5,
      borderRadius: 20,
      borderColor:'#eee',
      borderWidth:2,
      marginRight: 16,
    },
    itemImage: {
      width: 44,
      height: 44,
    },
    dayText: {
      color: 'black',
    },
    temperatureText: {
      color: 'black',
      fontSize: 14,
    },
  });
  
  export default styles;