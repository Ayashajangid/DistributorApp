import React, {useMemo} from 'react';
import {View} from 'react-native';

const Spacer = props => {
  const style = useMemo(() => {
    return {
      width: props.width,
      height: props.height,
    };
  }, [props.width, props.height]);

  return <View style={props.style ?? style} />;
};

export default Spacer;
