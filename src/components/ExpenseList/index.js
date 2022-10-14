import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../../utility/responsive/responsive';
import Spacer from '../Spacer';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ConfirmationModel from '../../Model/ConfirmationModel'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addGroup } from '../../store/action/actions';
import { useDispatch, useSelector } from 'react-redux';

const ExpenseList = props => {
    const [isVisible, setIsVisible] = useState(false);
    const [removeData, setRemoveData] = useState([]);
    const [selectItem, setSelectItem] = useState('')
    const dispatch = useDispatch();
    const groupData = useSelector(state => state.group.group);
    const renderData = (item) => {
        let date = moment(item.createdAt).format("DD")
        let month = moment(item.createdAt).format("MMM")
        let year = moment(item.createdAt).format("YYYY")
        return (
            <View style={{ flexDirection: 'row', paddingVertical: hp(1), borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
                <View style={{ flexDirection: 'row', flex: 2 }}>
                    <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ccc', borderRadius: 10 }}>
                        <Text style={{ fontSize: 30 }}>{date}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>{month} </Text>
                            <Text>{year}</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 20, color: '#000' }}>{item.desc}</Text>
                        <Spacer height={hp(1)} />
                        <Text style={{ fontSize: 15 }}>{item.price}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => RemovePayment(item.paymentId)}>
                        <Icon
                            name='delete'
                            color='#ccc'
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const RemovePayment = (item) => {
        setIsVisible(!isVisible)
        setSelectItem(item)
    }
    const OnSubmitFunction = async (val) => {
        setIsVisible(!isVisible)
        if (val === 'submit') {
            let removePayment = props.data.payments.filter((data) => data.paymentId !== selectItem)
            let removePaymentData = groupData.map((item) => {
                if (item.id === props.data.id) {
                    item.payments = removePayment;
                }
                return item;
            })
            await AsyncStorage.setItem('groupData', JSON.stringify(removePaymentData));
            dispatch(addGroup(removePaymentData))
        }
    }
    return (
        <View>
            <Spacer height={hp(2)} />
            <FlatList
                data={props?.data?.payments}
                renderItem={({ item }) => renderData(item)}
            />
            <ConfirmationModel
                title='Are you sure?'
                submitBtn='Submit'
                isVisible={isVisible}
                onSubmitBtn={(val) => OnSubmitFunction(val)}
                cancelBtn='Cancel'
            />
            {/* <Modal animationType="slide" transparent={true} visible={isVisible}>
                <Text>modal</Text>
            </Modal> */}
        </View>
    )
}

export default ExpenseList