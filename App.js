import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import {RestaurantsScreen} from './src/features/screens/restaurants.screen';
import {theme} from './src/infastructure/theme';
import {ThemeProvider} from 'styled-components/native';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
