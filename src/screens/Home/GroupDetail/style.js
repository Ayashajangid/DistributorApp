import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'rgba(31,46,67,1)',
  },
  topView: {
    paddingTop: hp(7),
    paddingHorizontal: wp(4),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingBottom: hp(5),
  },
  contentView: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(31,46,67,1)',
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
    fontSize: 25,
    color: '#fff',
    fontWeight: '600',
  },
  typeStyle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '400',
  },
  addExpenseSection: {
    position: 'absolute',
    bottom: 60,
    right: 30,
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
  imageStyle: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
