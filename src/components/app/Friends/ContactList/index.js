import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Spacer from '../../../Spacer';
import {hp} from '../../../../utility/responsive/responsive';
import ContactView from '../ContactView';

const ContactList = () => {
  const contacts = useSelector(s => s.contact.contact);
  const renderItem = ({item}) => {
    return <ContactView item={item} />;
  };
  return (
    <View>
      {contacts.length == 0 ? (
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
  );
};

export default ContactList;
