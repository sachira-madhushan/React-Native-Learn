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
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard
} from 'react-native';

function Login() {
    return (
        <View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={style.container}>
                <TouchableWithoutFeedback>
                    <View style={style.inner}>
                        <Text style={style.header}>Login</Text>
                        <TextInput placeholder="Username" style={style.textInput} />
                        <TextInput placeholder="Password" style={style.textInput} />
                        <View style={style.btnContainer}>
                            <Button title="Submit" onPress={() => null} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    );
}

const showToast = () => {
    ToastAndroid.showWithGravity(
        "Button Click",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
    );
}
const showAlert = () => {
    Alert.alert("Success", "Do you agree?", [
        {
            text: "Ok",
            onPress: () => { },
        },
        {
            text: "Cansel",
            onPress: () => { }
        }
    ]
    )
}
const style = StyleSheet.create({
    container: {
        marginTop: 200,
    },
    inner: {
        padding: 24,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
})

export default Login;
