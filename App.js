import React, { useState } from 'react';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Styling
import { NativeBaseProvider, useColorModeValue, useTheme } from 'native-base';
import theme from './src/Theme/theme.js';
import navigatorTheme from './src/Theme/navigatorTheme.js';
//hooks
import { useColorMode } from 'native-base';
//custom components
import TabBar from './src/components/Navigation/TabBar.js';
//Screens
import Home from './src/screens/home.js';
import Grid from './src/screens/grid.js';
import Stats from './src/screens/stats.js'



const Tab = createBottomTabNavigator();



export default function App() {

  
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false,}} tabBar={props => <TabBar {...props}/> }>
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Grid" component={Grid}/>
          <Tab.Screen name="Stats" component={Stats}/>
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}



