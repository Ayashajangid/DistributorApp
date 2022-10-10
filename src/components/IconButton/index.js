import {Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './style';
import Spacer from '../Spacer';
import {wp} from '../../utility/responsive/responsive';

const IconButton = props => {
//   const style = useMemo(() => {
//     return {...styles.screen, ...(props.style ?? {})};
//   }, [props.style]);
  return (
    <TouchableOpacity
      disabled={props.disable}
      onPress={props.onPress}>
      <Icon name={props.icon} color={props.iconColor} size={props.iconSize} />
    </TouchableOpacity>
  );
};

export default IconButton;
