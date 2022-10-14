import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import KeyboardAvoidingView from '../../../components/Keyboard/KeyboardAvoidingView';
import {styles} from './style';
import Spacer from '../../../components/Spacer';
import {hp} from '../../../utility/responsive/responsive';
import AdaptiveTextInput from '../../../components/AdaptiveTextInput';
import AdaptiveButton from '../../../components/AdaptiveButton';
import {useDispatch} from 'react-redux';
import {addContact, editContact} from '../../../store/action/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const AddContact = ({navigation, route}) => {
  const user = route?.params;
  const image =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOU8JiOKwUBoiyb4sq_p_QO0zrtIYEgdGdA&usqp=CAU';
  const dispatch = useDispatch();
  const [name, setName] = useState(user?.item?.name ?? '');
  const [numEmail, setNumEmail] = useState(user?.item?.numEmail ?? '');

  const addNewContact = async () => {
    let uniqueId = uuid.v4();
    const value = {name, numEmail, uniqueId, image, payments: []};
    let allFriendData = [];
    try {
      let jsonValue = await AsyncStorage.getItem('friendData');
      jsonValue = JSON.parse(jsonValue);
      if (jsonValue != null) {
        allFriendData = [...jsonValue, value];
      } else {
        allFriendData = [value];
      }
      await AsyncStorage.setItem('friendData', JSON.stringify(allFriendData));
    } catch (e) {
      console.log('storeData', e);
    }
    dispatch(addContact(value));
    navigation.goBack();
  };
  const updateContact = async () => {
    const value = {
      name,
      numEmail,
      image,
      payments: [],
      uniqueId: user?.item?.uniqueId,
    };
    let jsonValue = await AsyncStorage.getItem('friendData');
    jsonValue = JSON.parse(jsonValue);
    if (jsonValue != null) {
      jsonValue[user.index] = value;
      await AsyncStorage.setItem('friendData', JSON.stringify(jsonValue));
    }
    dispatch(editContact(value, user.index));
    navigation.navigate('FriendsScreen');
  };
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.mainContainer}>
        <>
          <Text style={styles.title}>Name</Text>
          <AdaptiveTextInput
            activeUnderlineColor="#13a67f"
            style={styles.textInput}
            autoFocus={true}
            value={name}
            onChangeText={t => setName(t)}
          />
        </>
        <Spacer height={hp(3)} />
        <>
          <Text style={styles.title}>Phone number or email address</Text>
          <AdaptiveTextInput
            activeUnderlineColor="#13a67f"
            style={styles.textInput}
            value={numEmail}
            onChangeText={t => setNumEmail(t)}
          />
        </>
        <Spacer height={hp(4)} />
        <Text style={styles.summaryBottom}>
          Don't worry, nothing sends just yet. You will have another chance to
          review before sending.
        </Text>
        <Spacer height={hp(3)} />
        {user == undefined ? (
          <AdaptiveButton title="Save" onPress={addNewContact} />
        ) : (
          <AdaptiveButton title="Update" onPress={updateContact} />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddContact;
