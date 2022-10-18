import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {wp} from '../../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 17,
    color: '#000',
  },
  buttonStyle: {
    width: wp(60),
    alignSelf: 'center',
  },
});
