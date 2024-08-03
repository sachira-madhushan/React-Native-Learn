import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  ToastAndroid,
  Alert,
  View,
  TouchableOpacity
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <Text style={style.text}>Sacheera</Text>
      <Button title='click me'onPress={showToast}></Button>
      <View style={style.view}>
        <Button title='click me'onPress={showAlert}></Button>
      </View>
      <TouchableOpacity style={style.touchable}>
        <Text style={style.text}>Click Here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const showToast=()=>{
  ToastAndroid.showWithGravity(
    "Button Click",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM
  );
}
const showAlert=()=>{
  Alert.alert("Success","Do you agree?",[
    {
      text:"Ok",
      onPress:()=>{},
    },
    {
      text:"Cansel",
      onPress:()=>{}
    }
  ]
  )
}
const style=StyleSheet.create({
  text:{
    color:'white',
    fontSize:20,
    textAlign:'center',
  },
  view:{
    margin:50
  },
  touchable:{
    backgroundColor:'blue',
    padding:10,
    margin:50,
    borderRadius:15,
  }
})

export default App;
