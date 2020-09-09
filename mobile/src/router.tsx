import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginPage from './pages/login'

const Stack = createStackNavigator()

export default function Router(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='' component={LoginPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}