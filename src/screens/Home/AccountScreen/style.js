import {StyleSheet} from 'react-native';
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
  },
  itemCenterView: {
    alignItems: 'center',
    marginVertical: hp(2),
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  userEmail: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
