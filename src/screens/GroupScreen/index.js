import { View, Text } from 'react-native'
import React from 'react'
import GroupList from '../../components/GroupList'
import {styles} from './style'

const GroupScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.groupTitle}>You are all settled up!</Text>
        <View>
            <GroupList/>
        </View>
    </View>
  )
}

export default GroupScreen;