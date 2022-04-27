import { View, Text } from 'react-native'
import React from 'react'
import { Courses, Home, Profile, Reels } from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { moderateScaleVertical } from '../styles/responsiveSize';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: ({focused, name}) => {
                if (name === navigationStrings.HOME) {
                    if (focused) {
                        return (
                            <View style={{
                                width: moderateScaleVertical(25),
                                height: moderateScaleVertical(25),
                                backgroundColor: '#FFF',
                                borderRadius: moderateScaleVertical(25),
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: moderateScaleVertical(5),
                            }}>
                                <Text style={{
                                    fontSize: moderateScaleVertical(10),
                                    color: '#000',
                                }}>
                                    {'Home'}
                                </Text>
                            </View>
                        )
                    } else {
                        return (
                            <View style={{
                                width: moderateScaleVertical(25),
                                height: moderateScaleVertical(25),
                                backgroundColor: '#FFF',
                                borderRadius: moderateScaleVertical(25),
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: moderateScaleVertical(5),
                            }}>
                                <Text style={{
                                    fontSize: moderateScaleVertical(10),
                                    color: '#000',
                                }}>
                                    {'Home'}
                                </Text>
                            </View>
                        )
                    }
                }
            
        },
        tabBarStyle:{
            backgroundColor: '#fff',
            height:moderateScaleVertical(60),
            paddingBottom:moderateScaleVertical(10),
        }
      }}>
      <Tab.Screen name={navigationStrings.HOME} component={Home} />
      <Tab.Screen name={navigationStrings.COURSES} component={Courses} />
      <Tab.Screen name={navigationStrings.REELS} component={Reels} />
      <Tab.Screen name={navigationStrings.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}

export default TabStack