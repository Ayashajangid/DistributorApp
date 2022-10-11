import {Image, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
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
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsH_QjGoSXRxS0Kvh-zaUwTr1QH5_e7WWFQ&usqp=CAU',
          }}
          style={styles.imageStyle}
        />
        <Spacer height={hp(3)} />
        <AdaptiveButton
          title={AppLocalizedStrings.authButton.signUp}
          onPress={() => onPressHandler('SignUp')}
        />
        <Spacer height={hp(3)} />
        <AdaptiveButton
          title={AppLocalizedStrings.authButton.login}
          onPress={onPressHandler}
        />
        <Spacer height={hp(3)} />
        <AdaptiveButton
          onPress={Login}
          title={AppLocalizedStrings.authButton.google}
          // style={{ alignSelf: 'center'}}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginType;
