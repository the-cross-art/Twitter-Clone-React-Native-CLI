import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
  USERCHAT,
  USERLIST,
  MESSAGE,
} from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import CreateContact from '../screens/CreateContact';
import ContactDetails from '../screens/ContactDetail';
import Settings from '../screens/Settings';
import Verify from '../screens/Login/verify';
import {Text} from 'react-native';
import UserChat from '../screens/Users/UserChat';
import UserList from '../screens/Users/UserList';
import Message from '../screens/Users/Message';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen
        name={CONTACT_LIST}
        component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_DETAIL}
        component={ContactDetails}></HomeStack.Screen>
      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
      <HomeStack.Screen name={USERCHAT} component={UserChat}></HomeStack.Screen>
      <HomeStack.Screen name={USERLIST} component={UserList}></HomeStack.Screen>
      <HomeStack.Screen name={MESSAGE} component={Message}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
