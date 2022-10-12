import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import Spacer from '../../../Spacer';
import {wp} from '../../../../utility/responsive/responsive';

const ContactView = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={onPress}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: item.image,
        }}
      />
      <Spacer width={wp(5)} />
      <View style={styles.nameView}>
        <Text numberOfLines={1} style={styles.nameText}>
          {item.name}
        </Text>
      </View>
      <Text style={styles.expensesText}>no expenses</Text>
    </TouchableOpacity>
  );
};

export default ContactView;
