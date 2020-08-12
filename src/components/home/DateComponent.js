import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
import 'moment/min/locales';


export default class DateComponent extends React.Component {
  constructor(props) {
    moment.locale('pt-br')
    super(props);
    this.state = {};
  }
  render() {
    return ( 
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{moment().date()} de 
        {moment().format('MMMM')}, 
        {moment().format('dddd')} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontWeight: 'bold',
    color: '#594A46',
    fontSize: 26,
    marginTop: 10,
  },
});
