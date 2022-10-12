import {View, StatusBar, ImageBackground, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {hp, wp} from '../../../utility/responsive/responsive';
import Spacer from '../../../components/Spacer';
const ContactDetailScreen = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground
        source={{
          uri: 'https://cutewallpaper.org/21/graphic-design-backgrounds/Graphic-Design-Wallpaper-Backgrounds-65-Group-Wallpapers.jpg',
        }}>
        <View style={styles.topView}>
          <View style={styles.rowView}>
            <Icon name="arrow-back" size={30} color="#ffff" />
            <Icon name="settings-outline" size={25} color="#ffff" />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.contentView}>
        <View style={styles.imageView}>
          <Image
            style={{
              flex: 1,
              resizeMode: 'cover',
              height: '100%',
            }}
            source={{uri: item.image}}
          />
        </View>
        <View style={{marginTop: hp(45 / 8), marginLeft: wp(11)}}>
          <Text>{item.name}</Text>
          <Spacer height={hp(1)} />
          <Text>{item.numEmail}</Text>
        </View>
      </View>
    </View>
  );
};

export default ContactDetailScreen;
