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
function App() {
  return (
    <SafeAreaView>
      {/* <Home/> */}
      {/* <Login/> */}
      <Details/>
    </SafeAreaView>
  );
}

export default App;
