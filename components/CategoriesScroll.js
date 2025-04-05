import React from 'react';
import { FlatList, View, StyleSheet, Text, ImageBackground } from 'react-native';
import { categories } from '../DummyData/data';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoriesScroll = ({ navigation }) => {
  const pressHandler = (itemData) => {
    navigation.navigate('Meals', {
      categoryId: itemData.id,
    });
  };

  const renderCategoryList = ({ item }) => (

<View style={styles.categoryCard}>
<TouchableOpacity 
    onPress={() => pressHandler(item)}>
      {/* <ImageBackground
        source={{ uri: item.uri }}
        style={styles.categoryCard}
        imageStyle={{
          //borderRadius: 20,
          //borderWidth: 3,
          borderColor: '#1c1c1c',
          elevation: 10,
        }}
        resizeMode="cover"
      /> */}
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
</View>
    
  );

  return (
    <View>
      <FlatList
      data={categories}
      renderItem={renderCategoryList}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginTop: 10,
  },
  ScrollContainer: {
    //paddingVertical: 5,
  },
  // categoryCard: {
  //   // height:80,
  //   // width:65,
  //   margin: 10,
  //   borderRadius: 50,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   elevation: 15
   
  // },
  
  categoryCard:{
    margin: 5,
    marginTop:20,
    borderRadius: 10,
    backgroundColor: 'black'
  },
  categoryText: {
    fontFamily:'Sansita-Bold',
    color: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    fontSize: 15,
  },
});

export default CategoriesScroll;