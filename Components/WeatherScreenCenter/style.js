import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
flex: 0.3,
flexDirection: 'row', // for flex-row
justifyContent: 'space-evenly', // for justify-between
marginHorizontal: 16, // for mx-4 (adjust the margin as needed)
//marginTop:100,

    
  },
  myContainer: {
    flexDirection: 'row', // for flex-row
    marginHorizontal: 4, // for space-x-2 (adjust the margin as needed)
    alignItems: 'center', // for items-center
  },
    icons: {
     // tintColor: 'green',
      width:20,
      height:20,
    },
   
});


export default styles;