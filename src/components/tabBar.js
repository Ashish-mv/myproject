import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import oldRides from './oldRides'
import bookride from './bookRide'
import settings from './settings'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import homeAd from './homeAd'



const Tab = createBottomTabNavigator()
function tabBar({ navigation }) {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Book-Ride') {
                        iconName = focused
                            ? 'bicycle'
                            : 'bicycle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';

                    }
                    else if (route.name == 'old-Rides') {
                        iconName = focused ? 'timer' : 'timer-outline';
                    }
                    else if (route.name == 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={homeAd} />
            <Tab.Screen name="Book-Ride" component={bookride} />
            <Tab.Screen name="old-Rides" component={oldRides} />
            <Tab.Screen name="Settings" component={settings} />
        </Tab.Navigator>




    );
}
const styles = StyleSheet.create({
    buttonLayout: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: 10,
        width: "100%",
        backgroundColor: "grey"


    },
})
export default tabBar
