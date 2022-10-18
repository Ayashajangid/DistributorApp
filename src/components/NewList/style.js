import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  renderView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    marginHorizontal: wp(16),
    marginVertical: hp(2),
  },
  dateView: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(120,120,120,0.1)',
    borderRadius: 10,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleView: {
    flex: 1,
  },
});
