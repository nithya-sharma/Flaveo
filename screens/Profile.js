import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image
          source={require('../assests/images/userimg.jpg')} 
          style={styles.profileImage}
          resizeMode="cover" 
        />
      </View>

      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.email}>   {profile.email}   </Text>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.alignCards}
      >
        <View style={styles.scardView}>
          <Text style={styles.textStyle}>Favorites</Text>
          <Text style={styles.countText}>10</Text>
        </View>
        
        <View style={styles.scardView}>
          <Text style={styles.textStyle}>Saved</Text>
          <Text style={styles.countText}>10</Text>
        </View>

        <View style={styles.scardView}>
          <Text style={styles.textStyle}>Contributed</Text>
          <Text style={styles.countText}>10</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'#f8d539',
  },
  profileCard: {
    width: '100%',
    height: '70%',
    backgroundColor: "transparent",
    elevation: 8,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10, 
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%', 
  },
  alignCards: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingVertical: 10,
  },
  email: {
    alignSelf: "center",
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
    borderRadius: 5 ,
    //backgroundColor: "rgba(63, 59, 59, 0.29)",
    
  },
  name: {
    marginTop: 5,
    fontFamily:'Sansita-Bold',
    fontSize: 24,
    marginBottom: 3, 
    alignSelf: "center",
    color: '#333',
  },
  scardView: {
    width: 140,
    height: 80,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "rgba(75, 69, 69, 0.38)",
    borderRadius: 25,
    justifyContent: 'center', 
    alignItems: 'center', 
    fontFamily:'Sansita-Bold',
    
  },
  textStyle: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 3, 
    fontFamily:'Sansita-Bold',
    fontSize: 20,
  },
  countText: {
    color: "white",
    fontSize: 18,
    fontFamily:'Sansita-Bold',
  },
});
