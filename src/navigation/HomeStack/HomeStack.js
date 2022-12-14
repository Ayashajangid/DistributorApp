import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStack from '../TabStack/TabStack';
import {AppLocalizedStrings} from '../../localization/Localization';
import AddContact from '../../screens/Home/AddContact';
import ContactDetailScreen from '../../screens/Home/ContactDetail';
import AddExpense from '../../screens/Home/AddExpense';
import GroupDetail from '../../screens/Home/GroupDetail';
import ContactScreen from '../../screens/Home/ContactScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddExpense"
          component={AddExpense}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="GroupDetail"
          component={GroupDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactScreen"
          component={ContactScreen}
          // headerTitle="Contacts"
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={AppLocalizedStrings.screen.addContact}
          component={AddContact}
          // options={{headerTitle:''}}
        />
        <Stack.Screen
          name={AppLocalizedStrings.screen.contactDetail}
          component={ContactDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
