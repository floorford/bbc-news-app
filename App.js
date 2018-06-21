import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import List from './screens/List'
import Detail from './screens/Detail'

// ************* Status Bar Stuff ***************

StatusBar.setBarStyle('light-content');

// ************** Root Nav ****************

const RootNavigator = createStackNavigator({
  List: List,
  Detail: Detail,
}, {
  navigationOptions: {
    headerStyle: {
        backgroundColor: '#bb1521'
    },
    headerTintColor: '#ffffff'
  }
});

export default RootNavigator;
