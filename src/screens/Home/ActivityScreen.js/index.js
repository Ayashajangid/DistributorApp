import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {useSelector} from 'react-redux';
import Spacer from '../../../components/Spacer';
import {hp, wp} from '../../../utility/responsive/responsive';
import Icon from 'react-native-vector-icons/Ionicons';
import * as utils from '../../../common/Utils';
const ActivityScreen = () => {
  const res = useSelector(state => state.google.data);
  const image =
    res?.user?.photoURL ||
    'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg';

  const data = useSelector(s => s.activity.activity);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.mainContainer}>
        <Text style={styles.activityText}>Activity</Text>
        <Spacer height={hp(2)} />
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          ListEmptyComponent={() => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>no activity yet</Text>
            </View>
          )}
          ListFooterComponent={() => <Spacer height={hp(2.5)} />}
          ItemSeparatorComponent={() => <Spacer height={hp(3)} />}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.rowView}>
              <View style={styles.iconView}>
                <Icon name="receipt-outline" color={'white'} size={30} />
                <View style={styles.roundImage}>
                  <Image style={styles.imageStyle} source={{uri: image}} />
                </View>
              </View>
              <Spacer width={wp(8)} />
              <View style={{flex: 1}}>
                <Text style={{color: '#000', fontSize: 15}}>
                  <Text style={styles.firstLine}>You</Text>{' '}
                  {item.action == 'added' ? 'added' : 'deleted'}{' '}
                  <Text style={styles.firstLine}>"{item.desc}"</Text>
                </Text>
                <Spacer height={hp(0.2)} />
                {item.action == 'added' ? (
                  <Text style={[styles.centerText]}>
                    You get back ${item.price}
                  </Text>
                ) : (
                  <Text
                    style={[
                      styles.centerText,
                      {textDecorationLine: 'line-through'},
                    ]}>
                    You get back ${item.price}
                  </Text>
                )}
                <Spacer height={hp(0.5)} />
                <Text style={styles.timeStyle}>
                  {utils.dateFormat(
                    'MMM-DD h:mm a',
                    item.action == 'added' ? item.createdAt : item.deletedAt,
                  )}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ActivityScreen;
