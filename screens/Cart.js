import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const [aggregatedIngredients, setAggregatedIngredients] = useState([]);

  // Aggregate ingredients
  useEffect(() => {
    const ingredientMap = {};

    cartItems.forEach(item => {
      item.ingredients.forEach(ingredient => {
        if (ingredientMap[ingredient.name]) {
          ingredientMap[ingredient.name].quantity += parseInt(ingredient.quantity) * item.quantity; // Multiply by the dish quantity
        } else {
          ingredientMap[ingredient.name] = { ...ingredient, quantity: parseInt(ingredient.quantity) * item.quantity };
        }
      });
    });

    setAggregatedIngredients(Object.values(ingredientMap));
  }, [cartItems]);

  const renderIngredientItem = ({ item }) => (
    <View style={styles.ingredientItem}>
      <Text style={styles.ingredientName}>{item.name}</Text>
      <Text style={styles.ingredientQuantity}>{item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cart</Text>
        <Image
          style={styles.img}
          source={require('../assests/images/wave_path.png')}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.cartContainer}
        data={aggregatedIngredients}
        renderItem={renderIngredientItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1c1c1d' },
  titleContainer: { backgroundColor: '#ffffff' },
  title: { alignSelf: 'flex-start', fontFamily: 'Sansita-Bold', fontSize: 35, color: '#000000', padding: 20 },
  img: { height: 80, width: '100%', alignSelf: 'center', tintColor: '#1c1c1d', resizeMode: 'cover', position: 'absolute', top: 0, bottom: 0, marginTop: 25 },
  cartContainer: {},
  ingredientItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  ingredientName: { color: 'white', fontSize: 18 },
  ingredientQuantity: { color: 'white', fontSize: 18 },
});