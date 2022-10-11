import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './style';

const TextFilterIconView = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.groupTitle}>You are all settled up!</Text>
      <Icon name="sliders-h" color="#000" size={22} />
    </View>
  );
};

export default TextFilterIconView;
