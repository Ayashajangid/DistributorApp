import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {useSelector} from 'react-redux';
import Spacer from '../../../components/Spacer';
import {hp} from '../../../utility/responsive/responsive';
import ContactListView from '../../../components/app/ContactListView';
import ContactHeaderView from '../../../components/app/ContactHeaderView';
import ContactListEmpty from '../../../components/app/ContactListEmpty';
import {AppLocalizedStrings} from '../../../localization/Localization';

const ContactScreen = ({navigation}) => {
  const contactData = useSelector(state => state.contact.contact);
  const [selected, setSelected] = useState([]);

  const onPressHandler = item => {
    let check = selected.some(i => i.numEmail == item.numEmail);
    if (check) {
      const arr = selected.filter(i => i.numEmail != item.numEmail);
      setSelected(arr);
    } else {
      setSelected([...selected, item]);
    }
  };

  const ListHeaderComponent = () => {
    return selected.length > 0 && <ContactHeaderView selected={selected} />;
  };

  const renderItem = ({item}) => {
    return (
      <ContactListView
        item={item}
        selected={selected}
        onPress={() => onPressHandler(item)}
      />
    );
  };
  const onPress = () => {
    navigation.navigate(AppLocalizedStrings.screen.addContact);
  };

  const ListEmptyComponent = () => {
    return <ContactListEmpty onPress={onPress} />;
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.mainContainer}>
        <FlatList
          data={contactData}
          contentContainerStyle={{flexGrow: 1}}
          ListHeaderComponent={ListHeaderComponent}
          ListEmptyComponent={ListEmptyComponent}
          ItemSeparatorComponent={() => <Spacer height={hp(3)} />}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactScreen;
