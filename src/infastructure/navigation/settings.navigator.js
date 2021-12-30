import React, { useEffect } from 'react';

import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/facourites.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({route, navigator}) => {
    return (
        <SettingsStack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerMode: 'screen'

            }}
        >
            <SettingsStack.Screen
                options={{
                    header: () => null,
                }}
                name="Settings"
                component={SettingsScreen}
            />
            <SettingsStack.Screen
                options={{
                }}
                name="Favourites"
                component={FavouritesScreen}
            />
        </SettingsStack.Navigator>
    )
}
