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
    backgroundColor: '#fff',
    position: 'relative',
    paddingHorizontal: wp(5),
  },
  imageView: {
    zIndex: 1111,
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 100,
    top: -35,
    left: wp(15),
    overflow: 'hidden',
  },
  textStyle: {
    fontSize: 25
  },
  addExpenseSection: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addExpenseBtn: {
    backgroundColor: '#17a57f',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 50,
    flexDirection: 'row',
  },
  expenseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
});
