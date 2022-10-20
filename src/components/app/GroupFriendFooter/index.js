import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {wp} from '../../../utility/responsive/responsive';
import Spacer from '../../Spacer';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';

const GroupFriendFooter = props => {
  return (
    <View style={styles.mainView}>
      {props?.item.friendList.length > 3 && (
        <>
          <Spacer width={wp(1)} />
          <Text style={styles.dots}>
            ...
            <Text style={styles.countText}>
              {props?.item?.friendList?.length > 3
                ? props?.item?.friendList?.length - 3
                : null}{' '}
            </Text>
            <Text style={styles.moreText}>more</Text>
          </Text>
        </>
      )}
      <Spacer width={wp(3)} />
      <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
        <CommunityIcons name="plus" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default GroupFriendFooter;
