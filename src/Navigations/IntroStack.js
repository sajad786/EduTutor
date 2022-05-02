import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {PreBoarding} from '../Screens';

const IntroStack = Stack => {
  return (
    <Stack.Navigator
      initialRouteName={navigationStrings.INTRO_STACK}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={navigationStrings.INTRO_STACK}
        component={PreBoarding}
      />
    </Stack.Navigator>
  );
};

export default IntroStack;
