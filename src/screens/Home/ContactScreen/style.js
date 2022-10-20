import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(1.3),
    paddingHorizontal: wp(5),
    marginTop: Platform.OS == 'android' ? 35 : 0,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: wp(5),
    paddingTop: hp(2),
  },
  buttonStyle: {
    width: wp(60),
    alignSelf: 'center',
  },
  allContactText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    // textAlign: 'center',
    // flex: 1,
  },
  saveText: {
    fontSize: 14,
    color: '#125C13',
    fontWeight: '500',
  },
});
