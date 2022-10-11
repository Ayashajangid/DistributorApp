import {Text, SafeAreaView, Image, View} from 'react-native';
import React from 'react';
import KeyboardAvoidingView from '../../../components/Keyboard/KeyboardAvoidingView';
import {styles} from './style';
import {useSelector} from 'react-redux';
import Spacer from '../../../components/Spacer';
import {hp} from '../../../utility/responsive/responsive';

const AccountScreen = () => {
  const res = useSelector(state => state.google.data);
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.mainContainer}>
        <View style={styles.itemCenterView}>
          <Image
            style={{width: 100, height: 100, borderRadius: 100}}
            source={{uri: res.user.photoURL}}
          />
          <Spacer height={hp(1)} />
          <Text style={styles.userName}>{res.user.displayName}</Text>
          <Spacer height={hp(1)} />
          <Text style={styles.userEmail}>{res.user.email}</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AccountScreen;
