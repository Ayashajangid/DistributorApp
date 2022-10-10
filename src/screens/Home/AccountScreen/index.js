import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import KeyboardAvoidingView from '../../../components/Keyboard/KeyboardAvoidingView';
import {styles} from './style';

const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.mainContainer}>
        <Text>Account Screen</Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AccountScreen;
