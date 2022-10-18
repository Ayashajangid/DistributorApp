import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-paper';
import {hp, wp} from '../../utility/responsive/responsive';
import Spacer from '../../components/Spacer';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardAvoidingView from '../../components/Keyboard/KeyboardAvoidingView';
import typeList from '../../mock/typeList.json';
import uuid from 'react-native-uuid';
import { addGroup } from '../../store/action/actions';

const AddGroupModel = props => {
  const [data, setData] = useState(typeList);
  const [groupName, setGroupName] = useState('');
  const [groupType, setGroupType] = useState('');
  const dispatch = useDispatch();
  const groupDetail = useSelector(state => state.group.group);

  useEffect(() => {
    setGroupName(props?.item?.groupName)
    setGroupType(props?.item?.groupType)
  }, [props?.item])

  const renderGroupType = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.typeSection,
          groupType === item.title && styles.selectedTypeSection,
        ]}
        onPress={() => setGroupType(item.title)}>
        <Icon
          name={item.icon}
          color={groupType === item.title ? '#599f8b' : '#7f8188'}
          size={20}
        />
        <Text
          style={[
            styles.typeTitle,
            { color: groupType === item.title ? '#599f8b' : '#7f8188' },
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleGroupData = async () => {
    let uniqueId = uuid.v4();
    let allGroupData = [];
    let groupData = {
      id: uniqueId,
      groupName: groupName,
      groupType: groupType,
      groupLogo: '',
      payments: [],
      friendList: []
    }
    if(props?.item){
      let data = {
        id: props?.item?.id,
        groupName: groupName,
        groupType: groupType,
        groupLogo: '',
        payments: [],
        friendList: []
      }
      props.updateData(data)
      props.onPress()
      return;
    }else {
      if (groupDetail != null) {
        allGroupData = [...groupDetail, groupData]
      } else {
        allGroupData = [groupData]
      }
    }
    dispatch(addGroup(allGroupData))
    props.onPress()
    setGroupName('')
    setGroupType('')
  }

  return (
    <Modal animationType="slide" transparent={false} visible={props.isVisible} >
      <SafeAreaView style={styles.mainView}>
        <KeyboardAvoidingView style={styles.screen}>
          <View style={styles.rowView}>
            <View style={styles.innerRowView}>
              <TouchableOpacity onPress={props.onPress}>
                <Icon name="close" color="black" size={28} />
              </TouchableOpacity>
              <Text style={styles.headerText}>{props?.item ? 'Edit Group' : 'Create a group'}</Text>
            </View>
            <TouchableOpacity onPress={() => handleGroupData()}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.groupRowView}>
            <View style={styles.cameraView}>
              <Icon name="camera-outline" color="#7f8188" size={28} />
            </View>
            <View style={styles.innerGroupView}>
              <Text style={styles.title}>Group name</Text>
              <TextInput
                value={groupName}
                onChangeText={text => setGroupName(text)}
                underlineColor="#13a67f"
                activeUnderlineColor="#13a67f"
                style={{
                  backgroundColor: '#fff',
                  height: hp(5),
                }}
              />
            </View>
          </View>
          <Spacer height={hp(2)} />
          <View>
            <Text style={styles.title}>Type</Text>
            <Spacer height={hp(1)} />
            <FlatList
              data={data}
              renderItem={item => renderGroupType(item)}
              horizontal
              ItemSeparatorComponent={() => <Spacer width={wp(4)} />}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Spacer height={hp(2)} />
          <View>
            <Text style={styles.title}>Group members</Text>
            <View style={styles.groupRowView}>
              <View>
                <Icon name="person-add-outline" color="#7f8188" size={25} />
              </View>
              <View style={styles.innerGroupView}>
                <Text style={styles.typeTitle}>
                  You will be able to add grop members after you save this new
                  group.
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
};

export default AddGroupModel;
