import React from 'react';
import {StyleSheet} from 'react-native';
import { hp, wp } from '../../utility/responsive/responsive';
export const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
  },
  subHeading: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    color: 'gray',
  },
  groupOuterSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2)
  },
  groupName: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  },
  groupType: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  buttonStyle: {
    width: wp(60),
    alignSelf: 'center',
    backgroundColor: '#fff'
  }
});
