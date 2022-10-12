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
    paddingTop: hp(2),
  },
  buttonStyle: {
    backgroundColor: '#ffff',
    width: wp(60),
    alignSelf: 'center',
  },
});
