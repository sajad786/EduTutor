import {View, Text} from 'react-native';
import React from 'react';
import {Courses, Home, PreBoarding, Profile, Reels} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={navigationStrings.PREBOARDING} component={PreBoarding} />
    </Stack.Navigator>
  );
};

export default AuthStack;
