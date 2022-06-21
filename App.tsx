import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/navigation/RootNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}