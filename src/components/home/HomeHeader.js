import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {headerColor} from '../helper/Colors'

const HomeHeader = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>PetMagnet</Text>
      <Text style={styles.subHeaderText}>Comércio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: headerColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#3091db',
  },
  headerText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#594A46',
    fontSize: 26,
    marginTop: 10,
  },
  subHeaderText: {
    fontFamily: 'Open Sans',
    letterSpacing: 10,
    color: '#006FB2',
    fontSize: 13,
    marginTop: -5,
    marginBottom: 5,
  },
});

export default HomeHeader;
