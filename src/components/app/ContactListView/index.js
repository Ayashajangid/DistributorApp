import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {wp} from '../../../utility/responsive/responsive';
import Spacer from '../../Spacer';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './style';

const ContactListView = props => {
  return (
    <View>
      <TouchableOpacity style={styles.mainView} onPress={props.onPress}>
        <Image style={styles.imageStyle} source={{uri: props.item.image}} />
        <Spacer width={wp(4)} />
        <View style={styles.middleView}>
          <Text style={styles.textStyle}>{props.item.name}</Text>
          <Text style={{color: '#73777B'}}>{props.item.numEmail}</Text>
        </View>

        {props.selected.some(i => i.numEmail == props.item.numEmail) && (
          <Icon name="checkcircle" color="green" size={20} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ContactListView;
