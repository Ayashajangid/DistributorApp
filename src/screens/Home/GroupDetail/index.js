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

const GroupDetail = ({route, navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const {item} = route?.params;
  console.log(item);
  const groupData = useSelector(state => state.group.group);
  let data = groupData?.find(item => item?.id === route?.params?.item?.id);
  const [groupDetail, setGroupDetail] = useState(data);
  const dispatch = useDispatch();
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
                ListEmptyComponent={() => (
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}
                    onPress={() => navigation.navigate('ContactScreen')}>
                    <View
                      style={{
                        borderRadius: 100,
                        padding: 7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#A5F1E9',
                      }}>
                      <MaterialIcons name="group-add" size={20} color="#000" />
                    </View>
                    <Spacer width={wp(3)} />
                    <Text
                      style={{
                        fontSize: 17,
                        color: '#A5F1E9',
                        fontWeight: '500',
                      }}>
                      Add group members
                    </Text>
                  </TouchableOpacity>
                )}
                data={item.friendList}
                renderItem={({item}) => <Text>{item?.name}</Text>}
              />
            </View>
            <Spacer height={hp(1)} />
          </View>
          <Spacer height={hp(5)} />
          {/* <ExpenseList data={groupDetail} /> */}
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
