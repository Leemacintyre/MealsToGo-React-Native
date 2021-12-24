import React, { createContext, useState } from "react"

export const FavouritesContext = createContext()


export const FavouritesContextProvider = ({children}) => {

    const [favourites, setFavourites] = useState([])

    const add = (restaurants) => {
        setFavourites([...favourites, restaurants])
    }

    const remove = (restaurant) => {
        const newFavorites = favourites.filter((x) => x.placeId !== restaurant.placeId)
        setFavourites(newFavorites)
    }

    return (
        <FavouritesContext.Provider value={{
            favourites,
            addToFavourites: add,
            removeFromFavourites: remove,
        }}>
            {children}
        </FavouritesContext.Provider>
    )
}
