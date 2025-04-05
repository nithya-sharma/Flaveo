import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { meals } from '../DummyData/data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';

const Discover = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setData(meals); // Load data once
  }, []);

  useEffect(() => {
    if (search.trim().length > 0) {
      const newFilteredData = data.filter(item =>
        item.title?.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(newFilteredData);
    } else {
      setFilteredData([]);
    }
  }, [search, data]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLargeTitle: false,
      headerTitle: () => (
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={32} color="#f8d539" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
      ),
    });
  }, [navigation, search]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.noResults}>No results found</Text>
            <LottieView
              source={require('../assests/Lottie/Carousel.json')}
              autoPlay
              loop
              style={styles.lottieStyle}
            />
          </View>
        )}
        contentContainerStyle={styles.listContainer} 
      />
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor:'#ffffff'
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: 380,
    height: 45,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color:'#ffffff'
  },
  listContainer: {
    marginTop: 50,
    paddingBottom: 20,
  },
  itemContainer: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    width: '100%',
  },
  itemText: {
    fontSize: 18,
    color: '#000000',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  lottieStyle: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    marginTop: 20
  },
  noResults: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    fontFamily:'Sansita-Bold',
    
  },
});
