
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchWeatherRequest } from '../../Redux/Actions/WeatherAction';
import styles from './style';
import images from '../../assets/indx';

function kelvinToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(0);
}

const WeatherScreenTop = ({ city, weatherData, loading }) => {
  useEffect(() => {
    fetchWeatherRequest(city);
  }, [city]);

  const imageMappings = {
    'Clear': 'sunny',
    'Clouds': 'cloud',
    'Rain': 'moderate_rain',
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  } else if (!weatherData) {
    return <Text style={styles.errorText}>Error fetching weather data</Text>;
  } else {
    const weatherCondition = weatherData.list[0].weather[0].main;
    const imageKey = imageMappings[weatherCondition] || 'sunny';

    return (
      <View style={styles.container}>
        <Text style={styles.myCity}>{city}</Text>
        <Image source={images[imageKey]} style={styles.img} />
        <Text style={styles.temp}>{kelvinToCelsius(weatherData.list[0].main.temp)}°C</Text>
        <Text style={styles.condition}>{weatherData.list[0].weather[0].main}</Text>
      </View>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     weatherData: state.weather.weather[city],
//     loading: state.weather.loading,
//   };
// };
const mapStateToProps = (state, ownProps) => {
  const { city } = ownProps;
  return {
    weatherData: state.weather.weather[city],
    loading: state.weather.loading,
  };
};


export default connect(mapStateToProps, { fetchWeatherRequest })(WeatherScreenTop);


// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
// import images from '../../assets/indx';
// import { fetchWeatherData } from '../API';
// import styles from './style';

// function kelvinToCelsius(kelvin) {
//   return (kelvin - 273.15).toFixed(0);
// }

// const WeatherScreenTop = () => {
//   const [city, setCity] = useState('Paris'); // Initial city
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   async function fetchData(cityName) {
//     setLoading(true);
//     const data = await fetchWeatherData(cityName);
//     setWeatherData(data);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData(city);
//   }, [city]);

//   const imageMappings = {
//     'Clear': 'sunny',
//     'Clouds': 'cloud',
//     'Rain': 'moderate_rain',
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" />;
//   } else if (!weatherData) {
//     return <Text style={styles.errorText}>Error fetching weather data</Text>;
//   } else {
//     const weatherCondition = weatherData.list[0].weather[0].main;
//     const imageKey = imageMappings[weatherCondition] || 'sunny';

//     return (
//       <View style={styles.container}>
//         <Text style={styles.myCity}>{city}</Text>
//         <Image source={images[imageKey]} style={styles.img} />
//         <Text style={styles.temp}>{kelvinToCelsius(weatherData.list[0].main.temp)}°C</Text>
//         <Text style={styles.condition}>{weatherData.list[0].weather[0].main}</Text>
//       </View>
//     );
//   }
// };

// export default WeatherScreenTop;


// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
// import images from '../../assets/indx';
// import { fetchWeatherData } from '../API';
// import styles from './style';

// function kelvinToCelsius(kelvin) {
//   return (kelvin - 273.15).toFixed(0);
// }

// const WeatherScreenTop = ({city}) => {
//   // const [city, setCity] = useState('Paris'); // Initial city
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   async function fetchData(cityName) {
//     setLoading(true);
//     const data = await fetchWeatherData(cityName);
//     setWeatherData(data);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData(city);
//   }, [city]);

//   const imageMappings = {
//     'Clear': 'sunny',
//     'Clouds': 'cloud',
//     'Rain': 'moderate_rain',
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" />;
//   } else if (!weatherData) {
//     return <Text style={styles.errorText}>Error fetching weather data</Text>;
//   } else {
//     const weatherCondition = weatherData.list[0].weather[0].main;
//     const imageKey = imageMappings[weatherCondition] || 'sunny';

//     return (
//       <View style={styles.container}>
//         <Text style={styles.myCity}>{city}</Text>
//         <Image source={images[imageKey]} style={styles.img} />
//         <Text style={styles.temp}>{kelvinToCelsius(weatherData.list[0].main.temp)}°C</Text>
//         <Text style={styles.condition}>{weatherData.list[0].weather[0].main}</Text>
//       </View>
//     );
//   }
// };

// export default WeatherScreenTop;


 //WeatherScreenTop.js
// import React, { useEffect, useState } from 'react';
// import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
// import { fetchWeatherData } from '../API';
// import images from '../../assets/indx';
// import styles from './style';

// function kelvinToCelsius(kelvin) {
//   return (kelvin - 273.15).toFixed(0);
// }

// const WeatherScreenTop = ({ city }) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const imageMappings = {
//     'Clear': 'sunny',
//     'Clouds': 'cloud',
//     'Rain': 'moderate_rain',
//   };

//   async function fetchData(cityName) {
//     setLoading(true);
//     try {
//       const data = await fetchWeatherData(cityName);
//       setWeatherData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchData(city);
//   }, [city]);

//   if (loading) {
//     return <ActivityIndicator size="large" />;
//   } else if (!weatherData) {
//     return <Text style={styles.errorText}>Error fetching weather data</Text>;
//   }

//   // Assuming that the temperature and description can be accessed as follows:
//   const temperature = kelvinToCelsius(weatherData.list[0].main.temp);
//   const description = weatherData.list[0].weather[0].description;
//   const cityName = weatherData.city.name;

//   const weatherCondition = weatherData.list[0].weather[0].main;
//   const imageKey = imageMappings[weatherCondition] || 'sunny';

//   return (
//     <View style={styles.container}>
//       <Text style={styles.myCity}>City: {cityName}</Text>
//       <Image source={images[imageKey]} style={styles.img} />
//       <Text style={styles.temp}>Temperature: {temperature}°C</Text>
//       <Text style={styles.condition}>Description: {description}</Text>
//     </View>
//   );
// };

// export default WeatherScreenTop;



// import React, { useEffect, useState } from 'react';
// import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
// import images from '../../assets/indx';
// import { fetchWeatherData } from '../API';
// import styles from './style';

// function kelvinToCelsius(kelvin) {
//   return (kelvin - 273.15).toFixed(0);
// }

// const WeatherScreenTop = ({ city }) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const imageMappings = {
//     'Clear': 'sunny',
//     'Clouds': 'cloud',
//     'Rain': 'moderate_rain',
//   };

//   async function fetchData(cityName) {
//     setLoading(true);
//     try {
//       const data = await fetchWeatherData(cityName);
//       setWeatherData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchData(city);
//   }, [city]);

//   if (loading) {
//     return <ActivityIndicator size="large" />;
//   } else if (!weatherData) {
//     return <Text style={styles.errorText}>Error fetching weather data</Text>;
//   }

//   const weatherCondition = weatherData.list[0].weather[0].main;
//   const imageKey = imageMappings[weatherCondition] || 'sunny';

//   return (
//     <View style={styles.container}>
//       <Text style={styles.myCity}>{city}</Text>
//       <Image source={images[imageKey]} style={styles.img} />
//       <Text style={styles.temp}>{kelvinToCelsius(weatherData.list[0].main.temp)}°C</Text>
//       <Text style={styles.condition}>{weatherData.list[0].weather[0].main}</Text>
//     </View>
//   );
// };

// export default WeatherScreenTop;


// import React, { useEffect, useState } from 'react';
// import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
// import images from '../../assets/indx';
// import { fetchWeatherData } from '../API';
// import styles from './style';

// function kelvinToCelsius(kelvin) {
//   return (kelvin - 273.15).toFixed(0);
// }

// const WeatherScreenTop = ({ city }) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   async function fetchData(cityName) {
//     setLoading(true);
//     try {
//       const data = await fetchWeatherData(cityName);
//       setWeatherData(data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchData(city);
//   }, [city]);

//   const imageMappings = {
//     'Clear': 'sunny',
//     'Clouds': 'cloud',
//     'Rain': 'moderate_rain',
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" />;
//   } else if (!weatherData) {
//     return <Text style={styles.errorText}>Error fetching weather data</Text>;
//   } else {
//     const weatherCondition = weatherData.list[0].weather[0].main;
//     const imageKey = imageMappings[weatherCondition] || 'sunny';

//     return (
//       <View style={styles.container}>
//         <Text style={styles.myCity}>{city}</Text>
//         <Image source={images[imageKey]} style={styles.img} />
//         <Text style={styles.temp}>{kelvinToCelsius(weatherData.list[0].main.temp)}°C</Text>
//         <Text style={styles.condition}>{weatherData.list[0].weather[0].main}</Text>
//       </View>
//     );
//   }
// };

// export default WeatherScreenTop;


// import React, { useEffect, useState } from 'react';
// import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
// import images from '../../assets/indx';
// import { fetchWeatherData } from '../API';
// import styles from './style'; // Import your styles
// import CityInput from '../CityInput/Index';

// function kelvinToCelsius(kelvin) {
//   return (kelvin - 273.15).toFixed(0);
// }

// const WeatherScreenTop = ({ city }) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   async function fetchData(cityName) {
//     setLoading(true);
//     const data = await fetchWeatherData(cityName);
//     setWeatherData(data);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData(city);
//   }, [city]);

//   const imageMappings = {
//     'Clear': 'sunny',
//     'Clouds': 'cloud',
//     'Rain': 'moderate_rain',
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" />;
//   } else if (!weatherData) {
//     return <Text style={styles.errorText}>Error fetching weather data</Text>;
//   } else {
//     const weatherCondition = weatherData.list[0].weather[0].main;
//     const imageKey = imageMappings[weatherCondition] || 'sunny';

//     return (
//       <View style={styles.container}>
//         <Text style={styles.myCity}>{city}</Text>
//         <Image source={images[imageKey]} style={styles.img} />
//         <Text style={styles.temp}>{kelvinToCelsius(weatherData.list[0].main.temp)}°C</Text>
//         <Text style={styles.condition}>{weatherData.list[0].weather[0].main}</Text>
//       </View>
//     );
//   }
// };

// export default WeatherScreenTop;


// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
// import images from '../../assets/indx';
// import { fetchWeatherData } from '../API';
// import styles from './style';

// function kelvinToCelsius(kelvin) {
//   return (kelvin - 273.15).toFixed(0);
// }

// const WeatherScreenTop = () => {
//   const [city, setCity] = useState('Paris'); // Initial city
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   async function fetchData(cityName) {
//     setLoading(true);
//     const data = await fetchWeatherData(cityName);
//     setWeatherData(data);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData(city);
//   }, [city]);

//   const imageMappings = {
//     'Clear': 'sunny',
//     'Clouds': 'cloud',
//     'Rain': 'moderate_rain',
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" />;
//   } else if (!weatherData) {
//     return <Text style={styles.errorText}>Error fetching weather data</Text>;
//   } else {
//     const weatherCondition = weatherData.list[0].weather[0].main;
//     const imageKey = imageMappings[weatherCondition] || 'sunny';

//     return (
//       <View style={styles.container}>
//         <Text style={styles.myCity}>{city}</Text>
//         <Image source={images[imageKey]} style={styles.img} />
//         <Text style={styles.temp}>{kelvinToCelsius(weatherData.list[0].main.temp)}°C</Text>
//         <Text style={styles.condition}>{weatherData.list[0].weather[0].main}</Text>
//       </View>
//     );
//   }
// };

// export default WeatherScreenTop;
