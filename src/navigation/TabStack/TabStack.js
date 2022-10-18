import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../../screens/Home/AccountScreen/index.js';
import ActivityScreen from '../../screens/Home/ActivityScreen.js';
import FriendsScreen from '../../screens/Home/FriendsScreen/index.js';
import GroupScreen from '../../screens/Home/GroupScreen/index.js';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Foundation from 'react-native-vector-icons/dist/Foundation';

const lableStyle = {
  fontSize: 12,
  marginBottom: 4,
  fontWeight: 'bold',
};

const TabStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: lableStyle,
        tabBarIconStyle: {
          padding: 0,
          margin: 0,
        },
      }}>
      <Tab.Screen
        name="GroupScreen"
        component={GroupScreen}
        options={{
          // headerShown: false,
          tabBarActiveTintColor: 'rgba(75,160,130,1)',
          headerTitleAlign: 'center',
          title: 'Groups',
          tabBarIcon: ({focused, color}) => (
            <Icon name="person-add" focused={focused} color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="FriendsScreen"
        component={FriendsScreen}
        options={{
          // headerShown: false,
          tabBarActiveTintColor: 'rgba(75,160,130,1)',
          headerTitleAlign: 'center',
          title: 'Friends',
          tabBarIcon: ({focused, color}) => (
            <Icon name="person" focused={focused} color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'rgba(75,160,130,1)',
          headerTitleAlign: 'center',
          tabBarLabel: 'Activity',
          tabBarIcon: ({focused, color}) => (
            <Foundation
              focused={focused}
              name="graph-trend"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          // headerShown: false,
          tabBarActiveTintColor: 'rgba(75,160,130,1)',
          headerTitleAlign: 'center',
          tabBarLabel: 'Account',
          tabBarIcon: ({focused, color}) => (
            <Icon
              focused={focused}
              name="person-circle"
              color={color}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
