import React from 'react';
import {View, Text, Button} from 'react-native';

import Header from './../home/HomeHeader';

const HomeScreen = ({navigation}) => {
  return (
      
    <View>
    <Header/>
      <Text>HomeScreen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default HomeScreen;
