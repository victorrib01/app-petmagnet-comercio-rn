import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import Header from './../home/HomeHeader';

const PublicacoesScreen = ({navigation}) => {
  return (
    <View>
      <Header />
      <View style={styles.publicacaoView}>
        <View style={styles.publicacaoBox}>
          <View style={styles.visivelBox}>
            <Text style={styles.visivelFrom}>Visível a Partir de: </Text>
            <Text style={styles.statsFrom}>15.06.2020</Text>
            <Text style={styles.visivelUntil}>Disponível até: </Text>
            <Text style={styles.statsUntil}>20.06.2020</Text>
          </View>
          <View style={styles.fotoBox}>
            <View style={styles.item}>
              <Text>Foto</Text>
              <Text>R$ 38,49</Text>
            </View>
            <View style={styles.item}>
              <Text>Foto</Text>
              <Text>R$ 42,50</Text>
            </View>
            <View style={styles.item}>
              <Text>Foto</Text>
              <Text>R$ 40,99</Text>
            </View>
          </View>
          <View style={styles.descBox}>
            <Text>
              Alimento para Cães Sabor Frango Assado SPEED DOG Pacote 10,1kg
            </Text>
          </View>
        </View>
        <View style={styles.publicacaoBox}>
          <View style={styles.visivelBox}>
            <Text style={styles.visivelFrom}>Visível a Partir de: </Text>
            <Text style={styles.statsFrom}>15.06.2020</Text>
            <Text style={styles.visivelUntil}>Disponível até: </Text>
            <Text style={styles.statsUntil}>20.06.2020</Text>
          </View>
          <View style={styles.fotoBox}>
            <View style={styles.item}>
              <Text>Foto</Text>
              <Text>R$ 38,49</Text>
            </View>
            <View style={styles.item}>
              <Text>Foto</Text>
              <Text>R$ 42,50</Text>
            </View>
            <View style={styles.item}>
              <Text>Foto</Text>
              <Text>R$ 40,99</Text>
            </View>
          </View>
          <View style={styles.descBox}>
            <Text>
              Alimento para Cães Sabor Frango Assado SPEED DOG Pacote 10,1kg
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  publicacaoView: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  publicacaoBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  visivelBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  visivelFrom: {},
  visivelUntil: {},
  fotoBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  descBox: {},
})

export default PublicacoesScreen;
