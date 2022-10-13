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
      autoFocus={props.autoFocus}
      keyboardType={props.keyboardType ?? 'default'}
      style={style}
      placeholder={props.placeholder}
      activeUnderlineColor="red"
      secureTextEntry={props.secureTextEntry}
      placeholderTextColor={props.placeholderTextColor ?? '#ccc'}
      onChangeText={props.onChangeText}
    />
  );
};

export default AdaptiveTextInput;
