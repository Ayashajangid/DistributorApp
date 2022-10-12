import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { styles } from './style';
import Spacer from '../Spacer';
import { hp, wp } from '../../utility/responsive/responsive';

const GroupList = (props) => {
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
      {props.groupData?.length > 0 ? (
        <View>
          <FlatList data={props.groupData}
            renderItem={({ item }) => renderData(item)}
            keyExtractor={(item, index) => index.toString()}
          />
          <Spacer height={hp(3)} />
        </View>
      ) : (
        <View>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?size=626&ext=jpg&ga=GA1.2.1599401084.1665473402',
            }}
            style={{width: 250, height: 250, alignSelf: 'center'}}
          />
          <Text style={styles.subHeading}>No friends to show.</Text>
          <Spacer height={hp(3)} />
        </View>
      )}
    </View>
  );
};

export default GroupList;
