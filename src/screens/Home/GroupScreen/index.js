import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style';
import GroupList from '../../../components/GroupList';
import { useDispatch } from 'react-redux';
import { changeRoute } from '../../../store/action/actions';
import KeyboardAvoidingView from '../../../components/Keyboard/KeyboardAvoidingView';
import AdaptiveIconButton from '../../../components/AdaptiveIconButton';
import AdaptiveButton from '../../../components/AdaptiveButton';
import { hp, wp } from '../../../utility/responsive/responsive';
import Spacer from '../../../components/Spacer';
import AddGroupModel from '../../../Model/AddGroupModel';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { logout } from '../../../firebaseAuth/auth';

const GroupScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const newGroupHandler = () => {
    setIsVisible(true);
  };

  const logoutHandler = async () => {
    const res = logout();
    await AsyncStorage.removeItem('userLogin');
    dispatch(changeRoute(1));
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.mainContainer}>
          <View style={styles.headerView}>
            <Text style={styles.groupTitle}>You are all settled up!</Text>
            {/* <Icon name="sliders-h" color="#000" size={22} /> */}
          </View>
          <View>
            <GroupList />
          </View>
          <AdaptiveIconButton
            title="Start a new group"
            icon="person-add"
            iconColor="#17a57f"
            iconSize={20}
            style={styles.buttonStyle}
            onPress={newGroupHandler}
          />
          <Spacer height={hp(3)} />
          <AddGroupModel
            isVisible={isVisible}
            onPress={() => setIsVisible(false)}
          />
        </KeyboardAvoidingView>
      </View>
      <View style={styles.addExpenseSection}>
        <TouchableOpacity style={styles.addExpenseBtn} onPress={() => navigation.navigate('AddExpense')}>
          <Icon name="file-alt" color="#fff" size={22} />
          <Text style={styles.expenseTitle}>Add expense</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GroupScreen;
