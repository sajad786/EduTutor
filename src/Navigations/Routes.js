import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AuthStack from './AuthStack';
import IntroStack from './IntroStack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      {!!false ? IntroStack(Stack) : true ? MainStack(Stack) : AuthStack(Stack)}
    </NavigationContainer>
  );
};

export default Routes;
