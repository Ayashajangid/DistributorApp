import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {hp, wp} from '../../utility/responsive/responsive';
import Spacer from '../../components/Spacer';
import {styles} from './style';

const ConfirmationModel = props => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.isVisible}>
      <View style={styles.mainView}>
        <View style={styles.secondView}>
          <Text style={styles.title}>{props.title}</Text>
          <Spacer height={hp(3)} />
          <View style={styles.rowView}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => props.onSubmitBtn('YES')}>
              <Text style={styles.submitText}>{props.submitBtn}</Text>
            </TouchableOpacity>
            <Spacer width={wp(5)} />
            <TouchableOpacity
              style={styles.cnclbttn}
              onPress={() => props.onSubmitBtn()}>
              <Text style={styles.cancelText}>{props.cancelBtn}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModel;
