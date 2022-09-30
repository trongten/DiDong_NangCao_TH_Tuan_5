import * as React from 'react';
import { View, Text,Image ,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DayCap from './views/daycap';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App() {
  return (

    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Chat" component={Home} /> 
      <Stack.Screen name="DayCap" component={DayCap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;