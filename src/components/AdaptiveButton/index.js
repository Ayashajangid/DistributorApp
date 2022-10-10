import {Text, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';
import {styles} from './style';

const AdaptiveButton = props => {
  const style = useMemo(() => {
    return {...styles.screen, ...(props.style ?? {})};
  }, [props.style]);
  return (
    <TouchableOpacity
      style={style}
      disabled={props.disable}
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default AdaptiveButton;
