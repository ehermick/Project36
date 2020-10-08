 /**
  * Hello World React Native App
  * Emma Hermick
  */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HelloApp = () => {


  return (
    <View style={{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <Text style={styles.helloText}>Hello World!</Text>
    </View>
  )};

const styles = StyleSheet.create({
  helloText: {
    fontSize: 30,
    fontWeight: 'bold', 
    color: 'blue'
  }
});

export default HelloApp;

