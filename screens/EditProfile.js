import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, updateName } from '../redux/profileSlice';
import LottieView from 'lottie-react-native';

const EditProfile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const navigation = useNavigation();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  const handleSave = () => {
    console.log('Save button pressed');
    dispatch(updateName(name));
    dispatch(updateEmail(email));
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.Container}>
      <View style={styles.TitleContainer}>
        <Text style={styles.title}>EDIT PROFILE </Text>
      </View>
      
      <View style={styles.formContainer}>
        <View style={styles.subContainer}>
          <TextInput
            style={styles.textInputStyle}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Enter your Name"
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            style={styles.textInputStyle}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter your Email"
          />
        </View>
        <LottieView
          source={require('../assests/Lottie/Meal.json')}
          autoPlay
          loop
          style={styles.lottieStyle}
        />
        <TouchableOpacity
          style={styles.EditButton}
          onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>

     
      {/* <View style={styles.lottieCard}>
        
      </View> */}
    </View>
  );
}

export default EditProfile;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#f8d539',
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'center',     
    paddingTop: 10,
  },
  TitleContainer: {
    marginVertical: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10
  },
  title: {
    fontSize: 26,
    padding: 10,
    fontFamily:'Sansita-Bold',
    borderWidth: 2,
    margin: 4,
    borderRadius: 10,
    borderColor: '#000',
    textAlign:"center",
    color:'black'
  },
  formContainer: {
    zIndex: 1, 
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    elevation: 10,
    marginBottom: 60
  },
  subContainer: {
    marginBottom: 10,
  },
  textInputStyle: {
    borderColor: 'rgba(235, 188, 101, 0.24)',
    borderWidth: 1,
    borderRadius: 10,
    fontFamily:'Sansita-Regular',
    padding: 10,
    backgroundColor: 'rgba(248, 213, 57, 0.23)',
    color: 'black',
  },
  EditButton: {
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 10,
    width: 70,
    alignSelf: 'center',
    backgroundColor: 'rgb(0, 0, 0)',
    elevation: 4,
    borderColor: '#b9b3b3',
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff',
   
    alignSelf: 'center',
    fontFamily:'Sansita-Bold',
  },
  // lottieCard: {
  //   width: '100%',
  //   padding: 10,
  //   borderRadius: 15,
  //   backgroundColor: '#FFFFFF',
  //   elevation: 10,    
  // },
  lottieStyle: {
    width: '100%',
    height: 200,
  },
});
