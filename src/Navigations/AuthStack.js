import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {Login, PreBoarding, Signup} from '../Screens';

const AuthStack = Stack => {
  return (
    <Stack.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={navigationStrings.PREBOARDING} component={Signup} />
      <Stack.Screen name={navigationStrings.PREBOARDING} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
