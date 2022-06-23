import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/navigation/RootNavigation';

export default function App() {
  return (
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
  );
}