import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import KeyboardAvoidingView from '../../../components/Keyboard/KeyboardAvoidingView';
import {styles} from './style';
import Spacer from '../../../components/Spacer';
import {hp} from '../../../utility/responsive/responsive';
import AdaptiveTextInput from '../../../components/AdaptiveTextInput';
import AdaptiveButton from '../../../components/AdaptiveButton';
import {useDispatch} from 'react-redux';
import {addContact} from '../../../store/action/actions';
// https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?size=338&ext=jpg&ga=GA1.2.1599401084.1665473402

const AddContact = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [numEmail, setNumEmail] = useState('');
  const addNewContact = () => {
    const value = {name, numEmail};
    dispatch(addContact(value));
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.mainContainer}>
        <>
          <Text style={styles.title}>Name</Text>
          <AdaptiveTextInput
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
            style={styles.textInput}
            value={numEmail}
            onChangeText={t => setNumEmail(t)}
          />
        </>
        <Spacer height={hp(3)} />
        <Text>
          Don't worry, nothing sends just yet. You will have another chance to
          review before sending.
        </Text>
        <Spacer height={hp(3)} />
        <AdaptiveButton title="Save" onPress={addNewContact} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddContact;
