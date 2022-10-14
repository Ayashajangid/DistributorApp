import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './style';
import GroupList from '../../../components/GroupList';
import {useDispatch} from 'react-redux';
import {changeRoute, addGroup} from '../../../store/action/actions';
import Icon from 'react-native-vector-icons/FontAwesome5';

const GroupScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [groupData, setGroupData] = useState([]);
  useEffect(() => {
    getRenderData();
  }, [navigation, isVisible]);

  const getRenderData = async () => {
    const jsonValue = await AsyncStorage.getItem('groupData');
    setGroupData(JSON.parse(jsonValue));
    dispatch(addGroup(JSON.parse(jsonValue)));
  };

  const newGroupHandler = () => {
    setIsVisible(true);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{flex: 1}}>
        <View style={styles.mainContainer}>
          <View style={styles.headerView}>
            <Text style={styles.groupTitle}>You are all settled up!</Text>
            <Icon name="sliders-h" color="#000" size={22} />
          </View>
          <GroupList
            navigation={navigation}
            groupData={groupData}
            newGroupHandler={newGroupHandler}
            setIsVisible={setIsVisible}
            isVisible={isVisible}
          />
          {/* <AdaptiveIconButton
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
          /> */}
        </View>
      </View>
      <View style={styles.addExpenseSection}>
        <TouchableOpacity
          style={styles.addExpenseBtn}
          onPress={() => navigation.navigate('AddExpense')}>
          <Icon name="file-alt" color="#fff" size={22} />
          <Text style={styles.expenseTitle}>Add expense</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GroupScreen;
