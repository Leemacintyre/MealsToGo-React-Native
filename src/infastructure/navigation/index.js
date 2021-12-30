import React, { useContext } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { SafeArea } from "../../components/utilities/safe-area.component";

export const Navigation = () => {
    const {isAuthenticated} = useContext(AuthenticationContext)
    return (
        <SafeArea>
        <NavigationContainer>
            {
                isAuthenticated ? <AppNavigator/> : <AccountNavigator/>
            }
        </NavigationContainer>

        </SafeArea>

    )
};
