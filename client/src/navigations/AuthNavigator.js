import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {LOGIN, LOGINOTP, VERIFY, REGISTER} from '../constants/routeNames';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Loginotp from '../screens/Login/loginotp';
import verifyotp from '../screens/Login/verify';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={LOGINOTP} component={Loginotp}></AuthStack.Screen>
      <AuthStack.Screen name={VERIFY} component={verifyotp}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Register}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
