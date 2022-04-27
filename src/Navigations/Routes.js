import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import { Home } from '../Screens';
import TabStack from './TabStack';
import AuthStack from './AuthStack';

    // const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
     {true ? <TabStack /> : <AuthStack/>}
    </NavigationContainer>
  );
};

export default Routes;
