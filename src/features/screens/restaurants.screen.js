import React from 'react';
import styled from 'styled-components';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import { Searchbar } from 'react-native-paper';
import {RestaurantInfoCard} from '../restaurants/components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfoCard />
            </RestaurantListContainer>
        </SafeArea>
    );
};

