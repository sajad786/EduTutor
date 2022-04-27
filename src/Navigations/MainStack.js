import { View, Text } from 'react-native'
import React from 'react'
import { Courses, Home, Profile, Reels } from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const MainStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={navigationStrings.HOME} component={Home} />
      <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />
      <Stack.Screen name={navigationStrings.COURSES} component={Courses} />
      <Stack.Screen name={navigationStrings.REELS} component={Reels} />
    </Stack.Navigator>
  );
}

export default MainStack;