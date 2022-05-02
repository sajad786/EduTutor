import { View, Text } from 'react-native'
import React from 'react'
import { Courses, Home, Profile, Reels } from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import TabStack from './TabStack';

const MainStack = Stack => {
  return (
    <Stack.Navigator
      initialRouteName={navigationStrings.TAB_STACK}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={navigationStrings.TAB_STACK} component={TabStack} />
    </Stack.Navigator>
  );
};

export default MainStack;