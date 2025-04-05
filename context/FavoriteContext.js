import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (dish) => {
    setFavorites(prevFavorites => [...prevFavorites, dish]);
  };

  const removeFromFavorites = (dishId) => {
    setFavorites(prevFavorites => prevFavorites.filter(dish => dish.id !== dishId));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;