/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useState, useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  ImageBackground,
  View,
  findNodeHandle,
  UIManager,
  TouchableOpacity,
} from 'react-native';
import RowSequence from './Row/RowSequence';
import {Spinner} from 'native-base';
import colors from '../../color';
import Header from '../../component/Header/Header';
import ImageEditor from '../ImageEditor/ImageEditor';

export function Home(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    props.getList();
  }, []);

  const {isFetching} = props.list;
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/images/Gradient_LZGIVfZ.png')}>
      <Header />
      <SafeAreaView>
        {props.list.data && (
          <FlatList
            data={
              props.list.data.ccm_sequences ? props.list.data.ccm_sequences : []
            }
            style={{backgroundColor: colors.yet_another_color}}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <RowSequence
                {...item}
                index={index}
                onPress={() => {
                  setSelectedIndex(index);
                }}
                selectedIndex={selectedIndex}
              />
            )}
          />
        )}
        <ImageEditor />
        {isFetching && <Spinner />}
      </SafeAreaView>
    </ImageBackground>
  );
}
