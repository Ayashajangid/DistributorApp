import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import TextFilterIconView from '../../../components/app/commonView/TextFilterIconView';
import Spacer from '../../../components/Spacer';
import {hp} from '../../../utility/responsive/responsive';
import AdaptiveIconButton from '../../../components/AdaptiveIconButton';
import {AppLocalizedStrings} from '../../../localization/Localization';
import {useSelector} from 'react-redux';
import ContactList from '../../../components/app/Friends/ContactList';
// https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?size=338&ext=jpg&ga=GA1.2.1599401084.1665473402
const FriendsScreen = ({navigation}) => {
  const contacts = useSelector(s => s.contact.contact);
  const onPress = () => {
    navigation.navigate(AppLocalizedStrings.screen.addContact);
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.mainContainer}>
        <TextFilterIconView />
        <Spacer height={hp(3)} />
        <ContactList />
        <Spacer height={hp(4)} />
        <AdaptiveIconButton
          title="Add more friends"
          icon="person-add"
          iconColor="white"
          iconSize={20}
          style={styles.buttonStyle}
          onPress={onPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default FriendsScreen;
