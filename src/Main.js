import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

// FRAME DO APLICATIVO
class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>PetMagnet</Text>
          <Text style={styles.subHeaderText}>Comércio</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          <Text>MAIN CONTENT</Text>
        </ScrollView>

        <View style={styles.footer}>
          <Text>FOOTER</Text>
        </View>
      </View>
    );
  }
}

// STYLESHEET - ESTILOS DA PAGINA
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E0B165',
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
  scrollContainer: {
    backgroundColor: '#fffbed',
    flex: 1,
    marginBottom: 0,
  },
  footer: {
    backgroundColor: '#EB8050',
    height: 50,
  },
});

export default Main;
