import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import Logo from './Logo';
import FeatherIcon from 'react-native-vector-icons/Feather';

function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <MaterialIconsIcon name="dehaze" style={styles.icon} />
        <Logo style={styles.logoHeader} />
      </View>

      <View style={styles.iconRowFiller} />

      <TouchableOpacity /* Conditional navigation not supported at the moment */
        onPress={() => {}}
        style={styles.button}>
        <FeatherIcon
          name={props.icon2Name || 'settings'}
          style={styles.icon2}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    backgroundColor: 'rgba(31,178,204,1)',
    flexDirection: 'row',
  },
  icon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 25,
    width: 18,
    height: 25,
    marginTop: 9,
  },
  logoHeader: {
    marginLeft: 131,
  },
  iconRow: {
    height: 44,
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 6,
  },
  iconRowFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 15,
  },
  icon2: {
    color: 'rgba(250,250,250,1)',
    fontSize: 25,
  },
});

export default Header;
