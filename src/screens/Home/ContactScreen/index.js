import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import Spacer from '../../../components/Spacer';
import {hp, wp} from '../../../utility/responsive/responsive';
import ContactListView from '../../../components/app/ContactListView';
import ContactHeaderView from '../../../components/app/ContactHeaderView';
import ContactListEmpty from '../../../components/app/ContactListEmpty';
import {AppLocalizedStrings} from '../../../localization/Localization';
import AdaptiveButton from '../../../components/AdaptiveButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {addGroupFriend} from '../../../store/action/actions';

const ContactScreen = ({navigation, route}) => {
  const {id} = route?.params;
  const dispatch = useDispatch();
  const contactData = useSelector(state => state.contact.contact);
  const groupData = useSelector(state => state.group.group);
  let findIndex = groupData.findIndex(i => i.id === id);
  console.log('data', groupData[findIndex].friendList);
  const [selected, setSelected] = useState(
    groupData[findIndex]?.friendList ?? [],
  );
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

  const ListFooterComponent = () => {
    return (
      contactData.length > 0 && (
        <>
          <Spacer height={hp(3)} />
          <AdaptiveButton
            title="Create Contact"
            style={styles.buttonStyle}
            onPress={onPress}
          />
          <Spacer height={hp(3)} />
        </>
      )
    );
  };

  const goBackHandler = () => {
    navigation.goBack();
  };

  const saveHandler = () => {
    dispatch(addGroupFriend({selected, id}));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <View style={styles.headerView}>
        <TouchableOpacity onPress={goBackHandler}>
          <Icon name="arrow-back" color="#000" size={22} />
        </TouchableOpacity>
        <Text style={styles.allContactText}>All Contacts</Text>
        <TouchableOpacity onPress={saveHandler}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <FlatList
          data={contactData}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={ListHeaderComponent}
          ListEmptyComponent={ListEmptyComponent}
          ListFooterComponent={ListFooterComponent}
          ItemSeparatorComponent={() => <Spacer height={hp(3)} />}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactScreen;
