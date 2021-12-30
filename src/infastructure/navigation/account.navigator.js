import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { AccountScreen } from "../../features/accounts/screens/account.screen";
import { LoginScreen } from "../../features/accounts/screens/login.screen";
import { RegisterScreen } from "../../features/accounts/screens/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
                headerMode: false
            }}
        >
            <Stack.Screen name={"Main"} component={AccountScreen}/>
            <Stack.Screen name={"Login"} component={LoginScreen}/>
            <Stack.Screen name={"Register"} component={RegisterScreen}/>
        </Stack.Navigator>
    )
}
