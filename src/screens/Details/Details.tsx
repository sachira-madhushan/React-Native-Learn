import { View } from 'react-native'
import React from 'react';
import { Appbar,Text } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context';
function Details() {
    return (
        <SafeAreaProvider>
            <Appbar.Header>
                <Appbar.Content title="My React App" />
            </Appbar.Header>
        </SafeAreaProvider>

    );
}


export default Details;