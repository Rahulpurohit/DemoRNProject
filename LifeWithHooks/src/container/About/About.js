import React from 'react';
import {View, Text} from 'react-native';

export function About() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black'}}> About This App </Text>
    </View>
  );
}
