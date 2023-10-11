import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    scrollViewContent: {
      marginTop:10,
      paddingHorizontal: 10,
    },
    itemContainer: {
      flex: 1,
     // flexDirection:'row',
      backgroundColor:'#00000033',
      justifyContent: 'center',
      alignItems: 'center',
      width: 80,
      height:90,
      borderRadius: 20,
      borderColor:'#eee',
      borderWidth:1,
      marginBottom:50,
      //paddingVertical: 12,
     // paddingHorizontal: 4,
      marginRight: 5,
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
      fontSize: 16,
      //fontWeight: '600',
    },
    hour: {
      padding:6,
      alignItems:'center',
    }
  });
  
  export default styles;