import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const SignUp = ({ navigation }) => {
  const handleSkip = () => {
    navigation.replace('Main'); // Navigate to Main TabNavigator screen
  };
  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.TitleContainer}>  
      <Text style={styles.title}>Create new account</Text>
      </View>

      <TextInput 
        placeholder="Full Name" 
        placeholderTextColor="#ccc" 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Email" 
        placeholderTextColor="#ccc" 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Password" 
        placeholderTextColor="#ccc" 
        style={styles.input} 
        secureTextEntry
      />
      <TextInput 
        placeholder="Confirm Password" 
        placeholderTextColor="#ccc" 
        style={styles.input} 
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Already have an account? 
        <Text style={styles.signIn}>  Sign In</Text>
      </Text>

      {/* <LottieView
          source={require('../assests/Lottie/Meal.json')}
          autoPlay
          loop
          style={styles.lottieStyle}
        /> */}

    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c', // Dark background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  skipText: {
    color: '#f8d539', // Green skip text
    fontSize: 16,
    fontWeight: 'bold',
  },
   TitleContainer: {
    marginVertical: 10,
    alignItems: 'center',
    //borderWidth: 2,
    borderRadius: 30,
    borderColor:'#eeebdf',
    marginBottom: 10,
    padding:5
  },

  title: {
    fontSize: 25,
    padding: 10,
    fontWeight: 'bold',
    //borderWidth: 2,
    margin: 4,
    borderRadius: 20,
    borderColor: '#f8d539',
    color: "#ffff",
    textAlign:"center",
    tintColor:'black'
  },

  input: {
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#f8d539', // Green button
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#ccc',
    marginTop: 20,
    fontSize: 14,
  },
  signIn: {
    color: '#f8d539',
    fontWeight: 'bold',
  },
  lottieStyle: {
    width: '100%',
    height: 130,
    marginBottom: -90
  },
});
