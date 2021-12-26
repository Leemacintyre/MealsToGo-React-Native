import React from 'react'
import styled from 'styled-components/native'

import { ScrollView, View } from "react-native"
import { CompactRestaurantInfo } from "../restaurant/compant-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Text} from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px
`

export const FavouritesBar = ({favourites, onNavigate}) => {
    if(!favourites.length){
        return null
    }
    return (
        <FavouritesWrapper>
            <Spacer position={"left"} size={"large"}>
                <Text varient={"caption"}>Favourites</Text>
            </Spacer>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                {
                    favourites.map((restaurant) => {
                        const key = restaurant.name.split(" ").join("")
                        return (
                            <Spacer key={key} position={"left"} size={"medium"}>
                                <TouchableOpacity onPress={() => onNavigate('RestaurantDetail', {
                                    restaurant
                                })}>
                                    <CompactRestaurantInfo restaurant={restaurant}/>
                                </TouchableOpacity>
                            </Spacer>
                        )
                    })
                }
            </ScrollView>
        </FavouritesWrapper>
    )
}
