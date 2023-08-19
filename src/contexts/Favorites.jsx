import { createContext, useContext, useState } from "react";


export const FavoritesContext = createContext();
FavoritesContext.displayName = 'FavoritesContext';


export const FavoritesProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([]);


    return (
        <FavoritesContext.Provider value={ { favorites, setFavorites } }>
            {children}
        </FavoritesContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useFavoriteContext = () => {
    const { favorites, setFavorites } = useContext(FavoritesContext);


    function addFavorite(newFavorite) {
        
        const repeatedFavorite = favorites.some( favorite => favorite.id === newFavorite.id);
        
        let newFavoritesList = [...favorites];

        if(!repeatedFavorite){
            newFavoritesList.push(newFavorite);
            
            return setFavorites(newFavoritesList);
        }

        const indexToRemove = newFavoritesList.findIndex(favorite => favorite.id === newFavorite.id);
        console.log(indexToRemove);
        newFavoritesList.splice(indexToRemove, 1);
        return setFavorites(newFavoritesList);

    }

    return {
        favorites,
        setFavorites,
        addFavorite
    }
}




