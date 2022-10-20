import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Spacer from '../../Spacer';
import {wp} from '../../../utility/responsive/responsive';
import {styles} from './style';

const GroupFriendEmpty = props => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={props.onPress}>
      <View style={styles.iconView}>
        <MaterialIcons name="group-add" size={20} color="#000" />
      </View>
      <Spacer width={wp(3)} />
      <Text style={styles.textStyle}>Add group members</Text>
    </TouchableOpacity>
  );
};

export default GroupFriendEmpty;
