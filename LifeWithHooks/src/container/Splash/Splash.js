import React from 'react';
import {StyleSheet, Text, ImageBackground} from 'react-native';
export function Splash() {
  return (
    <ImageBackground
      style={styles.rect}
      source={require('../../assets/images/Gradient_LZGIVfZ.png')}>
      <Text style={styles.textStyle}> Loading.... </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rect: {
    opacity: 0.69,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 24,
    color: 'white'
  }
});
