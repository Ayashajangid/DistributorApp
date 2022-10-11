import {Text, SafeAreaView, Image, View} from 'react-native';
import React from 'react';
import KeyboardAvoidingView from '../../../components/Keyboard/KeyboardAvoidingView';
import {styles} from './style';
import {useSelector} from 'react-redux';
import Spacer from '../../../components/Spacer';
import {hp, wp} from '../../../utility/responsive/responsive';
import AdaptiveButton from '../../../components/AdaptiveButton';
import {logout} from '../../../firebaseAuth/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changeRoute} from '../../../store/action/actions';
import {useDispatch} from 'react-redux';


const AccountScreen = () => {
  const res = useSelector(state => state.google.data);
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    const res = logout();
    await AsyncStorage.removeItem('userLogin');
    dispatch(changeRoute(1));
  };
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
        <AdaptiveButton
          onPress={logoutHandler}
          title="Logout"
          style={{width: wp(60), alignSelf: 'center'}}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AccountScreen;
