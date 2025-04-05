import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Login =({ navigation }) => {

  const handleSkip = () => {
    navigation.replace('Main'); 
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.TitleContainer}>  
      <Text style={styles.title}>Sign In</Text>
      </View>

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

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Don't have an account? <Text style={styles.signUp}>  Sign Up</Text></Text>

    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c', // Dark background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
    width: '50%',
    backgroundColor: '#f8d539', 
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
  signUp: {
    color: '#f8d539',
    fontWeight: 'bold',
  },
  lottieStyle: {
    width: '100%',
    height: 200,
    marginBottom: -50
  },
});
