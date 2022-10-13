import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mainView: {
    marginHorizontal: wp(5),
    flex: 1,
    paddingTop: hp(3),
  },
  withText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
    fontWeight: '600',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
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
    padding: 10,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    // margin: 10,
  },
  textStyle: {
    // padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  textInput: {
    backgroundColor: '#fff',
    height: 50,
    width: wp(50),
    paddingHorizontal: 2,
    borderBottomColor: 'gray',
  },
});
