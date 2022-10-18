import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import AdaptiveButton from '../../AdaptiveButton';
import Spacer from '../../Spacer';
import {hp} from '../../../utility/responsive/responsive';

const ContactListEmpty = props => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.textStyle}>no contacts found</Text>
      <Spacer height={hp(2)} />
      <AdaptiveButton
        title="create contact"
        style={styles.buttonStyle}
        onPress={props.onPress}
      />
    </View>
  );
};

export default ContactListEmpty;
