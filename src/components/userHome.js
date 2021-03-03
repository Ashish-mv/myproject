import * as React from 'react';
import { View, Text, Button, Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import oldRides from './oldRides'
import bookride from './bookRide'
import settings from './settings'
import Icon from 'react-native-vector-icons/FontAwesome';
import TabBar from './tabBar'



const Tab = createBottomTabNavigator()
function userHome({ route,navigation }) {
  const { user_Id } = route.params;
  // const [userId, setUserId] = useState(user_d)
  console.log("welcome1"+user_Id)
  return (
    <TabBar user_Id={route.params.user_Id}/>
       


   
  );
}
const styles = StyleSheet.create({
  buttonLayout: {
      flex: 1, 
      justifyContent: 'space-around',
      flexDirection: 'row',
      height:10,
      width: "100%",
      backgroundColor:"grey"
      

  },
})
export default userHome

