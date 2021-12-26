import React, { createContext, useState, useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext()


export const FavouritesContextProvider = ({children}) => {

    const [favourites, setFavourites] = useState([])

    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@favourites', jsonValue)
        } catch (err) {
            console.log('error storing', err)
        }
    }


    const loadFavourites = async () => {
        try {
            const value = await AsyncStorage.getItem('@favourites')
            if (value !== null) {
                setFavourites(JSON.parse(value))
            }
        } catch (err) {
            console.log('error storing', err)
        }
    }

    const add = (restaurants) => {
        setFavourites([...favourites, restaurants])
    }

    const remove = (restaurant) => {
        const newFavorites = favourites.filter((x) => x.placeId !== restaurant.placeId)
        setFavourites(newFavorites)
    }

    useEffect(() => {
        loadFavourites()
    }, [])

    useEffect(() => {
        saveFavourites(favourites)
    }, [favourites])


    return (
        <FavouritesContext.Provider value={{
            favourites: favourites,
            addToFavourites: add,
            removeFromFavourites: remove,
        }}>
            {children}
        </FavouritesContext.Provider>
    )
}
