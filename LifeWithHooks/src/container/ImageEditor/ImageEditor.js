/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  View,
  UIManager,
  findNodeHandle,
  DeviceEventEmitter,
} from 'react-native';
import NativeImageView from '../../component/NativeImageViewComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Button} from 'native-base';

export default class ImageEditor extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.callNativeMethod = this.callNativeMethod.bind(this);
  }

  componentDidMount() {
    this.mapViewHandle = findNodeHandle(this.myNativeReference);
    DeviceEventEmitter.addListener('onFileSaved', event => {
      console.log('onFileSaved -->', event);
      console.log('onFileSaved onFileSaved -->', event.file); //Base-64 Image
    });
  }

  callNativeMethod(command = 'takePhoto') {
    UIManager.dispatchViewManagerCommand(this.mapViewHandle, command, null);
  }

  render() {
    return (
      <View>
        <NativeImageView
          style={{width: '100%', height: 300}}
          ref={ref => (this.myNativeReference = ref)}
          overlayText="RAHUL PUROHIT Overlay"
        />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 50,
          }}>
          <MaterialIcons
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 50,
              color: 'white',
              marginLeft: 15,
            }}
            name={'save'}
            onPress={() => {
              this.callNativeMethod();
            }}
          />

          <MaterialIcons
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 50,
              color: 'white',
              marginLeft: 15,
            }}
            name={'colorize'}
            onPress={() => {
              this.callNativeMethod('grayscaleFilter');
            }}
          />
        </View>
      </View>
    );
  }
}
