import React from 'react';
import {View, Linking, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import AppText from '../../components/AppText';
import Colors from '../../shared/Theme/Colors';
import HomeScreen from '../../screens/HomeScreen';
import HomeIcon from '../../components/icons/HomeIcon';
import AppointmentIcon from '../../components/icons/AppointmentIcon';
const Tab = createBottomTabNavigator();


function BottomTabNavigator() {
  const handleHome = () => {

  };


  return (
    <Tab.Navigator
    
    // @ts-ignore
      tabBarOptions={{
        activeTintColor: Colors.Black,
        keyboardHidesTabBar: true,
        style: styles.tabNavigatorStyle,
        tabStyle: styles.tabStyle,
      }}
      >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        listeners={{
          tabPress: handleHome,
        }}
        options={{
          tabBarLabel: 'Ask a Doctor',
          tabBarIcon: ({focused}) =>  <HomeIcon pathProps={{
            fill: focused ? Colors.Black : Colors.SlightlyShyGrey
          }} />,
        }}
      />

      <Tab.Screen
        name="Account"
        component={() => <View />}
        options={{
          tabBarLabel: 'Appointments',
          tabBarIcon: ({focused}) => <AppointmentIcon pathProps={{
            stroke: focused ? Colors.Black : Colors.SlightlyShyGrey
          }} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    paddingVertical: '1.5%',
  },
  tabNavigatorStyle: {
    elevation: 0,
    shadowOpacity: 0,
    shadowColor: '#fff',
    borderTopColor: '#fff',
    height: heightPercentageToDP(8),
  },
  buttonContainer: {
    borderRadius: 100,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },

  cover: {
    position: 'absolute',
    bottom: '5%',
    height: heightPercentageToDP(9),
    aspectRatio: 1,
    backgroundColor: Colors.TextPrimary,
    padding: 5,
    borderRadius: 100,
    shadowColor: Colors.TextSecondary,
    shadowOffset: {width: 0, height: 0},
    elevation: 4,
    shadowRadius: 7,
    shadowOpacity: 0.5,
  },

  sellText: {
    alignSelf: 'center',
    marginTop: '15%',
    fontSize: RFPercentage(1.5),
    color: Colors.TextSecondary,
  },
});

export default BottomTabNavigator;
