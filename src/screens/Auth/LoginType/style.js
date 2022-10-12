import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: hp(4),
    marginHorizontal: wp(5),
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
  buttonStyle: {
    backgroundColor: 'rgba(235,120,0,1)',
  },
});
