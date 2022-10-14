import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { hp, wp } from '../../utility/responsive/responsive'
import Spacer from '../../components/Spacer'


const ConfirmationModel = (props) => {
    return (
        <Modal animationType="slide" transparent={true} visible={props.isVisible} >
            <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{width: wp(80), height: hp(20), backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', borderRadius: 15}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>{props.title}</Text>
                <Spacer height={hp(3)} />
                <View style={{ flexDirection: 'row', width: wp(40), justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{paddingVertical: hp(1), paddingHorizontal: wp(4), backgroundColor: '#ccc', borderRadius: 15}} onPress={() => props.onSubmitBtn('submit')}>
                        <Text>{props.submitBtn}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingVertical: hp(1), paddingHorizontal: wp(4), borderColor: '#ccc', borderWidth: 1, borderRadius: 15}} onPress={() => props.onSubmitBtn()}>
                        <Text>{props.cancelBtn}</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </Modal>
    )
}

export default ConfirmationModel