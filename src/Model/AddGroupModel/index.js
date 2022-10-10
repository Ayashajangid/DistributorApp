import {View, Text, TouchableOpacity, Modal, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const AddGroupModel = props => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.isVisible}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.mainView}>
          <View style={styles.rowView}>
            <TouchableOpacity onPress={props.onPress}>
              <Icon name="close" color="black" size={28} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Create a group</Text>
            <TouchableOpacity>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default AddGroupModel;
