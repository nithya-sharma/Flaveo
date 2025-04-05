import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealsGridTile from '../components/MealsGridTile';
import { meals } from '../DummyData/data';

const MealsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = meals.filter(meal => meal.categoryIds.includes(categoryId));

  const renderMealItem = (itemData) => {
    return (
      <MealsGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        uri={itemData.item.uri}
        onPress={() => navigation.navigate('Details', { DishId: itemData.item.id })} 
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.mealDisplay}
        numColumns={1}  
      />
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    flex: 1,
    backgroundColor: 'black',
  },
  mealDisplay: {
    marginTop: 20,
  }
});
