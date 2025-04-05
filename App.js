import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/Stacknavigation';
import profileStore from './redux/profileStore';
import { Provider } from 'react-redux';
import FavoriteProvider from './context/FavoriteContext';
import { SavedProvider } from './context/SavedContext';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <Provider store={profileStore}>
      <SavedProvider>
      <FavoriteProvider>
      <CartProvider>
      <NavigationContainer>
      <StackNavigation />
      </NavigationContainer>
      </CartProvider>
      </FavoriteProvider>
      </SavedProvider>
    </Provider>
    
  );
};
export default App;