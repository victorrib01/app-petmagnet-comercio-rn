import React from 'react';
import {View, Text, Button} from 'react-native';

import Header from './../home/HomeHeader';

const PublicacoesScreen = ({navigation}) => {
  return (
    
    <View>
    <Header/>
      <Text>PublicacoesScreen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default PublicacoesScreen;
