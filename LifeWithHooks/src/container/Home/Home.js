import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import colors from '../../color';
import Row from './Row/Row';
import {Spinner} from 'native-base';

export function Home(props) {
  const [page, setPage] = useState(0);
  useEffect(() => {
    props.getList({page: page});
  }, []);

  const {isFetching} = props.list;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.black}}>
      {props.list.data && (
        <FlatList
          data={props.list.data.data ? props.list.data.data : []}
          renderItem={({item, index}) => <Row {...item} index={index} />}
          onEndReached={({distanceFromEnd}) => {
            if (distanceFromEnd >= 0) {
              const total_pages = props.list ? props.list.data.total_pages : 1;
              if (page < total_pages) setPage({page: page + 1});
            }
          }}
          onEndReachedThreshold={0.8}
        />
      )}
      {isFetching && <Spinner />}
    </SafeAreaView>
  );
}
