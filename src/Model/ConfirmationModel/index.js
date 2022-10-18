import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { hp, wp } from '../../utility/responsive/responsive'
import Spacer from '../../components/Spacer'
import { styles } from './style'


const ConfirmationModel = (props) => {
    return (
        <Modal animationType="slide" transparent={true} visible={props.isVisible} >
            <View style={styles.mainSection}>
                <View style={styles.modalSection}>
                <Text style={styles.modalTitle}>{props.title}</Text>
                <Spacer height={hp(3)} />
                <View style={styles.modalInnerScetion}>
                    <TouchableOpacity style={styles.submitBtn} onPress={() => props.onSubmitBtn('submit')}>
                        <Text>{props.submitBtn}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelBtn} onPress={() => props.onSubmitBtn()}>
                        <Text>{props.cancelBtn}</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </Modal>
    )
}

export default ConfirmationModel