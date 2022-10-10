import {Image, SafeAreaView, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import AdaptiveButton from '../../../components/AdaptiveButton';
import Spacer from '../../../components/Spacer';
import KeyboardAvoidingView from '../../../components/Keyboard/KeyboardAvoidingView';
import {AppLocalizedStrings} from '../../../localization/Localization';

const LoginType = ({navigation}) => {
  const onPressHandler = type => {
    type == 'SignUp'
      ? navigation.navigate('SignUpScreen')
      : navigation.navigate('LoginScreen');
  };
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsH_QjGoSXRxS0Kvh-zaUwTr1QH5_e7WWFQ&usqp=CAU',
          }}
          style={{width: 250, height: 250}}
        />
        <Spacer height={20} />
        <AdaptiveButton
          title={AppLocalizedStrings.authButton.signUp}
          onPress={() => onPressHandler('SignUp')}
        />
        <Spacer height={20} />
        <AdaptiveButton
          title={AppLocalizedStrings.authButton.login}
          onPress={onPressHandler}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginType;
