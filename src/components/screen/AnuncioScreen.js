import React from 'react';
import {View, Text, Button} from 'react-native';

import Header from './../home/HomeHeader';

const AnuncioScreen = ({navigation}) => {
  return (
    
    <View>
    <Header/>
      <Text>AnuncioScreen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default AnuncioScreen;
