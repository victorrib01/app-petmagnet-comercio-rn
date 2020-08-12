import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {
  footerColor,
  white,
} from './src/components/helper/Colors';

//Telas da aplicacao
import HomeScreen from './src/components/screen/HomeScreen';
import AnuncioScreen from './src/components/screen/AnuncioScreen';
import PublicacoesScreen from './src/components/screen/PublicacoesScreen';
import PreferenciasScreen from './src/components/screen/PreferenciasScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={white}
        barStyle={{backgroundColor: footerColor}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Anuncio" component={AnuncioScreen} />
        <Tab.Screen name="Publicacoes" component={PublicacoesScreen} />
        <Tab.Screen name="Preferencias" component={PreferenciasScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
