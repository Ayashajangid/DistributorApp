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

const AddContact = ({navigation}) => {
  const image =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOU8JiOKwUBoiyb4sq_p_QO0zrtIYEgdGdA&usqp=CAU';
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [numEmail, setNumEmail] = useState('');
  const addNewContact = () => {
    const value = {name, numEmail, image};
    dispatch(addContact(value));
    navigation.goBack();
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
        <AdaptiveButton title="Save" onPress={addNewContact} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddContact;
