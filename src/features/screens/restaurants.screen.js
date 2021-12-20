import React from 'react';
import styled from 'styled-components';
import { SafeAreaView, StatusBar, View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../restaurants/components/restaurant-info-card.component';
import { Spacer } from "../../components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    }
})`

`

export const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar/>
            </SearchContainer>
            <RestaurantList
                data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}, {name: 7}, {name: 8}, {name: 9}, {name: 10}, {name: 11}, {name: 12}, {name: 13}, {name: 14}, {name: 15}, {name: 16}]}
                renderItem={() =>
                    <Spacer size={"large"} position={"bottom"}>
                        <RestaurantInfoCard/>
                    </Spacer>
                }
                keyExtractor={(item) => item.name}
                contentContainerStyle={{padding: 16}}
            />
            {/*<RestaurantInfoCard/>*/}
        </SafeArea>
    );
};

