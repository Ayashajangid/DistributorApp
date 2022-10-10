import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import {useSelector} from 'react-redux';
import Spacer from '../Spacer';
import {hp} from '../../utility/responsive/responsive';

const GroupList = () => {
  const groupData = useSelector(state => state.group.group);

  const renderData = ({item}) => {
    return (
      <View>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: item.icon,
          }}
        />
        <Text>{item.title}</Text>
        <Text>{item.subTitle}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {groupData.length > 0 ? (
        <FlatList data={groupData} renderItem={({item}) => renderData(item)} />
      ) : (
        <View>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWQPV6xzAZwNUIg3kCtw7PcTl1wTEmqYMgA&usqp=CAU',
            }}
            style={{width: 300, height: 300}}
          />
          <Text style={styles.subHeading}>No friends to show.</Text>
          <Spacer height={hp(3)} />
        </View>
      )}
    </View>
  );
};

export default GroupList;
