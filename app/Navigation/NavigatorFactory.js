
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SuggestSearch, { SuggestSearchConst } from '../Screens/SuggestSearch';

const Stack = createStackNavigator();

export const NavigatorFactory = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen
      name={SuggestSearchConst.SuggestSearch}
      component={SuggestSearch}
      options={{title: 'Suggest Search'}}
    />
  </Stack.Navigator>
);
