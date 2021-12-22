import React, { useContext } from 'react';
import styled from 'styled-components';
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../restaurants/components/restaurant-info-card.component';
import { Spacer } from "../../components/spacer/spacer.component";
import { SafeArea } from "../../components/utilities/safe-area.component";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from 'react-native-paper';

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    }
})`
`

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`

export const RestaurantsScreen = () => {
    const {isLoading, error, restaurants} = useContext(RestaurantsContext);
    return (
        <>
            <SafeArea>
                {isLoading &&
                <LoadingContainer>
                    <ActivityIndicator
                        animating={true}
                        color={Colors.limeA700}
                        size={100}
                        style={{marginLeft: -50, marginTop: -50}}/>

                </LoadingContainer>
                }
                <SearchContainer>
                    <Searchbar/>
                </SearchContainer>
                <RestaurantList
                    data={restaurants}
                    renderItem={({item}) => {
                        return (
                            <Spacer position="bottom" size="large">
                                <RestaurantInfoCard restaurant={item}/>
                            </Spacer>
                        );
                    }}
                    keyExtractor={(item) => item.name}
                />
            </SafeArea>
        </>
    );
};

