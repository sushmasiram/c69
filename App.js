
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransaction from './screens/BookTransaction'
import SearchScreen from './screens/SearchScreen'

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default function App() {
  return (
    <AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const TabNavigator = createBottomTabNavigator({
  Transaction: { screen: BookTransaction },
  Search: { screen: SearchScreen }
});

const AppContainer = createAppContainer(TabNavigator);