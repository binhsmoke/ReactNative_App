import { View, Text, StatusBar } from 'react-native'
import React from 'react'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from '../custom/styles';
import Home from '../Screens_Main/Home';
import Profile from '../Screens_Main/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ToMain = () => {
    // const Tab = createMaterialTopTabNavigator();

    const Tab = createBottomTabNavigator();
    return (
        <>
            <StatusBar />
            <NavigationContainer >
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused ? 'bonfire' : 'bonfire-outline';
                            } else if (route.name === 'Profile') {
                                iconName = focused ? 'happy' : 'happy-outline';
                            }
                            return <Ionicons name={iconName} size={30} color={color} />;
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                    })}
                >
                    <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                </Tab.Navigator>

            </NavigationContainer>
        </>
    )
}

export default ToMain