import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {footerColor, white} from '../helper/Colors';

//Telas da aplicacao
import HomeScreen from '../screen/HomeScreen';
import AnuncioScreen from '../screen/AnuncioScreen';
import PublicacoesScreen from '../screen/PublicacoesScreen';
import PreferenciasScreen from '../screen/PreferenciasScreen';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={white}
        barStyle={{backgroundColor: footerColor}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Anúncios" component={AnuncioScreen} />
        <Tab.Screen name="Publicações" component={PublicacoesScreen} />
        <Tab.Screen name="Preferências" component={PreferenciasScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
