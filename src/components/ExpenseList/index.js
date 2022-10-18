import {View, Text, FlatList, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../../utility/responsive/responsive';
import Spacer from '../Spacer';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ConfirmationModel from '../../Model/ConfirmationModel'
import { addGroup } from '../../store/action/actions';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './style'

const ExpenseList = props => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectItem, setSelectItem] = useState('')
    const dispatch = useDispatch();
    const groupData = useSelector(state => state.group.group);
    const renderData = (item) => {
        let date = moment(item.createdAt).format("DD")
        let month = moment(item.createdAt).format("MMM")
        let year = moment(item.createdAt).format("YYYY")
        return (
            <View style={styles.expenseSection}>
                <View style={styles.expenseInnerSection}>
                    <View style={styles.dateSection}>
                        <Text style={{ fontSize: 30 }}>{date}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>{month} </Text>
                            <Text>{year}</Text>
                        </View>
                    </View>
                    <View style={styles.detailSection}>
                        <Text style={styles.desc}>{item.desc}</Text>
                        <Spacer height={hp(1)} />
                        <Text style={{ fontSize: 15 }}>{item.price}</Text>
                    </View>
                </View>
                <View style={styles.deleteBtn}>
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
        </View>
    )
}
