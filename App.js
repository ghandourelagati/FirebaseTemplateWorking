/* eslint-disable prettier/prettier */
// App.js

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import firebase from './database/firebase';

import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
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
        name="Logout"
        component={Logout}
        options={({title: 'Logout'}, {headerLeft: null})}
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

export default class App extends React.Component {
  UNSAFE_componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
        <Measurement />;
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}
