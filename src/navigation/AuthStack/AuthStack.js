import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginType from '../../screens/Auth/LoginType';
import LoginScreen from '../../screens/Auth/LoginScreen';
import SignUpScreen from '../../screens/Auth/SignUpScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginType"
          component={LoginType}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerTitleAlign: 'center',
            // headerStyle: {shadowColor: 'transparent', elevation: 0},
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
