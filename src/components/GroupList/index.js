import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import Spacer from '../Spacer';
import {hp, wp} from '../../utility/responsive/responsive';
import AdaptiveIconButton from '../AdaptiveIconButton';
import AddGroupModel from '../../Model/AddGroupModel';

const GroupList = props => {
  const renderData = item => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ContactDetailScreen', {item})}
        style={styles.groupOuterSection}>
        <View style={{width: wp(30)}}>
          <Image
            style={{width: 90, height: 90, borderRadius: 10}}
            source={require('../../images/white-plane.png')}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.groupName}>{item.groupName}</Text>
          <Spacer height={hp(1)} />
          <Text style={styles.groupType}>{item.groupType}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <Spacer height={hp(3)} />
      {props.groupData?.length > 0 ? (
        <FlatList
          data={props.groupData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => renderData(item)}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={() => {
            return (
              <>
                <AdaptiveIconButton
                  title="Start a new group"
                  icon="person-add"
                  iconColor="#17a57f"
                  iconSize={20}
                  style={styles.buttonStyle}
                  onPress={props.newGroupHandler}
                />
              </>
            );
          }}
        />
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
          <AdaptiveIconButton
            title="Start a new group"
            icon="person-add"
            iconColor="#17a57f"
            iconSize={20}
            style={styles.buttonStyle}
            onPress={props.newGroupHandler}
          />
          <Spacer height={hp(3)} />
        </View>
      )}
      <AddGroupModel
        isVisible={props.isVisible}
        onPress={() => props.setIsVisible(false)}
      />
    </>
  );
};

export default GroupList;
