import { StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        flexDirection: 'row', // for flex-row
        justifyContent: 'space-evenly', // for justify-between
       // marginHorizontal: 16, // for mx-4 (adjust the margin as needed)     
          },
          myContainer: {
            flexDirection: 'row', // for flex-row
            marginHorizontal: 4, // for space-x-2 (adjust the margin as needed)
            alignItems: 'center', // for items-center
            borderRadius: 20,
      borderColor:'#eee',
      borderWidth:1,
      backgroundColor:'#00000033',
      width: 90,
      height: 70,
      justifyContent:'space-evenly',
      marginTop:10,
          },
            icons: {
             // tintColor: 'green',
              width:20,
              height:20,
            },
            sunrise: {
              color:'black',
              fontSize:13,
            },
 });
 export default styles;
