import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';

const GroupFriendView = props => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.textStyle}>{props.item?.name.slice(0, 2)}</Text>
    </View>
  );
};

export default GroupFriendView;
