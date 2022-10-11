import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStack from '../TabStack/TabStack';
import {AppLocalizedStrings} from '../../localization/Localization';
import AddContact from '../../screens/Home/AddContact';

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
          name={AppLocalizedStrings.screen.addContact}
          component={AddContact}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
