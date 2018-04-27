import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation';

import Colors from '../constants/Colors';

import TataSkyScreen from './TataSkyScreen';
import TVScreen from './TVScreen';
import DVDScreen from './DVDScreen';
import ACScreen from './ACScreen';

export default TabNavigator(
  {
    TataSky: {
      screen: TataSkyScreen,
    },
    TV: {
      screen: TVScreen,
    },
    DVD: {
      screen: DVDScreen,
    },
    AC: {
      screen: ACScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle';
            break;
          case 'Links':
            iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'Settings':
            iconName = Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3, width: 25 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    animationEnabled: false,
    swipeEnabled: true,
  }
);
