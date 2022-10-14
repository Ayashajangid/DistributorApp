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
import {addContact, addGroup} from '../../../store/action/actions';

const AddExpense = ({navigation, route}) => {
  const groupName = route?.params?.item?.groupName;
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [selectedValue, setSelectedValue] = useState('select');
  const [groupData, setGroupData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    route?.params?.item && renderFunction();
  }, [navigation]);

  const renderFunction = async () => {
    const jsonValue = await AsyncStorage.getItem(
      groupName != undefined ? 'groupData' : 'friendData',
    );
    if (jsonValue != null) {
      setGroupData(JSON.parse(jsonValue));
    }
    setSelectedValue(
      route?.params?.item?.groupName ?? route?.params?.item?.name,
    );
  };

  const handleExpenseData = async () => {
    let expenseData = {
      paymentId: uuid.v4(),
      desc: desc,
      price: price,
      selectGroup: selectedValue,
      createdAt: new Date(),
    };
    let expenseGroupData = groupData.map(item => {
      if (item.uniqueId === route.params.item.uniqueId) {
        item.payments.push(expenseData);
      }
      return item;
    });
    await AsyncStorage.setItem(
      groupName != undefined ? 'groupData' : 'friendData',
      JSON.stringify(expenseGroupData),
    );
    dispatch(addContact(expenseGroupData));
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
