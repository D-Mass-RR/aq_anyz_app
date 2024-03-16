import '../../global.css';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { routes } from '@/app/routes';
import { loadSelectedTheme } from '@/core';
import { useThemeConfig } from '@/core/use-theme-config';

export { ErrorBoundary } from 'expo-router';

loadSelectedTheme();
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Gilroy: require('../../assets/fonts/Gilroy.ttf'),
    gropled: require('../../assets/fonts/gropled-bold.otf'),
    'Gilroy-Light': require('../../assets/fonts/Gilroy-Light.ttf'),
    'Gilroy-Medium': require('../../assets/fonts/Gilroy-Medium.ttf'),
    'Gilroy-Bold': require('../../assets/fonts/Gilroy-Black.ttf'),
  });

  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    hideSplash();
  }, [hideSplash, fontError, fontsLoaded]);

  return (
    <Providers>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShown: false,
        }}
      >
        {routes.map((item, index) => (
          <Stack.Screen
            {...item}
            key={index}
            options={{
              animationTypeForReplace: 'push',
              animationEnabled: true,
              gestureResponseDistance: 50,
            }}
          />
        ))}
      </Stack.Navigator>
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig();

  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider value={theme}>
        <NavigationContainer>{children}</NavigationContainer>
        <FlashMessage position="top" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
