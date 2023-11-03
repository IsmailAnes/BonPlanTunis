import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import landingScreen from '../src/screens/auth/landingScreen'
import registreScreen from '../src/screens/auth/registreScreen'
import loginScreen from '../src/screens/auth/loginScreen'
import forgetPswd from '../src/screens/auth/forgetPswd'
import setupAccount from '../src/screens/auth/setupAccount'
import {Tabs} from './tabs'
import {themeLight} from '../src/utility';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export function AppStack() {
  return (
    <NavigationContainer theme={themeLight}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="landing" component={landingScreen} />
      <Stack.Screen name="registre" component={registreScreen} />
      <Stack.Screen name="login" component={loginScreen} />
      <Stack.Screen name="forgetPswd" component={forgetPswd} />
      <Stack.Screen name="setupAccount" component={setupAccount} />
      <Stack.Screen name="tabs" component={Tabs} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}