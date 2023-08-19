import { createContext, useState } from "react";


export const FavoritesContext = createContext();
FavoritesContext.displayName = 'FavoritesContext';


export const FavoritesProvides = ({ children }) => {

    const [favorites, setFavorites] = useState([]);


    return (
        <FavoritesContext.Provider value={ { favorites, setFavorites } }>
            {children}
        </FavoritesContext.Provider>
    )
}





