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
    } catch (e) {
      console.log(e);
    }
  };

  const onPressHandler = () => {
    storeData();
    dispatch(changeRoute(2));
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
      <TouchableWithoutFeedback>
        <KeyboardAvoidingView style={styles.container}>
          <Spacer height={hp(4)} />
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsH_QjGoSXRxS0Kvh-zaUwTr1QH5_e7WWFQ&usqp=CAU',
            }}
            style={{width: 250, height: 250}}
          />
          <Spacer height={hp(8)} />
          <AdaptiveTextInput
            placeholder={AppLocalizedStrings.login.emailAndNumber}
            value={nameEmail}
            onChangeText={nameEmailHandler}
            style={{textAlign: 'left'}}
          />
          <Spacer height={hp(3)} />
          <AdaptiveTextInput
            placeholder={AppLocalizedStrings.login.password}
            value={password}
            onChangeText={passwordHandler}
            style={{textAlign: 'left'}}
          />
          <Spacer height={hp(3)} />
          <AdaptiveButton
            title={AppLocalizedStrings.authButton.login}
            disable={disableHandler()}
            style={{opacity: disableHandler() ? 0.5 : 1}}
            onPress={onPressHandler}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;
