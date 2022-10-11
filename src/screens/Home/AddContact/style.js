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
    width: wp(60),
    alignSelf: 'center',
  },
  textInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    height: 30,
    textAlign: 'left',
    paddingHorizontal: 0,
    borderRadius: 0,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
});
