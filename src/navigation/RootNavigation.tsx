import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React, {useRef} from 'react';
import AuthNavigator from './auth/Auth';

export default function Navigations() {
  const routeNameRef = useRef();


  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
