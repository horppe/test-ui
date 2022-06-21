import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RFPercentage} from 'react-native-responsive-fontsize';
import HomeScreen from '../../screens/HomeScreen';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthenticateUser"
      screenOptions={{
        headerTitleStyle: {
        //   fontFamily: Typography.POPPINS_MEDIUM,
          fontWeight: 'bold',
          fontSize: RFPercentage(2.8),
        },
        headerStyle: {
          elevation: 0,
        //   shadowColor: Colors.PRIMARY,
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="AuthenticateUser"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
