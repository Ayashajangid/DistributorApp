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
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsH_QjGoSXRxS0Kvh-zaUwTr1QH5_e7WWFQ&usqp=CAU',
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
        <AdaptiveButton title={AppLocalizedStrings.authButton.signUp} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
