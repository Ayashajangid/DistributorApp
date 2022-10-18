import {SafeAreaView, View, Text, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';
import Spacer from '../../../components/Spacer';
import {hp, wp} from '../../../utility/responsive/responsive';
import SelectBox from '../../../components/SelectBox';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import KeyboardAvoidingView from '../../../components/Keyboard/KeyboardAvoidingView';
import AdaptiveButton from '../../../components/AdaptiveButton';
import uuid from 'react-native-uuid';
import {activity, addContact, addExpense} from '../../../store/action/actions';
import * as utils from '../../../common/Utils';

const AddExpense = ({navigation, route}) => {
  const name = route?.params?.item?.name;
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [selectedValue, setSelectedValue] = useState('select');
  const dispatch = useDispatch();

  useEffect(() => {
    route?.params?.item && renderFunction();
  }, [navigation]);

  const renderFunction = async () => {
    setSelectedValue(name);
  };

  const activityData = async data => {
    data.action = 'added';
    Object.keys(route.params.item).map(
      item => item != 'payments' && (data[item] = route.params.item[item]),
    );
    dispatch(activity(data));
  };

  const handleExpenseData = async () => {
    let expenseData = {
      paymentId: uuid.v4(),
      desc: desc,
      price: price,
      createdAt: utils.dateFormat('MMMM-DD-YYYY, h:mm:ss a'),
    };
    dispatch(addExpense(expenseData, route?.params?.index));
    activityData(expenseData);
    setSelectedValue('select');
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.mainView}>
        <View style={styles.rowView}>
          <Text style={styles.withText}>With you and :</Text>
          {route?.params?.item ? (
            <Text style={styles.withText}>{selectedValue}</Text>
          ) : (
            <View
              style={
                Platform.OS == 'ios'
                  ? {postion: 'absolute', top: -22, left: 20}
                  : null
              }>
              <SelectBox
                setSelectedValue={setSelectedValue}
                selectedValue={selectedValue}
              />
            </View>
          )}
        </View>
        <Spacer height={hp(3)} />
        <View
          style={{
            alignSelf: 'center',
          }}>
          <View style={styles.detailSection}>
            <View style={styles.iconStyle}>
              <Icon name="file-tray-full-outline" color="black" size={28} />
            </View>
            <Spacer width={wp(4)} />
            <View>
              <TextInput
                value={desc}
                onChangeText={text => setDesc(text)}
                placeholder="Enter a description"
                activeUnderlineColor="#13a67f"
                style={styles.textInput}
              />
            </View>
          </View>
          <Spacer height={hp(2)} />
          <View style={styles.detailSection}>
            <View style={styles.iconStyle}>
              <IconFontAwesome name="inr" color="black" size={28} />
            </View>
            <Spacer width={wp(4)} />
            <View style={{backgroundColor: '#fff', height: 50}}>
              <TextInput
                value={price}
                onChangeText={text => setPrice(text)}
                placeholder="0.00"
                keyboardType="numeric"
                activeUnderlineColor="#13a67f"
                style={styles.textInput}
              />
            </View>
          </View>
        </View>
        <Spacer height={hp(4)} />
        <AdaptiveButton
          onPress={() => handleExpenseData()}
          title="Save"
          style={{width: wp(65), alignSelf: 'center'}}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddExpense;
