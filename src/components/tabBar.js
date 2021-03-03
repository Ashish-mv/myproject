import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OldRides from './oldRides'
import Bookride from './bookRide'
import Settings from './settings'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeAd from './homeAd'



const Tab = createBottomTabNavigator()
function tabBar(props) {

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
            <Tab.Screen name="Home"  children={()=><HomeAd user_Id={props.user_Id}/> }/>
            <Tab.Screen name="Book-Ride" children={()=><Bookride user_Id={props.user_Id}/> }  />
            <Tab.Screen name="old-Rides" children={()=><OldRides user_Id={props.user_Id}/> }/>
            <Tab.Screen name="Settings" children={()=><Settings user_Id={props.user_Id}/> }  />
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
