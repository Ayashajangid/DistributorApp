import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 100,
    width: 50,
    height: 50,
  },
  nameView: {
    flex: 1,
    paddingRight: 10,
  },
  nameText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  expensesText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray',
  },
});
