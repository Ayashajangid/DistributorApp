import {
  View,
  StatusBar,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {hp, wp} from '../../../utility/responsive/responsive';
import Spacer from '../../../components/Spacer';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
const ContactDetailScreen = ({route, navigation}) => {
  const {item} = route.params;
  console.log({item});
  return (
    <View style={{flex: 1}}>
      <View style={styles.screen}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <ImageBackground
          // source={{
          //   uri: 'https://cutewallpaper.org/21/graphic-design-backgrounds/Graphic-Design-Wallpaper-Backgrounds-65-Group-Wallpapers.jpg',
          // }}
          source={require('../../../images/backgroud.jpg')}>
          <View style={styles.topView}>
            <View style={styles.rowView}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={30} color="#ffff" />
              </TouchableOpacity>
              {/* <Icon name="settings-outline" size={25} color="#ffff" /> */}
            </View>
          </View>
        </ImageBackground>
        <View style={styles.contentView}>
          <View style={styles.imageView}>
            <Image
              style={styles.imageStyle}
              source={require('../../../images/images.jpg')}
            />
          </View>
          <View style={{marginTop: hp(45 / 8), marginLeft: wp(11)}}>
            <Text style={styles.textStyle}>{item.groupName ?? item.name}</Text>
            <Spacer height={hp(1)} />
            <Text style={styles.typeStyle}>
              {item.groupType ?? item.numEmail}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.addExpenseSection}>
        <TouchableOpacity
          style={styles.addExpenseBtn}
          onPress={() => navigation.navigate('AddExpense', {item})}>
          <FontIcon name="file-alt" color="#fff" size={22} />
          <Text style={styles.expenseTitle}>Add expense</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactDetailScreen;
