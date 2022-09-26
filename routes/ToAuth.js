// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../Screens_Auth/SignIn';
import SignUp from '../Screens_Auth/SignUp';
import ResetPass from '../Screens_Auth/ResetPass';


const Stack = createNativeStackNavigator();

const ToAuth = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false, animation: 'slide_from_left' }} />
                <Stack.Screen name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false, animation: 'slide_from_right' }} />
                <Stack.Screen name="ResetPass"
                    component={ResetPass}
                    options={{ headerShown: false, animation: 'slide_from_right' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ToAuth;