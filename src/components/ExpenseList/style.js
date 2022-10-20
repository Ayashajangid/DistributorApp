import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utility/responsive/responsive';

export const styles = StyleSheet.create({
  expenseSection: {
    flexDirection: 'row',
    paddingVertical: hp(1),
  },
  expenseInnerSection: {
    flexDirection: 'row',
    flex: 2,
  },
  dateSection: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  detailSection: {
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  desc: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  deleteBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  monthYearText: {
    fontSize: 11,
    color: '#000',
  },
  priceText: {
    fontSize: 14,
    color: '#fff',
  },
  itemSeparator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.3,
    marginVertical: hp(0.9),
  },
});
