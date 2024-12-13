// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from './Screen/LoadingScreen';
import LoginScreen from './Screen/LoginScreen'; // Adjust path as necessary
import RegistrationScreen from './Screen/RegistrationScreen';
import ForgotPasswordScreen from './Screen/ForgotPasswordScreen';
import HomeScreen from './Screen/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
       <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} /> 
       <Stack.Screen name="HomeScreen"   component={HomeScreen}  />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
    