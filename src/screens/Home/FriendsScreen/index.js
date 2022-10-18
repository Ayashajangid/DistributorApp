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

const FriendsScreen = ({navigation}) => {
  const contacts = useSelector(s => s.contact.contact);
  const buttonHandler = () => {
    navigation.navigate(AppLocalizedStrings.screen.addContact);
  };
  const onPressHandler = (item, index) => {
    navigation.navigate(AppLocalizedStrings.screen.contactDetail, {
      item: item,
      index: index,
    });
  };
  const renderItem = ({item, index}) => {
    return <ContactView item={item} index={index} onPress={onPressHandler} />;
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.mainContainer}>
        <TextFilterIconView />
        <Spacer height={hp(3)} />
        <>
          {contacts.length <= 0 ? (
            <>
              <Image
                style={{width: 250, height: 250, alignSelf: 'center'}}
                source={{
                  uri: 'https://img.freepik.com/free-vector/add-friends-concept-illustration_114360-5448.jpg?w=2000',
                }}
              />
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
            </>
          ) : (
            <FlatList
              data={contacts}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => (
                <>
                  <Spacer height={hp(3)} />
                  <AdaptiveIconButton
                    title="Add more friends"
                    icon="person-add"
                    iconColor="rgba(75,160,130,1)"
                    iconSize={20}
                    style={styles.buttonStyle}
                    onPress={buttonHandler}
                  />
                  <Spacer height={hp(4)} />
                </>
              )}
              ItemSeparatorComponent={() => <Spacer height={hp(2.5)} />}
              renderItem={renderItem}
            />
          )}
        </>
      </View>
    </SafeAreaView>
  );
};

export default FriendsScreen;
