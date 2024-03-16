import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';

import Main from '@/sceens/Main/Main';

import ProfileSvg from '../../../assets/svg/ProfileSvg';
import SwitchSvg from '../../../assets/svg/Switch';

const Tab = createBottomTabNavigator();

export default function Tabs({ route }: { route: any }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#FB631D',
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen
        name="Main"
        options={{
          tabBarLabel: 'Рестораны',
          tabBarIcon: SwitchSvg,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
        initialParams={{
          ...route.params,
        }}
        component={Main}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: 'Профиль',
          tabBarIcon: ProfileSvg,
        }}
        component={Main}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: { height: 100, paddingTop: 5, paddingHorizontal: 50 },
  tabBarLabel: { fontSize: 14 },
});
