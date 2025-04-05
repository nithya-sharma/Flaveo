import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import Notifications from '../screens/Notifications';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Intro from '../screens/Intro';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import MealsScreen from '../screens/MealsScreen';
import RecipeScreen from '../screens/RecipeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
    initialRouteName='Intro'
    screenOptions={{
      headerTransparent: true
    }
    }>
      <Stack.Screen
      name = "Intro"
      component={Intro} 
      options={{ 
        headerShown: false }} />
      <Stack.Screen 
      name = 'Login'
      component={Login}
      options={{ 
        headerShown: false }}/>
      <Stack.Screen 
       name = "SignUp"
       component={SignUp} 
       options={{ 
         headerShown: false }} />
      <Stack.Screen
        name="Main"
        component={TabNavigation}
        options={{
          headerShown: false, 
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: '',
          animationEnabled: true,
          //animation: "slide_from_right",
          headerRight: () => (
            <TouchableOpacity
              style={styles.iconStyle}
              onPress={() => navigation.navigate('EditProfile')}>
              <Ionicons name="pencil-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTintColor: 'white',
          headerStyle:{
            backgroundColor: "rgba(104, 238, 110, 0.65)",
            elevation: 0,
          },
          title: '',
        }}
      />
      <Stack.Screen 
      name='Notifications'
      component={Notifications}
      options={{
        title: 'Notification'
      }}
      />
      <Stack.Screen 
      name='Home'
      component={Home}
      options={{
        title: ''
      }}
      />
      <Stack.Screen
      name="Meals"
      component={MealsScreen}
      options={{
        title:'',
        headerTintColor:'white'
      }} 
      />
       <Stack.Screen
      name="Recipe"
      component={RecipeScreen}
      options={{
        title:'',
         headerTintColor:'white'
      }} 
      />
       <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        title:'',
         headerTintColor:'white'
      }} 
      />

    </Stack.Navigator>
    
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
iconStyle: {
  margin: 10,
},
});
