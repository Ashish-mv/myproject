import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserHome from './src/components/userHome'
import SignInAndUp from './src/components/signInAndUp'
import SignUp from './src/components/signUp'
import BookRide from './src/components/bookRide'
import OldRides from './src/components/oldRides'
import Settings from './src/components/settings'
import HomeAd from './src/components/homeAd'
import BikeBooked from './src/components/bikeBooked'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#eb5a5a',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} initialRouteName="signInAndUp">
        <Stack.Screen
          name="userHome"
          component={UserHome}
          options={{
            title: 'Bike Rental',
            headerLeft: null

          }}

        />
        <Stack.Screen
          name="signUp"
          component={SignUp}
          options={{
            title: 'Sign Up',

          }}

        />
        <Stack.Screen name="signInAndUp"
          component={SignInAndUp}
          options={{
            title: 'Login-Page'
          }}

        />
        <Stack.Screen name="settings"
          component={Settings}
          options={{
            title: 'Login-Page'
          }}

        />
        <Stack.Screen
          name="oldRides"
          component={OldRides}
          options={{
            title: 'Login-Page'
          }}

        />
        
        <Stack.Screen
          name="bookRides"
          component={BookRide}
          options={{
            title: 'Login-Page'
          }}

        />
        <Stack.Screen
          name="homeAd"
          component={HomeAd}
          options={{
            title: 'Login-Page'
          }}

        />
        <Stack.Screen
          name="bikeBooked"
          component={BikeBooked}
          options={{
            title: 'Booking'
          }}

        />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




