import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './style';
import Spacer from '../../Spacer';
import {wp} from '../../../utility/responsive/responsive';

const ContactHeaderView = props => {
  return (
    <View style={styles.mainView}>
      <FlatList
        data={props.selected}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Spacer width={wp(3)} />}
        renderItem={({item}) => (
          <View style={styles.renderView}>
            <Text style={styles.textStyle}>{item?.name.slice(0, 2)}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ContactHeaderView;
