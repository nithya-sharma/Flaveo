import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Notifications = () => {
  return (
    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#fcfcfc','#5f5f5f','#dee0e4', '#5f5f5f']
    } style={styles.linearGradient}>
    <View>
      <Text>Notifications</Text>
    </View>
    </LinearGradient>
  )
}

export default Notifications;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});