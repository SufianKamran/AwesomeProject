import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
flex: 0.9,
marginHorizontal: 5,
marginTop:50,
    //alignItems: 'center',
    },
    hour: {
      marginTop:-30,
        flexDirection: 'row',
        //marginLeft:-200,
        alignItems: 'center',
        justifyContent: 'center',
       // marginBottom: 10, // Adjust spacing as needed
      },
      week:{
        marginTop:-34,
        flexDirection: 'row',
        //marginLeft:-200,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: 'black',
        fontSize: 16, // Adjust the font size as needed
        marginBottom:5,
        
      },
});


export default styles;