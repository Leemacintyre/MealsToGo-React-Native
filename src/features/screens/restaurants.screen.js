import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { RestaurantInfoCard } from '../restaurants/components/restaurant-info-card.component';
import { Spacer } from "../../components/spacer/spacer.component";
import { SafeArea } from "../../components/utilities/safe-area.component";
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from "../restaurants/components/search.component";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { FavouritesBar } from "../../components/favourite/favourites-bar.component";


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

export const RestaurantsScreen = ({navigation}) => {
    const {isLoading, error, restaurants} = useContext(RestaurantsContext);
    const {favourites} = useContext(FavouritesContext)

    const [isToggled, setIsToggled] = useState(false)

    return (
        <>
            <SafeArea>
                {
                    isLoading &&
                    <LoadingContainer>
                        <ActivityIndicator
                            animating={true}
                            color={Colors.limeA700}
                            size={100}
                            style={{marginLeft: -50, marginTop: -50}}/>
                    </LoadingContainer>
                }
                <Search
                    isFavouritesToggled={isToggled}
                    onFavouritesToggle={() => setIsToggled(!isToggled)}
                />
                {
                    isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate}/>
                }
                <RestaurantList
                    data={restaurants}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('RestaurantDetail', {
                                    restaurant: item
                                })}>
                                <Spacer position="bottom" size="large">
                                    <RestaurantInfoCard restaurant={item}/>
                                </Spacer>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item) => item.name}
                />
            </SafeArea>
        </>
    );
};

