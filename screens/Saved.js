import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useContext, useState } from 'react';
import { SavedContext } from '../context/SavedContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const categories = ['All','Breakfast', 'Lunch', 'Dinner','Desserts','Coffee','Tea'];

const Saved = ({ navigation }) => {
  const { Saved, removeFromSaved } = useContext(SavedContext);
  const [activeCategory, setActiveCategory] = useState('All'); 

  const filteredSaved = activeCategory === 'All' ? Saved : Saved.filter(item => item.category === activeCategory);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { DishId: item.id })} style={styles.gridTile}>
      <Image
        source={{ uri: item.uri }}
        style={styles.image}
      />
      <Text style={styles.gridTitle}>{item.title}</Text>
      {/* <TouchableOpacity onPress={() => removeFromSaved(item.id)} style={styles.removeIcon}>
        <Icon name="bookmark" size={24} color="#f8d539" />
      </TouchableOpacity> */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Saved</Text>
      </View>

      <View style={styles.tabsContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            onPress={() => setActiveCategory(category)}
            style={[styles.tab, activeCategory === category && styles.activeTab]}
          >
            <Text style={styles.tabText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {filteredSaved.length > 0 ? (
        <FlatList
          data={filteredSaved}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          numColumns={3} 
          contentContainerStyle={styles.grid}
        />
      ) : (
        <Text style={styles.noSaved}>No saved yet.</Text>
      )}
    </View>
  );
}

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1d',
  },
  titleContainer: {
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    alignSelf: 'center',
    fontFamily: 'Sansita-Bold',
    fontSize: 35,
    color: 'white',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tab: {
    padding: 10,
  },
  tabText: {
    color: 'white',
    fontSize: 18,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#fd1313', 
  },
  grid: {
    //alignItems: 'center',
  },
  gridTile: {
    flex: 1,
    margin: 2,
   // aspectRatio: 1, 
    position: 'relative', 
  },
  image: {
    width:  130,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor:'white',
    
  },
  gridTitle: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontSize: 16,
    backgroundColor: 'rgba(34, 33, 33, 0.5)', 
    padding: 5,
    borderRadius: 5,
  },
  removeIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 50,
    padding: 5,
  },
  noSaved: {
    color: 'grey',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    fontFamily: 'Sansita-Regular',
  },
});
