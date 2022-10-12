import { View, StyleSheet, Text } from 'react-native'
import React, {useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import { useSelector } from 'react-redux';

const SelectBox = (props) => {
    const groupData = useSelector(state => state.group.group);
    return (
        <Picker
          selectedValue={props.selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => props.setSelectedValue(itemValue)}
          itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
        >
          <Picker.Item label='Select' value='select' />
          {
            groupData?.map(item => {
              return (
              <Picker.Item label={item.groupName} value={item.groupName} />
              )
            })
          }
        </Picker>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });

export default SelectBox