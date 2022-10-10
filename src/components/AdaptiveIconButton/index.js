import {Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './style';
import Spacer from '../Spacer';
import {wp} from '../../utility/responsive/responsive';

const AdaptiveIconButton = props => {
  const style = useMemo(() => {
    return {...styles.screen, ...(props.style ?? {})};
  }, [props.style]);
  return (
    <TouchableOpacity
      style={style}
      disabled={props.disable}
      onPress={props.onPress}>
      <Icon name={props.icon} color={props.iconColor} size={props.iconSize} />
      <Spacer width={wp(4)} />
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default AdaptiveIconButton;
