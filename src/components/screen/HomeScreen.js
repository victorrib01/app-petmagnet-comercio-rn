import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from './../home/HomeHeader';
import Date from '../home/DateComponent'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Date/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
