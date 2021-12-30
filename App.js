import React, { useState, useEffect } from 'react';

import firebase from "firebase/compat";
import { initializeApp } from "firebase/app";

import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Navigation } from "./src/infastructure/navigation";

import { theme } from './src/infastructure/theme';
import { ThemeProvider } from 'styled-components/native';

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

export default function App() {

    const firebaseConfig = {
        apiKey: "AIzaSyBYPKO57wteCfpv2-yT8U83XpV__0f_rNc",
        authDomain: "mealstogo-d5555.firebaseapp.com",
        projectId: "mealstogo-d5555",
        storageBucket: "mealstogo-d5555.appspot.com",
        messagingSenderId: "530975832336",
        appId: "1:530975832336:web:7712d2f8173c75c802cd95"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <AuthenticationContextProvider>
                    <Navigation/>
                </AuthenticationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>
    );
}
