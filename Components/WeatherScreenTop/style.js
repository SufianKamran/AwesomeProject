import { Dimensions, StyleSheet } from 'react-native';

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
    fontSize: 20,
    marginTop: 4,
    marginLeft: 10,
  },
  condition: {
    textAlign: 'center',
    color: 'gold',
    fontSize: 20,
    marginLeft: 10,
  },
  img: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 115,
    width: 115,
    marginTop: 3,
    marginLeft: 0,
  },
  myCity: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'aqua',
    marginTop: 42,
  },
  input: {
    padding: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingLeft: 8,
    marginTop: 40,
    marginBottom: 4,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default styles;



// import { Dimensions, StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
// flex: 0.4,
// marginTop: 5,
// color: '#ffffff',
// textAlign: 'center',
// fontSize: 24, // Adjust the font size as needed for your design
// fontWeight:'bold',

//   },
//   myCity: {
//     fontSize: 34, // Adjust the font size as needed for your design
//     fontWeight:'bold',
//     color: 'aqua',
//     //marginTop:45,
//     marginLeft: 130,
//   },
// });


// export default styles;
