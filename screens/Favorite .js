import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';
import Icon from 'react-native-vector-icons/FontAwesome';


const Favorite = ({navigation}) => {
  const { favorites, removeFromFavorites } = useContext(FavoriteContext); 

  const renderItem = ({ item }) => (
    <TouchableOpacity 
    style={styles.itemContainer}
    onPress={() => navigation.navigate('Details', { DishId: item.id })} >
      <Image 
      style={styles.dishimg}
      source={{ uri: item.uri }}
      />
      <Text style={styles.text}> {item.name ? item.name : item.title} </Text>
      <TouchableOpacity onPress={() => removeFromFavorites(item.id)}>
        <Icon name="heart" size={24} color="#fd1313" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}> 
        <Text style={styles.title}>Favorites</Text>
      </View>

      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.noFavorites}>No favorites yet.</Text>
      )}
    </View>
  );
}

export default Favorite;

const styles = StyleSheet.create({
  dishimg:{
    height:'90%',
    width:'25%',
    borderRadius: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#1c1c1d',
  },
  titlecontainer: {
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    alignSelf: 'center',
    fontFamily: 'Sansita-Bold',
    fontSize: 35,
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#413f3f',
    // f8d539
  },
  text: {
    fontFamily: 'Sansita-Regular',
    fontSize: 20,
    color: 'white',
    padding: 30,
    marginLeft: -50
  },
  noFavorites: {
    color: 'grey',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    fontFamily: 'Sansita-Regular',
  },
});
