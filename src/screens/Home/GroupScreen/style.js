import React from 'react';
import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    marginHorizontal: wp(5),
    backgroundColor: '#fff',
    paddingTop: hp(2),
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  groupTitle: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
  buttonStyle: {
    width: wp(60),
    alignSelf: 'center',
  },
});
