import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './style';
import KeyboardAvoidingView from '../../../components/Keyboard/KeyboardAvoidingView';

const ActivityScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.mainContainer}>
        <Text>Activity Screen</Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ActivityScreen;
