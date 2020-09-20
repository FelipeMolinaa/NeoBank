import Router from './src/router'
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {Monoton_400Regular, useFonts} from '@expo-google-fonts/monoton'
import {Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import {AppLoading} from 'expo'

export default function App() {

    const [fontLoaded] = useFonts({
        Monoton_400Regular,
        Roboto_400Regular, 
        Roboto_700Bold
    })

    if(!fontLoaded){
        return <AppLoading/>
    }

    return (
        <>
            <SafeAreaView/>
            <StatusBar barStyle='light-content'/>
            <Router/>  
        </>
    );
}
