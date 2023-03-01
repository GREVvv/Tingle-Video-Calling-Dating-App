import {StyleSheet, Text, View, TextInput, StatusBar} from 'react-native';
import React, {useState, Component, Fragment} from 'react';
import LoginScreen from './src/screens/loginScreen';
import RegistrationScreen from './src/screens/registrationScreen';
import PreferenceScreen from './src/screens/preferenceScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homeScreen';
import InterestScreen from './src/screens/interestScreen';
import SettingsScreen from './src/screens/settingsScreen';
import EditProfileScreen from './src/screens/editProfileScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default class App extends Component{
  constructor() {
    super();
    this.state = {
      jwt: '',
      loading: true
    }

    // this.newJWT = this.newJWT.bind(this);
    // this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    // this.loadJWT = deviceStorage.loadJWT.bind(this);
    // this.loadJWT();
  }

  // newJWT(jwt){
  //   this.setState({
  //     jwt: jwt
  //   });
  // }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Registration"
            component={RegistrationScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Preference"
            component={PreferenceScreen}
          />
          <Stack.Screen
            options={{headerShown: false, gestureEnabled: false}}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
          options={{headerShown: false}}
          name="Profile"
          component={ProfileScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Interest"
            component={InterestScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Settings"
            component={SettingsScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="EditProfile"
            component={EditProfileScreen}
          />
          
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  }
};
