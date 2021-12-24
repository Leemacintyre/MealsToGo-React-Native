import React from 'react';
import styled from 'styled-components/native'
import { CompactRestaurantInfo } from "../../../components/restaurant/compant-restaurant-info.component";


export const MapCallout = ({restaurant}) => {
    return (
        <CompactRestaurantInfo restaurant={restaurant}/>
    )
}
