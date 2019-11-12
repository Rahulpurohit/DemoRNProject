import React from 'react';
import {StyleSheet, Text} from 'react-native';

function Logo(props) {
  return <Text style={[styles.text5, {...props.style}]}>Rp</Text>;
}

const styles = StyleSheet.create({
  text5: {
    color: 'rgba(255,255,255,1)',
    fontSize: 36,
  },
});

export default Logo;
