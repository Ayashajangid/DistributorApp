import {View, Text, FlatList, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../../utility/responsive/responsive';
import Spacer from '../Spacer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ConfirmationModel from '../../Model/ConfirmationModel';
import {activity, addContact, deleteExpense} from '../../store/action/actions';
import {useDispatch} from 'react-redux';
import * as utils from '../../common/Utils';
import {styles} from './style';

const NewList = props => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectItem, setSelectItem] = useState({});
  const [obj, setObj] = useState({});
  const dispatch = useDispatch();
  const renderData = item => {
    return (
      <View style={styles.renderView}>
        <View style={styles.dateView}>
          <Text style={{fontSize: 12}}>
            {utils.dateFormat('MMM', item.createdAt)}
          </Text>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {utils.dateFormat('DD', item.createdAt)}
          </Text>
        </View>
        <Spacer width={wp(4)} />
        <View style={styles.middleView}>
          <Text style={{fontSize: 20, color: '#000'}}>{item.desc}</Text>
          <Spacer height={hp(0.1)} />
          <Text style={{fontSize: 14, color: '#000'}}>
            You paid {` `}${item.price}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => RemovePayment(item.paymentId, props.index, item)}>
          <Icon name="delete" color="#ccc" size={30} />
        </TouchableOpacity>
      </View>
    );
  };
  const RemovePayment = (id, index, item) => {
    setIsVisible(!isVisible);
    setSelectItem({id, index});
    setObj({
      ...item,
      action: 'deleted',
      deletedAt: utils.dateFormat('MMMM-DD-YYYY, h:mm:ss a'),
    });
  };
  const OnSubmitFunction = async val => {
    if (val == 'YES') {
      setIsVisible(!isVisible);
      dispatch(activity(obj));
      dispatch(deleteExpense(selectItem));
    } else {
      setIsVisible(!isVisible);
    }
  };
  return (
    <>
      <Spacer height={hp(3)} />
      <FlatList
        data={props?.data?.payments}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.lineStyle} />}
        renderItem={({item}) => renderData(item)}
      />
      <ConfirmationModel
        title="Are you sure?"
        submitBtn="YES"
        isVisible={isVisible}
        onSubmitBtn={val => OnSubmitFunction(val)}
        cancelBtn="NO"
      />
      <Spacer height={hp(5)} />
    </>
  );
};

export default NewList;
