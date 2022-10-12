import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(3),
  },
  innerRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    color: '#000',
    paddingHorizontal: wp(5),
  },
  detailSection: {
    flexDirection: 'row',
    // marginHorizontal: wp(10),
    // width: wp(100),
  },
  iconStyle: {
    // padding: 10,
    height: hp(6),
    width: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
  },
  textStyle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
});
