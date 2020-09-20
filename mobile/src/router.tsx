import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginPage from './pages/login'
import CadastroPage from './pages/cadastro'
import HomePage from './pages/Home'
import DetalhesContaPage from './pages/DetalhesConta'

const Stack = createStackNavigator()

export default function Router(){
    return (
            <NavigationContainer>
                <Stack.Navigator 
                    headerMode='none'
                    screenOptions={{
                        cardStyle:{backgroundColor: '#6577fc'}
                    }}
                    initialRouteName='LoginPage'>
                    <Stack.Screen name='LoginPage' component={LoginPage}/>
                    <Stack.Screen name='CadastroPage' component={CadastroPage}/>
                    <Stack.Screen name='HomePage' component={HomePage}/>
                    <Stack.Screen name='DetalhesContaPage' component={DetalhesContaPage}/>
                </Stack.Navigator>
            </NavigationContainer>
    )
}