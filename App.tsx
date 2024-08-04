
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  ToastAndroid,
  Alert,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import Details from './src/screens/Details/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
const Stack = createStackNavigator();
function App() {
  
  return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name='login' component={Login} />
      //     <Stack.Screen name='home' component={Home} />
      //     <Stack.Screen name='Details' component={Details} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      <View></View>
    
  );
}

export default App;
