import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Easing, TouchableOpacity, View, Text, Animated } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import Home from '../screens/Home';
import Favorite from '../screens/Favorite ';
import CartScreen from '../screens/Cart';
import SavedScreen from '../screens/Saved';
import Discover from '../screens/Discover';
import { useFocusEffect } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigation = ({ navigation }) => {
  const profile = useSelector((state) => state.profile);
  const [curPos] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  useFocusEffect(
    React.useCallback(() => {
      
      Animated.spring(curPos, {
        toValue: { x: 0, y: 0 },
        duration: 2500,
        useNativeDriver: true,
        easing: Easing.bounce,
        bounciness: 30,
      }).start();
  
      return () => {
       
        Animated.spring(curPos, {
          toValue: { x: 0, y: 0 },
          duration: 2500,
          useNativeDriver: true,
          easing: Easing.bounce,
          bounciness: 10,
        }).start();
      };
    }, [curPos])
  );


  return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={{
      tabBarStyle: styles.tabBarStyle,
      tabBarShowLabel: false,
      headerTransparent: true,
      
    }}>
      <Tab.Screen
  name="Saved"
  component={SavedScreen}
  options={{
    headerShown: false,
    tabBarIcon: ({ color, size, focused }) => (
      <View style={styles.tabIconContainer}>
        <Animated.View 
          style={[
            styles.iconParent(focused),
            { transform: [{ translateY: focused ? curPos.y : 0 }] },
          ]}>
          <FontAwesome 
            name="bookmark" 
            size={ focused ? 20 : 24} 
            color={focused ? 'black' : 'white'} 
          />
        </Animated.View>
      </View>
    ),        
  }}
/>
      <Tab.Screen
        name="Favorites"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabIconContainer}>
              <Animated.View 
                style={[
                  styles.iconParent(focused),
                  { transform: [{ translateY: focused ? curPos.y : 0 }] },
                ]}>
            <AntDesign 
            name="heart" 
            size={focused ? 20 : 24} 
            color={focused ? 'black' : 'white'}  />
            </Animated.View>
            </View>
          ),        
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabIconContainer}>
              <Animated.View 
                style={[
                  styles.iconParent(focused),
                  { transform: [{ translateY: focused ? curPos.y : 0 }] },
                ]}>
            <FontAwesome6 
            name="house"
            size={focused ? 20 : 24} 
            color={focused ? 'black' : 'white'}  />
            </Animated.View>
            </View>
          ),        
          headerLeft: () => (
            <View style={styles.hiStyle}>
              <Text style={styles.hiText}>Hi, {profile.name}</Text>
            </View>
          ),
          headerRight: () => (
            <View style={styles.alignIcons}>
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => navigation.navigate('Notifications')}
              >
                <MaterialCommunityIcons name="bell" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => navigation.navigate('Profile')}
              >
                <MaterialCommunityIcons name="account" size={35} color="black" />
              </TouchableOpacity>
            </View>
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabIconContainer}>
              <Animated.View 
                style={[
                  styles.iconParent(focused),
                  { transform: [{ translateY: focused ? curPos.y : 0 }] },
                ]}>
            <MaterialIcons name="shopping-cart" 
             size={focused ? 20 : 24} 
             color={focused ? 'black' : 'white'}  />
             </Animated.View>
             </View>
           ),        
         }}
       />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          //headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabIconContainer}>
              <Animated.View 
                style={[
                  styles.iconParent(focused),
                  { transform: [{ translateY: focused ? curPos.y : 0 }] },
                ]}>
            <FontAwesome name="globe"
           
          size={focused ? 20 : 24} 
          color={focused ? 'black' : 'white'}  />
          </Animated.View>
          </View>
        ),        
      }}
    />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
   
  },
  hiStyle:{
    margin: 10
  },
  hiText:{
    fontSize: 23,
    marginLeft:15,
    fontFamily:'Sansita-Bold',
    color: '#000'
  },
  tabBarStyle:{
    position: 'absolute',
    marginVertical: 10,
    marginHorizontal: 20,
    width: '90%',
    height:'9%',
    borderRadius: 70,
    elevation: 8,
    backgroundColor: "#000000",
    borderWidth:1,
    borderColor:"#00000000"
  },
  alignIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    margin: 5,
  },
  iconParent: (focus) => ({
   borderRadius: 25,
   borderWidth:1,
   padding:10,
   width:50,height:50,
   backgroundColor: focus ? '#f8d539' : 'black',
   alignItems:"center",
   justifyContent:"center"
  }),

});

export default TabNavigation;
