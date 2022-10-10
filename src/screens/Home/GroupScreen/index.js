import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './style';
import GroupList from '../../../components/GroupList';
import {useDispatch} from 'react-redux';
import {changeRoute} from '../../../store/action/actions';
import KeyboardAvoidingView from '../../../components/Keyboard/KeyboardAvoidingView';
import AdaptiveIconButton from '../../../components/AdaptiveIconButton';
import AdaptiveButton from '../../../components/AdaptiveButton';
import {hp, wp} from '../../../utility/responsive/responsive';
import Spacer from '../../../components/Spacer';
import AddGroupModel from '../../../Model/AddGroupModel';
import Icon from 'react-native-vector-icons/FontAwesome5';

const GroupScreen = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const newGroupHandler = () => {
    setIsVisible(true);
  };

  const logoutHandler = () => {
    removeData();
  };
  const removeData = async () => {
    await AsyncStorage.removeItem('userLogin');
    dispatch(changeRoute(1));
  };
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.mainContainer}>
        <View style={styles.headerView}>
          <Text style={styles.groupTitle}>You are all settled up!</Text>
          <Icon name="sliders-h" color="#000" size={22} />
        </View>
        <View>
          <GroupList />
        </View>
        <AdaptiveIconButton
          title="Start a new group"
          icon="person-add"
          iconColor="white"
          iconSize={20}
          style={styles.buttonStyle}
          onPress={newGroupHandler}
        />
        <Spacer height={hp(3)} />
        <AdaptiveButton
          onPress={logoutHandler}
          title="Logout"
          style={{width: wp(60), alignSelf: 'center'}}
        />
        <AddGroupModel
          isVisible={isVisible}
          onPress={() => setIsVisible(false)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default GroupScreen;
