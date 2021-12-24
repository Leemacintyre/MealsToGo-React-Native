import React from 'react'
import { Text,View } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { RestaurantsScreen } from "../../features/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator
            screenOptions={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
                headerMode: false
            }}
        >
            <RestaurantStack.Screen
                name="Restaurants-stack"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    );
};
