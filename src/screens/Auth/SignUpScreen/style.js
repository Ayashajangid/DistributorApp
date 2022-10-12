import React from 'react';
import {StyleSheet} from 'react-native';
import {wp} from '../../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: wp(5),
    paddingTop: 20,
  },
  alignPlaceholder: {
    textAlign: 'left',
    borderColor: 'rgba(248,118,97,1)',
  },
});
