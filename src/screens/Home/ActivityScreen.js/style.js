import {StyleSheet, Text, View} from 'react-native';
import {hp, wp} from '../../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: wp(5),
    paddingTop: hp(2),
  },
  activityText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: 55,
    height: 55,
    position: 'relative',
  },
  roundImage: {
    position: 'absolute',
    width: 35,
    height: 35,
    borderRadius: 100,
    right: -12,
    bottom: -12,
    overflow: 'hidden',
  },
  imageStyle: {
    width: 35,
    height: 35,
    resizeMode: 'cover',
  },
  firstLine: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  centerText: {
    color: 'rgba(50,150,110,1)',
    fontSize: 15,
  },
  timeStyle: {
    fontSize: 14,
    color: '#797A7E',
  },
});
