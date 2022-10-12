import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';
import Spacer from '../../../components/Spacer';
import { hp, wp } from '../../../utility/responsive/responsive';
import SelectBox from '../../../components/SelectBox';
import {addExpense} from '../../../store/action/actions';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddExpense = ({ navigation, route }) => {
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [selectedValue, setSelectedValue] = useState("select");
  const [selectedGroupData, setSelectedGroupData] = useState({})
  const [groupData, setGroupData] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    route?.params?.item && renderFunction()
  },[navigation])

  const renderFunction = async() => {
    const jsonValue = await AsyncStorage.getItem('groupData');
    let selectVal = JSON.parse(jsonValue).find((item) => JSON.stringify(item) === JSON.stringify(route.params.item))
    setGroupData(JSON.parse(jsonValue))
    setSelectedValue(selectVal.groupName)
    setSelectedGroupData(selectVal)
  }

  const handleExpenseData = async() => {
    let expenseData = {
      desc: desc,
      price: price,
      selectGroup: selectedValue
    }
    let PaymentData = [...selectedGroupData.payments, expenseData]
    console.log('groupData:: ', PaymentData)
    // dispatch(addExpense(expenseData))
    // navigation.goBack()
  }
  return (
    <SafeAreaView
      style={{paddingHorizontal: 10, backgroundColor: '#fff', flex: 1}}>
      <View style={styles.rowView}>
        <View style={styles.innerRowView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" color="black" size={28} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Add expense</Text>
        </View>
        <TouchableOpacity onPress={() => handleExpenseData()}>
          <Icon name="checkmark" color="black" size={28} />
        </TouchableOpacity>
      </View>
      <Spacer height={hp(3)} />
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: '#000', marginLeft: 10 }}>With you and : </Text>
          <SelectBox setSelectedValue={setSelectedValue} selectedValue={selectedValue} />
        </View>
        <Spacer height={hp(1)} />
        <View
          style={{
            marginHorizontal: wp(10),
            width: wp(100),
          }}>
          <View style={styles.detailSection}>
            <View style={styles.iconStyle}>
              <Icon name="file-tray-full-outline" color="black" size={28} />
            </View>
            <View style={{backgroundColor: '#fff'}}>
              <TextInput
                value={desc}
                onChangeText={text => setDesc(text)}
                placeholder="Enter a description"
                underlineColor="#13a67f"
                activeUnderlineColor="#13a67f"
                style={{
                  backgroundColor: '#fff',
                  height: hp(7),
                  width: wp(50),
                }}
              />
            </View>
          </View>
          <Spacer height={hp(1)} />
          <View style={styles.detailSection}>
            <View style={styles.iconStyle}>
              <IconFontAwesome name="inr" color="black" size={28} />
            </View>
            <View style={{backgroundColor: '#fff'}}>
              <TextInput
                value={price}
                onChangeText={text => setPrice(text)}
                placeholder="0.00"
                keyboardType="numeric"
                underlineColor="#13a67f"
                activeUnderlineColor="#13a67f"
                style={{
                  backgroundColor: '#fff',
                  height: hp(7),
                  width: wp(50),
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AddExpense