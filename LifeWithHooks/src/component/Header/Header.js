import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../../color';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    width: '100%',
    backgroundColor: colors.apple_two,
  },
  labelStyle: {
    color: 'white',
    fontSize: 18,
  },
});
