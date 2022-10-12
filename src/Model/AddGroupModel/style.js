import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // backgroundColor: 'rgba(200,200,200,0.9)',
  },
  screen: {
    flex: 1,
    marginHorizontal: wp(5),
    // backgroundColor: 'rgba(200,200,200,0.9)',
    backgroundColor: '#fff',
  },
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
  cameraView: {
    backgroundColor: '#f0f4f7',
    width: wp(16),
    height: hp(7),
    borderColor: '#ced2d4',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  groupRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(3),
  },
  innerGroupView: {
    // width: wp(70),
    flex: 1,
    marginHorizontal: wp(4),
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  typeSection: {
    padding: 12,
    // margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    flexDirection: 'row',
  },
  typeTitle: {
    fontSize: 16,
    marginLeft: 5,
  },
  selectedTypeSection: {
    backgroundColor: '#ccf1e9',
    borderColor: '#599f8b',
  },
});
