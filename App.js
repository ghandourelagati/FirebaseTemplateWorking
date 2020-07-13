// App.js

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Measurement from './components/Measurement';
import Test from './components/Test';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Signup'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({title: 'Login'}, {headerLeft: null})}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({title: 'Dashboard'}, {headerLeft: null})}
      />
      <Stack.Screen
        name="Measurement"
        component={Measurement}
        options={({title: 'Measurement'}, {headerLeft: null})}
      />
      <Stack.Screen
        name="Test"
        component={Test}
        options={({title: 'Test'}, {headerLeft: null})}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
