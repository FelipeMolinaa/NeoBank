import { StatusBar } from 'expo-status-bar';
import Router from './src/router'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

export default function App() {
    return (
        <>
            <SafeAreaView>
                <View>
                    <StatusBar style="auto" />
                    <Router/>  
                </View>
            </SafeAreaView>
        </>
    );
}
