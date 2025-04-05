import React, { useState, useRef } from 'react';
import { ImageBackground, View, Text, FlatList, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { foodFacts, popularDishes } from '../DummyData/data';
import LinearGradient from 'react-native-linear-gradient';
import Carousel , { Pagination } from 'react-native-snap-carousel';
import CategoriesScroll from '../components/CategoriesScroll';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = WIDTH;


const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);  
  const tipCarouselRef = useRef(null); 
  const imageSource = {uri: 'https://www.supznutrition.com/cdn/shop/articles/gesunde-bowls-buddha-bowl_600x600_9572adc6-db89-4c17-8c2e-cfb448faaf07.jpg?v=1698228202'}
 
  const navigation = useNavigation();
  
  const renderFoodFact = ({ item }) => (
   
       <View style={styles.textalign}>
         <Text style={styles.foodFactText}>{item.fact}</Text>
       </View>
  
  );

  const renderPopularDish = ({ item }) => (
    <TouchableOpacity 
    onPress={() => navigation.navigate('Recipe', { popularDishId: item.id })}>
  
      <ImageBackground 
      source={{ uri: item.uri }} 
      style={styles.pdishCard}
      imageStyle={{ borderRadius: 10 }} 
      resizeMode="cover" 
    >
      <View style={styles.overlay}>
         <Text style={styles.categoryText}>{item.name}</Text>
         <Text style={styles.dishDescription}>{item.description}</Text>
      </View>
       </ImageBackground>
    </TouchableOpacity>
    
  );

  return (
    
    // <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#fcfcfc','#5f5f5f','#dee0e4', '#5f5f5f']
    //   } style={[styles.linearGradient]}>
    <View style={styles.container}>

      {/* <View>
        <TextInput></TextInput>
      </View> */}

      
      <View style={styles.carouselContainer}>

      <ImageBackground 
  source={imageSource} 
  style={styles.factimgbg} 
  imageStyle={{ borderRadius: 10 }}
  resizeMode="cover">
 
  <View style={styles.overlay} />
  <Carousel
    data={foodFacts}
    renderItem={renderFoodFact}
    itemWidth={ITEM_WIDTH / 1.3}
    sliderWidth={WIDTH / 1.3}
    layout={"default"}
    ref={tipCarouselRef}
    onSnapToItem={(index) => setActiveSlide(index)}
  />
  <Pagination
    dotsLength={foodFacts.length}  
    activeDotIndex={activeSlide} 
    containerStyle={styles.paginationContainer}
    dotStyle={styles.dotStyle}
    inactiveDotOpacity={0.4}
    inactiveDotScale={0.6}
  />   
</ImageBackground>
      </View>
     
      
      <CategoriesScroll navigation={navigation} />
    
      <Text style={styles.sectionTitle}> IN THE SPOTLIGHT </Text>
      <FlatList
        data={popularDishes}
        renderItem={renderPopularDish}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.foodFactList}
      />
    </View>
    // </LinearGradient>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  carouselContainer:{
    marginVertical: 40,
    borderRadius: 8,
    elevation:4,
    marginBottom: 10,
  },

  paginationContainer: {
    paddingVertical: 5, 
  },
  dotStyle: {
    width: 15,
    height: 15,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#f8d539',
    elevation: 4,
    borderWidth:1,
    borderColor: '#f1c501'
  },

  factimgbg: {
    height: 150,             
    justifyContent: 'center', 
    alignItems: 'center',     
    borderRadius: 10,       
    overflow: 'hidden',   
  },


  foodFactText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontFamily:'Sansita-Bold',
    padding: 20
  },

  categoryCard: {
    backgroundColor: '#1c1c1c',
    marginRight: 10,
    marginTop: -30,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  sectionTitle: {
    fontSize: 25,
    fontFamily: 'Sansita-Bold',
    //borderWidth: 1,
    marginBottom: 10,
    marginTop: 20,
    color: '#1c1c1c'
  },
  pdishCard:{
    backgroundColor:'#f8d539',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 250,
    elevation: 10,
  },
  categoryText: {
    fontSize: 16,
    color: '#f8d539',
    paddingHorizontal:10,
    fontFamily:'Sansita-BoldItalic',
  },
  dishDescription: {
    fontSize: 13,
    color: '#fff',
    //textAlign: 'center',
    fontFamily:'Sansita-Bold',
    padding: 10
  },
  dishImage:{
    borderRadius: 10,
  },
  textalign:{
      position: 'absolute', 
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center', 
      alignItems: 'center',
  },
  overlay: {
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 10, 
  },
});

export default Home;
