import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  middleView: {
    flex: 1,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
});
