import { TouchableOpacity, StyleSheet, Text, View,Image } from 'react-native'
import React, {useContext} from 'react';
import { popularDishes } from '../DummyData/data';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FavoriteContext } from '../context/FavoriteContext';
import { SavedContext } from '../context/SavedContext';

const RecipeScreen = ({route }) => {
    const { popularDishId } = route.params;
    const selectedDish = popularDishes.find(dish => dish.id === popularDishId);

    const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);
    const isFavorite = favorites.some(dish => dish.id === popularDishId);
    const addToFavorite = () => {
        if (isFavorite) {
            removeFromFavorites(selectedDish.id);
        } else {
            addToFavorites(selectedDish);
        }
    };

    const { Saved, addToSaved, removeFromSaved } = useContext(SavedContext);
    const isSaved = Saved.some(dish => dish.id === popularDishId);
    const addToSave = () => {
      if (isSaved) {
        removeFromSaved(selectedDish.id);
      } else {
        addToSaved(selectedDish);
      }
    };
  
  return (
    <View style={styles.container}> 
    <View style={styles.imagContainer}>
      <Image
        style={styles.dishimg}
        source={{ uri: selectedDish.uri }} />  
          <View style={styles.buttonContainer}>
                    {/* <TouchableOpacity style={styles.floatingButton} onPress={addToSave}>
                        <Icon name="bookmark" size={20} color={isSaved ? '#f8d539' : "#ffffff" }/> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.floatingButton} onPress={addToFavorite}>
                        <Icon name="heart" size={20} color={isFavorite ? '#fd1313' : '#ffffff'} /> 
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.floatingButton}>
                        <Icon name="share" size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.floatingButton}>
                        <Icon name="shopping-cart" size={20} color="#ffffff" />
                    </TouchableOpacity>
                </View>
            </View>
        
      <ScrollView style={styles.detailsContainer}>
      <Text style={styles.Title}>{selectedDish.name}</Text>
        <View style={styles.tags}>
        <Text style={styles.tag}>⏱{selectedDish.duration}</Text>
          {selectedDish.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
              </Text>
          ))}
            
        </View>

       <Text style={styles.Title2}>Description</Text>
       <Text style={styles.Description}>{selectedDish.description}</Text>

       <Text style={styles.Title2}>Ingredients</Text>
        {selectedDish.ingredients.map(ingredient => (
          <Text key={ingredient.id} style={styles.Description}>
            - {ingredient.name}: {ingredient.quantity}
          </Text>
        ))}

        <Text style={styles.Title2}>Instructions</Text>
        {selectedDish.shortRecipe.map((step, index) => (
          <Text key={index} style={styles.Description}>
            {step}
          </Text>
        ))}

        <Text style={styles.Title}>Good luck!</Text>
      </ScrollView>
    </View>
  );
}

export default RecipeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'rgb(0, 0, 0)'
    },
    imagContainer:{
        width:'100%',
        height:'100%',
    },
    dishimg:{
        width: '100%',
        height:'60%'
    },
    detailsContainer:{
        backgroundColor:'#000000',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        width: '100%',
        height:'50%',
        position:'absolute',
        bottom: 0
    },
    Title:{
        fontFamily:'Sansita-Bold',
        marginTop: 40,
        marginLeft: 30,
        color:'#ffffff',
        fontSize: 28,
    },

    tags:{
        flexDirection:'row',
        padding:5,
        marginLeft: 30,
        borderRadius:10,
        //backgroundColor: 'rgba(204, 201, 201, 0.26)'
    },
    tag:{
        fontFamily:'Sansita-Bold',
        marginRight: 10,
        fontSize: 15,
        color:'grey'
    },
    Title2:{
        fontFamily:'Sansita-Bold',
        marginLeft: 30,
        color:'black',
        fontSize: 20,
        marginTop:5,
        color:'#ffffff'
    },
    Description:{
        fontFamily:'Sansita-Italic',
        marginHorizontal: 40,
        fontSize: 15,
        marginTop: 10,
        color:'grey'
    },
    buttonContainer: {
      position: 'absolute',
      top: 20,
      right: 20,
      flexDirection: 'column',
    },
    floatingButton: {
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 30,
        marginBottom: 10,
        elevation: 5,
        alignItems: 'center',  
    },
    buttonText: {
        fontFamily: 'Sansita-Bold',
        color: 'black',
        marginLeft: 5, 
    },

})