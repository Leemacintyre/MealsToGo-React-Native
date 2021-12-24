import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantsScreen } from "../../features/screens/restaurants.screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeArea } from "../../components/utilities/safe-area.component";
import { Text } from "react-native";

import { RestaurantsNavigator } from "./restaurants.navigator";
import {MapScreen} from "../../features/map/screens/map.screen";

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
    }
}

const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>


export const AppNavigator = () => {

    return (
        <NavigationContainer >
            <Tab.Navigator
                screenOptions={createScreenOptions}
            >
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator}/>
                <Tab.Screen name="Map" component={MapScreen}/>
                <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
