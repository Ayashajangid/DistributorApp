import {Image, SafeAreaView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import AdaptiveButton from '../../../components/AdaptiveButton';
import Spacer from '../../../components/Spacer';
import KeyboardAvoidingView from '../../../components/Keyboard/KeyboardAvoidingView';
import {AppLocalizedStrings} from '../../../localization/Localization';
import {googleLogin} from '../../../firebaseAuth/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import {hp} from '../../../utility/responsive/responsive';
import {changeRoute, googleData} from '../../../store/action/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginType = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '60604688170-8uvch1mni1tmrip2he9pq7ipmn4bktb5.apps.googleusercontent.com',
    });
  }, []);
  const onPressHandler = type => {
    type == 'SignUp'
      ? navigation.navigate('SignUpScreen')
      : navigation.navigate('LoginScreen');
  };
  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('userLogin', jsonValue);
      dispatch(googleData(value));
      dispatch(changeRoute(2));
    } catch (e) {
      console.log(e);
    }
  };
  const Login = async () => {
    try {
      const res = await googleLogin();
      storeData(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?w=1060&t=st=1665510085~exp=1665510685~hmac=6fb47b51bcee39cb4a53010b3a8e259ab74170923c8b0c243b4384d176ed8f4c',
          }}
          style={styles.imageStyle}
        />
        <Spacer height={hp(4)} />
        <AdaptiveButton
          style={styles.buttonStyle}
          title={AppLocalizedStrings.authButton.signUp}
          onPress={() => onPressHandler('SignUp')}
        />
        <Spacer height={hp(3)} />
        <AdaptiveButton
          title={AppLocalizedStrings.authButton.login}
          style={styles.buttonStyle}
          onPress={onPressHandler}
        />
        <Spacer height={hp(3)} />
        <AdaptiveButton
          onPress={Login}
          title={AppLocalizedStrings.authButton.google}
          style={styles.buttonStyle}
          // style={{ alignSelf: 'center'}}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginType;
