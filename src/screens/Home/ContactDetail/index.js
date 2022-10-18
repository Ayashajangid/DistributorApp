import {
  View,
  StatusBar,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {hp, wp} from '../../../utility/responsive/responsive';
import Spacer from '../../../components/Spacer';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {deleteContact} from '../../../store/action/actions';
import {AppLocalizedStrings} from '../../../localization/Localization';
import NewList from '../../../components/NewList';

const ContactDetailScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [price, setprice] = useState();
  const {item, index} = route?.params;
  // const group = route?.params?.item?.groupName;
  // const groupData = useSelector(state => state.group.group);
  const contactData = useSelector(state => state.contact.contact);
  let data = contactData[index];
  // ?.find(
  //   item => item?.uniqueId === route?.params?.item?.uniqueId,
  // );
  useEffect(() => {
    let rupees = data?.payments?.reduce(
      (acc, val) => acc + Number(val.price),
      0,
    );
    setprice(rupees);
  }, [contactData]);

  const deleteHandler = () => {
    dispatch(deleteContact(index));
    navigation.goBack();
  };
  const editHandler = () => {
    navigation.navigate(AppLocalizedStrings.screen.addContact, {item, index});
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.screen}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <ImageBackground source={require('../../../images/backgroud.jpg')}>
          <View style={styles.topView}>
            <View style={styles.rowView}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{flex: 1}}>
                <Icon name="arrow-back" size={30} color="#ffff" />
              </TouchableOpacity>
              {/* <Icon name="settings-outline" size={25} color="#ffff" /> */}
              <TouchableOpacity onPress={deleteHandler}>
                <CommunityIcons name="delete" size={25} color="#ffff" />
              </TouchableOpacity>
              <Spacer width={wp(6)} />
              <TouchableOpacity onPress={editHandler}>
                <CommunityIcons
                  name="square-edit-outline"
                  size={25}
                  color="#ffff"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.contentView}>
          <View style={styles.imageView}>
            <Image
              style={styles.imageStyle}
              source={require('../../../images/images.jpg')}
            />
          </View>
          <View style={{marginTop: hp(45 / 8), marginLeft: wp(11)}}>
            <Text style={styles.textStyle}>{item?.name}</Text>
            <Spacer height={hp(1)} />
            <Text style={{color: '#000'}}>
              {!price ? (
                <Text style={styles.typeStyle}>You are settled up</Text>
              ) : (
                <Text>
                  {`${item?.name} owes you `}
                  <Text style={styles.greenText}> ${price}</Text>
                </Text>
              )}
            </Text>
          </View>
          <NewList data={data} index={index} />
        </View>
      </View>
      <View style={styles.addExpenseSection}>
        <TouchableOpacity
          style={styles.addExpenseBtn}
          onPress={() => navigation.navigate('AddExpense', {item, index})}>
          <FontIcon name="file-alt" color="#fff" size={22} />
          <Text style={styles.expenseTitle}>Add expense</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactDetailScreen;
