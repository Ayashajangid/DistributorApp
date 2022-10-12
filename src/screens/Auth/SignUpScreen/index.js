import {Text, SafeAreaView, View, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import AdaptiveButton from '../../../components/AdaptiveButton';
import AdaptiveTextInput from '../../../components/AdaptiveTextInput';
import Spacer from '../../../components/Spacer';
import KeyboardAvoidingView from '../../../components/Keyboard/KeyboardAvoidingView';
import {AppLocalizedStrings} from '../../../localization/Localization';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?size=338&ext=jpg&ga=GA1.2.1599401084.1665473402',
          }}
          style={{width: 250, height: 250}}
        />
        <Spacer height={20} />
        <AdaptiveTextInput
          placeholder={AppLocalizedStrings.signUp.enterYourName}
          style={styles.alignPlaceholder}
        />
        <Spacer height={20} />
        <AdaptiveTextInput
          placeholder={AppLocalizedStrings.signUp.enterYourEmail}
          style={styles.alignPlaceholder}
        />
        <Spacer height={20} />
        <AdaptiveTextInput
          placeholder={AppLocalizedStrings.signUp.createPassword}
          style={styles.alignPlaceholder}
          secureTextEntry={true}
        />
        <Spacer height={20} />
        <AdaptiveButton
          title={AppLocalizedStrings.authButton.signUp}
          style={{backgroundColor: 'rgba(248,118,97,1)'}}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
