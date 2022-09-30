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
      <Stack.Navigator  >
      <Stack.Screen name="Chat" component={Home}  options={{
        title: 'Chat',
        headerTitleAlign: 'center',
         headerTintColor: 'white',
         headerStyle: {
            backgroundColor: 'royalblue'
         },         
         headerLeft: () => <TouchableOpacity title="Info"><Image source={require('./assets/Vector.png')}></Image></TouchableOpacity>,

         headerRight: () => <TouchableOpacity title="Info"><Image source={require('./assets/Vector2.png')}></Image></TouchableOpacity>
  }}/>
  
  <Stack.Screen name="DayCap" component={DayCap}  options={{
        title: 'DayCap',
        headerTitleAlign: 'center',
         headerTintColor: 'white',
         headerStyle: {
            backgroundColor: 'royalblue'
         },         
         headerLeft: () => <TouchableOpacity title="Info"><Image source={require('./assets/Vector.png')}></Image></TouchableOpacity>,

         headerRight: () => <TouchableOpacity title="Info"><Image source={require('./assets/Vector2.png')}></Image></TouchableOpacity>
  }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;