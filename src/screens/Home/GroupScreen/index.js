import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './style';
import GroupList from '../../../components/GroupList';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

const GroupScreen = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [groupData, setGroupData] = useState([]);
  const groupDetail = useSelector(state => state.group.group);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getRenderData();
    });
    getRenderData()
    return unsubscribe;
  }, [navigation, isVisible]);

  const getRenderData = async () => {
    setGroupData(groupDetail);
  };

  const newGroupHandler = () => {
    setIsVisible(true);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ flex: 1 }}>
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
