import {View, Text, SafeAreaView, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './style';
import TextFilterIconView from '../../../components/app/commonView/TextFilterIconView';
import Spacer from '../../../components/Spacer';
import {hp} from '../../../utility/responsive/responsive';
import AdaptiveIconButton from '../../../components/AdaptiveIconButton';
import {AppLocalizedStrings} from '../../../localization/Localization';
import {useSelector} from 'react-redux';
import ContactView from '../../../components/app/Friends/ContactView';
// https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?size=338&ext=jpg&ga=GA1.2.1599401084.1665473402
const FriendsScreen = ({navigation}) => {
  const contacts = useSelector(s => s.contact.contact);
  const buttonHandler = () => {
    navigation.navigate(AppLocalizedStrings.screen.addContact);
  };
  const onPressHandler = item => {
    navigation.navigate(AppLocalizedStrings.screen.contactDetail, {item});
  };
  const renderItem = ({item}) => {
    return <ContactView item={item} onPress={() => onPressHandler(item)} />;
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.mainContainer}>
        <TextFilterIconView />
        <Spacer height={hp(3)} />
        <View>
          {contacts.length <= 0 ? (
            <Image
              style={{width: 250, height: 250, alignSelf: 'center'}}
              source={{
                uri: 'https://img.freepik.com/free-vector/add-friends-concept-illustration_114360-5448.jpg?w=2000',
              }}
            />
          ) : (
            <FlatList
              data={contacts}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <Spacer height={hp(2.5)} />}
              renderItem={renderItem}
            />
          )}
        </View>
        <Spacer height={hp(4)} />
        <AdaptiveIconButton
          title="Add more friends"
          icon="person-add"
          iconColor="rgba(75,160,130,1)"
          iconSize={20}
          // buttonTextColor={{color: '#ffff'}}
          style={styles.buttonStyle}
          onPress={buttonHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default FriendsScreen;
