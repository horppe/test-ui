import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React, {useRef} from 'react';
import AuthNavigator from './auth/Auth';
import 'react-native-gesture-handler';

export default function Navigations() {
  const routeNameRef = useRef();


  return (
      <AuthNavigator />
  );
}
