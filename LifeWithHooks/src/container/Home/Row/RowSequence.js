/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, Text} from 'react-native';
const {width} = Dimensions.get('screen');
export default function RowSequence(props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor:
            props.selectedIndex !== props.index
              ? 'transparent'
              : styles.container.borderColor,
        },
      ]}
      onPress={index => {
        props.onPress && props.onPress(index);
      }}>
      <Text style={styles.text}>Sequence {props.index + 1}</Text>
      <Text style={styles.createdAt}>
        Created at:{new Date(props.created_at).toLocaleDateString()}
      </Text>
      <Text style={styles.createdAt}>
        Total time:
        {props.total_time}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.33,
    height: 75,
    backgroundColor: 'rgba(247,247,247,0)',
    opacity: 1,
    borderRadius: 5,
    borderColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    color: 'rgba(255,255,255,1)',
    alignSelf: 'center',
    fontSize: 16,
  },
  createdAt: {
    color: 'rgba(247,252,253,1)',
    alignSelf: 'center',
    fontSize: 10,
  },
});
