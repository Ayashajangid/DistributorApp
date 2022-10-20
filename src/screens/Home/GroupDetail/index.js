import {
  View,
  StatusBar,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {hp, wp} from '../../../utility/responsive/responsive';
import Spacer from '../../../components/Spacer';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import ExpenseList from '../../../components/ExpenseList';
import {addGroup} from '../../../store/action/actions';
import ConfirmationModel from '../../../Model/ConfirmationModel';
import AddGroupModel from '../../../Model/AddGroupModel';
import GroupFriendEmpty from '../../../components/app/GroupFriendEmpty';
import GroupFriendFooter from '../../../components/app/GroupFriendFooter';
import GroupFriendView from '../../../components/app/GroupFriendView';

const GroupDetail = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [groupDetail, setGroupDetail] = useState(data);
  const {item} = route?.params;
  const id = item.id;
  const groupData = useSelector(state => state.group.group);
  let data = groupData?.find(item => item?.id === route?.params?.item?.id);

  useEffect(() => {
    setGroupDetail(data);
  }, [data]);

  const deleteHandler = async val => {
    setIsVisible(!isVisible);
    if (val === 'submit') {
      navigation.goBack();
    }
  };
  const updateData = async data => {
    let findIndexData = groupData.findIndex(
      (val, index) => val.id === route?.params?.item?.id,
    );
    groupData[findIndexData] = data;
    setGroupDetail(data);
    dispatch(addGroup(groupData));
  };
  const onPressHandler = () => {
    navigation.navigate('ContactScreen', {id});
  };

  const ListFooterComponent = () => {
    return (
      item.friendList.length > 0 && (
        <GroupFriendFooter item={item} onPress={onPressHandler} />
      )
    );
  };

  const ListEmptyComponent = () => {
    return <GroupFriendEmpty onPress={onPressHandler} />;
  };

  const renderItem = ({item}) => {
    return <GroupFriendView item={item} />;
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.screen}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <ImageBackground source={require('../../../images/backgroud.jpg')}>
          <View style={styles.topView}>
            <View style={styles.rowView}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{flex: 1}}>
                <Icon name="arrow-back" size={30} color="#ffff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsVisible(true)}>
                <CommunityIcons name="delete" size={25} color="#ffff" />
              </TouchableOpacity>
              <Spacer width={wp(6)} />
              <TouchableOpacity onPress={() => setIsModal(true)}>
                <CommunityIcons
                  name="square-edit-outline"
                  size={25}
                  color="#ffff"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.contentView}>
          <View style={styles.imageView}>
            <Image
              style={styles.imageStyle}
              source={require('../../../images/images.jpg')}
            />
          </View>
          <View style={{marginTop: hp(45 / 8), marginLeft: wp(11)}}>
            <View style={styles.nameView}>
              <Text style={styles.textStyle}>{groupDetail?.groupName}</Text>
              <Text style={styles.typeStyle}> ({groupDetail?.groupType})</Text>
            </View>
            <Spacer height={hp(1)} />
            <View>
              <FlatList
                horizontal
                ItemSeparatorComponent={() => <Spacer width={wp(0.2)} />}
                ListEmptyComponent={ListEmptyComponent}
                data={item.friendList.slice(0, 3)}
                ListFooterComponent={ListFooterComponent}
                renderItem={renderItem}
              />
            </View>
            <Spacer height={hp(1)} />
          </View>
          {/* <Spacer height={hp(5)} /> */}
          <ExpenseList data={groupDetail} />
        </View>
      </View>
      <View style={styles.addExpenseSection}>
        <TouchableOpacity
          style={styles.addExpenseBtn}
          onPress={() => navigation.navigate('AddExpense', {item})}>
          <FontIcon name="file-alt" color="#fff" size={22} />
          <Text style={styles.expenseTitle}>Add expense</Text>
        </TouchableOpacity>
      </View>
      <AddGroupModel
        item={item}
        isVisible={isModal}
        onPress={() => setIsModal(false)}
        updateData={data => updateData(data)}
      />
      <ConfirmationModel
        title="Are you sure?"
        submitBtn="Submit"
        isVisible={isVisible}
        onSubmitBtn={val => deleteHandler(val)}
        cancelBtn="Cancel"
      />
    </View>
  );
};

export default GroupDetail;
