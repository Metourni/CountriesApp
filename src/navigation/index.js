import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {CountriesListScreen} from '../screens/Countries/ListScreen';
import {CountryDetailsScreen} from '../screens/Countries/DetailsScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={CountriesListScreen} />
    <Stack.Screen name="Details" component={CountryDetailsScreen} />
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
