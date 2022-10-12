import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';
import Spacer from '../../../components/Spacer';
import {hp, wp} from '../../../utility/responsive/responsive';

const AddExpense = ({navigation}) => {
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');

  const handleExpenseData = () => {
    let expenseData = {
      desc: desc,
      price: price,
    };
    navigation.goBack();
  };
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
        <Text style={{fontSize: 15, color: '#000', marginLeft: 10}}>
          With you and :{' '}
        </Text>
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
  );
};

export default AddExpense;
