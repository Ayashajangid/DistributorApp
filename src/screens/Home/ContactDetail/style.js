import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  topView: {
    paddingTop: hp(7),
    paddingHorizontal: wp(4),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: hp(5),
  },
  contentView: {
    flex: 1,
    backgroundColor: 'red',
    position: 'relative',
    paddingHorizontal: wp(5),
  },
  imageView: {
    zIndex: 1111,
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: 'pink',
    top: -35,
    left: wp(15),
    overflow: 'hidden',
  },
});
