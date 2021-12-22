import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from './src/infastructure/theme';
import { SafeArea } from './src/components/utilities/safe-area.component';
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "map",
    Settings: "settings"
}

const createScreenOptions = ({route}) => {
    const iconName = TAB_ICON[route.name]
    return {
        tabBarIcon: ({size, color}) => <Ionicons name={iconName} size={size} color={color}/>,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
            {
                "display": "flex"
            },
            null
        ]
    }
}

const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>
const Map = () => <SafeArea><Text>Map</Text></SafeArea>

export default function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <LocationContextProvider>
                    <RestaurantsContextProvider>
                        <NavigationContainer>
                            <Tab.Navigator
                                screenOptions={createScreenOptions}
                            >
                                <Tab.Screen name="Restaurants" component={RestaurantsScreen}/>
                                <Tab.Screen name="Map" component={Map}/>
                                <Tab.Screen name="Settings" component={Settings}/>
                            </Tab.Navigator>
                        </NavigationContainer>
                    </RestaurantsContextProvider>
                </LocationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>
    );
}
