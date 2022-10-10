import {TextInput} from 'react-native';
import React, {useMemo} from 'react';
import {styles} from './style';

const AdaptiveTextInput = props => {
  const style = useMemo(() => {
    return {...styles.textInput, ...(props.style ?? {})};
  }, [props.style]);
  return (
    <TextInput
      value={props.value}
      keyboardType={props.keyboardType ?? 'default'}
      style={style}
      placeholder={props.placeholder}
      // placeholderTextColor={props.placeholderTextColor ?? Colors.placeholder}
      onChangeText={props.onChangeText}
    />
  );
};

export default AdaptiveTextInput;
