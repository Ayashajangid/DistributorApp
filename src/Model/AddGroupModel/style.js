import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgba(200,200,200,0.9)',
  },
  mainView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: wp(5),
    backgroundColor: 'rgba(200,200,200,0.9)',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(3),
  },
  headerText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
  },
  saveText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'green',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
