import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import GroupList from '../../components/GroupList';
import {styles} from './style';

const GroupScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.groupTitle}>You are all settled up!</Text>
      <View>
        <GroupList />
        <Spacer height={hp(10)} />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            padding: 15,
            borderColor: '#000',
            borderWidth: 1,
            flexDirection: 'row',
          }}>
          <Image
            style={{width: 20, height: 20, marginRight: 5}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/359/359657.png',
            }}
          />
          <Text>Add more friends</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GroupScreen;
