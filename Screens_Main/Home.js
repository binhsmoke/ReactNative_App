import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import '../firebase/config'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Category from '../Screens_Home/Category'
import Food from '../Screens_Home/Food'
import Detail from '../Screens_Home/Detail'

const Home = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
            <Stack.Screen name="Food" component={Food} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Home
