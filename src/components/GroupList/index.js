import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { styles } from './style';
import { useSelector } from 'react-redux';
import Spacer from '../Spacer';
import { hp, wp } from '../../utility/responsive/responsive';

const GroupList = () => {
  const groupData = useSelector(state => state.group.group);

  const renderData = (item) => {
    return (
      <View style={styles.groupOuterSection}>
        <View style={{ width: wp(30) }}>
          <Image
            style={{ width: 100, height: 90, borderRadius: 15 }}
            source={require('../../images/white-plane.png')}
            resizeMode='contain'
          />
        </View>
        <View >
          <Text style={styles.groupName}>{item.groupName}</Text>
          <Spacer height={hp(1)} />
          <Text style={styles.groupType}>{item.groupType}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Spacer height={hp(3)} />
      {groupData.length > 0 ? (
        <View>
          <FlatList data={groupData}
            renderItem={({ item }) => renderData(item)}
          />
          <Spacer height={hp(3)} />
        </View>
      ) : (
        <View>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWQPV6xzAZwNUIg3kCtw7PcTl1wTEmqYMgA&usqp=CAU',
            }}
            style={{ width: 300, height: 300 }}
          />
          <Text style={styles.subHeading}>No friends to show.</Text>
          <Spacer height={hp(3)} />
        </View>
      )}
    </View>
  );
};

export default GroupList;
