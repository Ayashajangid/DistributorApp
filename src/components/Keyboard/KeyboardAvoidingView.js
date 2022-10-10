import {StyleSheet} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const KeyboardAvoidingView = props => {
  return (
    <KeyboardAwareScrollView
      bounces={false}
      contentContainerStyle={props.style}
      enableAutomaticScroll={true}
      enableOnAndroid
      extraScrollHeight={20}
      style={styles.screen}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      extraHeight={10}>
      {props.children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAvoidingView;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
