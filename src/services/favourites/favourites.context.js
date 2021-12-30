import React, { createContext, useState, useEffect, useContext } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext()


export const FavouritesContextProvider = ({children}) => {

    const {user} = useContext(AuthenticationContext)
    const [favourites, setFavourites] = useState([])

    const saveFavourites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(`@favourites=${uid}`, jsonValue)
        } catch (err) {
            console.log('error storing', err)
        }
    }


    const loadFavourites = async (uid) => {
        try {
            const value = await AsyncStorage.getItem(`@favourites=${uid}`)
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
        if (user && user.uid) {
            (
                async () => {
                    await loadFavourites(user.uid);
                }

            )()
        }
    }, [user]);

    useEffect(() => {
        if (user && user.uid && favourites.length) {
            (
                async () => {
                    await saveFavourites(favourites, user.uid);
                }

            )()
        }
    }, [favourites, user]);

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
