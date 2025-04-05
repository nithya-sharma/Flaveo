import { StyleSheet, Text, View, ImageBackground, Animated, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef } from 'react';

const Intro = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ImageBackground 
      source={{ uri: 'https://drive.google.com/uc?export=&id=1LMxnU2cYqFuHEPo1rW4_7tT0P8v_7yuK' }}
      style={styles.backgroundImage}>

        
      
      <View style={styles.gradientOverlay} />
      <Text style={styles.text}>F</Text>

      <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
        {/* <Text style={styles.text}>F</Text> */}
        <Text style={styles.text1}>
          Welcome to Flaveo
          </Text>
        <Text style={styles.text2}>Unleash Your Culinary Creativity.</Text>
        <Text style={styles.text2}>Every Recipe, One Tap Away!</Text>
      </Animated.View>

       <View >
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.button}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.button}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      {/* <View style={styles.linkContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>SignUp</Text>
          </TouchableOpacity>
          <Text style={styles.separator}>|</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Login</Text>
          </TouchableOpacity>
        </View> */}

    </ImageBackground>
  );
};

export default Intro;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  overlay: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 217, 0, 0.18)',
    borderRadius: 15,
    shadowRadius: 10,
    //elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  text: {
    fontFamily: 'AlexBrush-Regular',  
    fontSize: 100,
    color: 'white',
    marginBottom: 20,
    color:'#FFD700'
  },
  text1: {
    fontFamily: 'Sansita-BlackItalic',  
    fontSize: 36,
    color: 'white',
    marginBottom: 20
  },
  text2: {
    fontFamily: 'Sansita-BlackItalic', 
    fontSize: 20,
    color: "#FFD700",
    marginTop: 5,
    alignContent:"center",
    justifyContent:"center"
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: 70,
  },
  linkText: {
    color: '#ffffff',
    fontSize: 18,
    textDecorationLine: 'underline',
    marginHorizontal: 10,
    fontWeight: 'bold',
    
  },
  separator: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 5,
  },
  buttonContainer:{
    //flexDirection: 'column',
    marginTop: 40,
    borderRadius: 30,
    backgroundColor: 'white'
  },
  button:{
    alignSelf:'center',
    color: '#080808',
    fontSize: 18,
    paddingHorizontal: 30,
    paddingVertical: 5,
    //textDecorationLine: 'underline',
    marginHorizontal: 10,
    fontFamily:'Poppins-Bold'

  },
});
