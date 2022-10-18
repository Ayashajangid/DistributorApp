import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondView: {
    width: wp(80),
    height: hp(20),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  rowView: {
    flexDirection: 'row',
    // width: wp(40),
    // justifyContent: 'space-between',
  },
  touchable: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    backgroundColor: '#FF5D5D',
    borderRadius: 10,
  },
  cnclbttn: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderColor: '#ccc',
    borderWidth: 0.5,
    borderRadius: 10,
  },
  submitText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
  cancelText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
});
