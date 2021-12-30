import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantsScreen } from "../../features/screens/restaurants.screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeArea } from "../../components/utilities/safe-area.component";
import { Text, Button } from "react-native";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

import { AuthenticationContext } from "../../services/authentication/authentication.context"
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { SettingsNavigator } from "./settings.navigator";

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


export const AppNavigator = () => {

    return (
        <FavouritesContextProvider>
            <LocationContextProvider>
                <RestaurantsContextProvider>
                    <Tab.Navigator
                        screenOptions={createScreenOptions}
                    >
                        <Tab.Screen
                            options={{
                                header: () => null,
                            }}
                            name="Restaurants"
                            component={RestaurantsNavigator}
                        />
                        <Tab.Screen
                            options={{
                                header: () => null,
                            }}
                            name="Map"
                            component={MapScreen}
                        />
                        <Tab.Screen
                            options={{
                                header: () => null,
                            }}
                            name="Settings"
                            component={SettingsNavigator}
                        />
                    </Tab.Navigator>
                </RestaurantsContextProvider>
            </LocationContextProvider>
        </FavouritesContextProvider>
    )
}
