import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import getStyle from './style';
export function Button(props) {
  const styles = getStyle();
  const {running} = props;
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      {<Text style={styles.text}> {props.children} </Text>}
    </TouchableOpacity>
  );
}
