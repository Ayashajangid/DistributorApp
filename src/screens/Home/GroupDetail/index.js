import {
    View,
    StatusBar,
    ImageBackground,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { hp, wp } from '../../../utility/responsive/responsive';
import Spacer from '../../../components/Spacer';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseList from '../../../components/ExpenseList'
import { addGroup } from '../../../store/action/actions';
import ConfirmationModel from '../../../Model/ConfirmationModel';
import AddGroupModel from '../../../Model/AddGroupModel';

const GroupDetail = ({ route, navigation }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isModal, setIsModal] = useState(false)
    const { item } = route?.params;
    const groupData = useSelector(state => state.group.group);
    let data = groupData?.find((item) => item?.id === route?.params?.item?.id)
    console.log('groupData:', groupData)
    const [groupDetail, setGroupDetail] = useState(data)
    const dispatch = useDispatch();
    useEffect(() => {
            setGroupDetail(data)
    }, [data])

    const deleteHandler = async (val) => {
        setIsVisible(!isVisible)
        if (val === 'submit') {
            navigation.goBack();
        }
    };

    const updateData = async (data) => {
        let findIndexData = groupData.findIndex((val, index) => val.id === route?.params?.item?.id)
        groupData[findIndexData] = data
        setGroupDetail(data)
        dispatch(addGroup(groupData))
    }

    return (
        <View style={{ flex: 1 }}>
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
                                style={{ flex: 1 }}>
                                <Icon name="arrow-back" size={30} color="#ffff" />
                            </TouchableOpacity>
                            {/* <Icon name="settings-outline" size={25} color="#ffff" /> */}
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
                    <View style={{ marginTop: hp(45 / 8), marginLeft: wp(11) }}>
                        <Text style={styles.textStyle}>
                            {groupDetail?.groupName}
                        </Text>
                        <Spacer height={hp(1)} />
                        <Text style={styles.typeStyle}>
                            {groupDetail?.groupType}
                        </Text>
                    </View>
                    <ExpenseList data={groupDetail} />
                </View>
            </View>
            <View style={styles.addExpenseSection}>
                <TouchableOpacity
                    style={styles.addExpenseBtn}
                    onPress={() => navigation.navigate('AddExpense', { item })}>
                    <FontIcon name="file-alt" color="#fff" size={22} />
                    <Text style={styles.expenseTitle}>Add expense</Text>
                </TouchableOpacity>
            </View>
            <AddGroupModel
                item={item}
                isVisible={isModal}
                onPress={() => setIsModal(false)}
                updateData={(data) => updateData(data)}
            />
            <ConfirmationModel
                title='Are you sure?'
                submitBtn='Submit'
                isVisible={isVisible}
                onSubmitBtn={(val) => deleteHandler(val)}
                cancelBtn='Cancel'
            />

        </View>
    );
};

export default GroupDetail;
