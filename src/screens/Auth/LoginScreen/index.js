import {Image, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import AdaptiveButton from '../../../components/AdaptiveButton';
import AdaptiveTextInput from '../../../components/AdaptiveTextInput';
import Spacer from '../../../components/Spacer';
import KeyboardAvoidingView from '../../../components/Keyboard/KeyboardAvoidingView';
import {AppLocalizedStrings} from '../../../localization/Localization';
import {useDispatch} from 'react-redux';
import {changeRoute} from '../../../store/action/actions';
import {hp} from '../../../utility/responsive/responsive';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [nameEmail, setnameEmail] = useState('');
  const [password, setPassword] = useState();

  const nameEmailHandler = n => {
    setnameEmail(n);
  };
  const passwordHandler = p => {
    setPassword(p);
  };

  const storeData = async value => {
    value = {nameEmail: nameEmail, password: password};
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('userLogin', jsonValue);
      dispatch(changeRoute(2));
    } catch (e) {
      console.log(e);
    }
  };

  const onPressHandler = () => {
    storeData();
  };

  const disableHandler = () => {
    if (nameEmail && password) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container}>
        <Spacer height={hp(4)} />
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?size=338&ext=jpg&ga=GA1.2.1599401084.1665473402',
          }}
          style={{width: 250, height: 250}}
        />
        <Spacer height={hp(8)} />
        <AdaptiveTextInput
          placeholder={AppLocalizedStrings.login.emailAndNumber}
          value={nameEmail}
          onChangeText={nameEmailHandler}
          style={styles.inputStyle}
        />
        <Spacer height={hp(3)} />
        <AdaptiveTextInput
          placeholder={AppLocalizedStrings.login.password}
          value={password}
          secureTextEntry={true}
          onChangeText={passwordHandler}
          style={styles.inputStyle}
        />
        <Spacer height={hp(3)} />
        <AdaptiveButton
          title={AppLocalizedStrings.authButton.login}
          disable={disableHandler()}
          style={{
            opacity: disableHandler() ? 0.5 : 1,
            backgroundColor: 'rgba(248,118,97,1)',
          }}
          onPress={onPressHandler}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
