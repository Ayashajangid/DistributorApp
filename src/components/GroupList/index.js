import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

const GroupList = () => {
    const groupData = [
        {
            icon: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/46/static/media/react-native-logo.79778b9e.png',
            title: 'Trip Group 1',
            subTitle: 'setteld up'
        },
        {
            icon: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/46/static/media/react-native-logo.79778b9e.png',
            title: 'Trip Group 2',
            subTitle: 'no expenses'
        },
        {
            icon: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/46/static/media/react-native-logo.79778b9e.png',
            title: 'Trip Group 3',
            subTitle: 'no expenses'
        },
    ]

    const renderData = ({item}) => {
        return (
            <View>
                <Image
                    style={{width: 100, height: 100}}
                    source={{
                    uri: item.icon,
                    }}
                />
                <Text>{item.title}</Text>
                <Text>{item.subTitle}</Text>
            </View>
        )
    }
  return (
    <View>
      {groupData.length > 0 ? <FlatList 
      data={groupData}
      renderItem={(item) => renderData(item)}
      />
    : 
        <View>
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsH_QjGoSXRxS0Kvh-zaUwTr1QH5_e7WWFQ&usqp=CAU'}} style={{width: 100, height: 100}} />
        </View>
    }
    </View>
  )
}

export default GroupList