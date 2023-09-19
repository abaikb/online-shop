import React, { createContext, useState, useContext } from "react";

export const FavoriteContext = createContext();

export const useFavorite = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const removeFromFavorites = (itemId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== itemId)
    );
  };

  const isItemInFavorites = (itemId) => {
    return favorites.some((item) => item.id === itemId);
  };

  const favoriteContextValue = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isItemInFavorites,
  };

  return (
    <FavoriteContext.Provider value={favoriteContextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};

