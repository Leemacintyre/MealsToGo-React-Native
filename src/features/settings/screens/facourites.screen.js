import React, { useContext } from "react";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const NoFavouritesArea = styled(SafeArea)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const FavouritesScreen = ({navigation}) => {
    const {favourites} = useContext(FavouritesContext)

    return favourites.length ?
        (
           <SafeArea>
               <RestaurantList
                   data={favourites}
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
        )
        :
        (
            <NoFavouritesArea>
                <Text>No favourites found</Text>
            </NoFavouritesArea>
        )
}
