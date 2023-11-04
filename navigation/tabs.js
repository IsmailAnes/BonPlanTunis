import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import HomeScreen from '../src/screens/appScreens/homeScreen';
import SearchScreen from '../src/screens/appScreens/searchScreen';
import ProfileScreen from '../src/screens/appScreens/profileScreen';
import EventScreen from '../src/screens/appScreens/eventScreen';
import AddPostScreen from '../src/screens/appScreens/addPostScreen';

const Tab = createBottomTabNavigator();
export function Tabs() {
  const {colors, fonts} = useTheme();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={({focused}) => ({
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  fontSize: 14,
                  color: colors.primary,
                  fontFamily: fonts.regular,
                }}>
                {focused ? 'Accueil' : ''}
              </Text>
            );
          },
          headerTitle: '',
          highLightContent: {
            title: `Page d'accueil`,
            message: 'Gardez un oeil sur les annonces.',
          },
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
              source={
                focused
                  ? require('../src/assets/tabIcons/homeS.png')
                  : require('../src/assets/tabIcons/homeU.png')
              }
            />
          ),
        })}
      />

      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={({focused}) => ({
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  fontSize: 14,
                  color: colors.primary,
                  fontFamily: fonts.regular,
                }}>
                {focused ? 'Recherche' : ''}
              </Text>
            );
          },
          headerTitle: '',
          highLightContent: {
            title: `Page d'accueil`,
            message: 'Gardez un oeil sur les annonces.',
          },
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
              source={
                focused
                  ? require('../src/assets/tabIcons/searchS.png')
                  : require('../src/assets/tabIcons/searchU.png')
              }
            />
          ),
        })}
      />

      <Tab.Screen
        name="add"
        component={AddPostScreen}
        options={({focused}) => ({
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  fontSize: 14,
                  color: colors.primary,
                  fontFamily: fonts.regular,
                }}>
                {focused ? '' : ''}
              </Text>
            );
          },
          headerTitle: '',
          highLightContent: {
            title: `Page d'accueil`,
            message: 'Gardez un oeil sur les annonces.',
          },
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
              }}
              source={
                focused
                  ? require('../src/assets/tabIcons/addS.png')
                  : require('../src/assets/tabIcons/add.png')
              }
            />
          ),
        })}
      />

      <Tab.Screen
        name="event"
        component={EventScreen}
        options={({focused}) => ({
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  fontSize: 14,
                  color: colors.primary,
                  fontFamily: fonts.regular,
                  textTransform: 'capitalize',
                }}>
                {focused ? 'événements' : ''}
              </Text>
            );
          },
          headerTitle: '',
          highLightContent: {
            title: `Page d'accueil`,
            message: 'Gardez un oeil sur les annonces.',
          },
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
              source={
                focused
                  ? require('../src/assets/tabIcons/eventS.png')
                  : require('../src/assets/tabIcons/eventU.png')
              }
            />
          ),
        })}
      />

      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={({focused}) => ({
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  fontSize: 14,
                  color: colors.primary,
                  fontFamily: fonts.regular,
                }}>
                {focused ? 'Profile' : ''}
              </Text>
            );
          },
          headerTitle: '',
          highLightContent: {
            title: `Page d'accueil`,
            message: 'Gardez un oeil sur les annonces.',
          },
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
              source={
                focused
                  ? require('../src/assets/tabIcons/userS.png')
                  : require('../src/assets/tabIcons/userU.png')
              }
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
