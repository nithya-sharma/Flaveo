import React, { createContext, useState} from "react";

export const SavedContext = createContext();

export const SavedProvider = ({children}) => {
    const [Saved, setSaved] = useState([]);

const addToSaved = (dish) => {
    setSaved(prevSaved => [...prevSaved, dish]);
  };

  const removeFromSaved = (dishId) => {
    setSaved(prevSaved => prevSaved.filter(dish => dish.id !== dishId));
  };

  return (
    <SavedContext.Provider value={{ Saved, addToSaved, removeFromSaved }}>
      {children}
    </SavedContext.Provider>
  );
};

export default SavedProvider;