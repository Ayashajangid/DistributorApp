import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp} from '../../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  mainView: {
    borderBottomWidth: 1,
    paddingBottom: hp(2),
    marginBottom: hp(2),
    borderColor: '#ccc',
  },
  renderView: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: '#15133C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
});
