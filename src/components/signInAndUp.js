import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

function signInAndUp({ navigation }) {
  return (
    <View style={styles.mainStyle}>
      <Text style={styles.PageHeading}>Bike-Rental</Text>
      <View style={{ flex: 8 }}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.welcomeMsg}>Hi there!!Nice to see you again</Text>
        <Text style={styles.inputPlaceHolder}>Email</Text>
        <View style={styles.inputLine}><Input
          placeholder='Enter your mail-id'
          leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
        /></View>

        <Text style={styles.inputPlaceHolder}>Password</Text>
        <View style={styles.inputLine}><Input
          placeholder='Enter your Password'
          leftIcon={{ type: 'font-awesome', name: 'key' }}
        /></View>
      </View>
      <View style={styles.buttonLayout}>
      <Button
        title="SIGN IN"
        type="solid"
        raised
        backgroundColor="red"
        buttonStyle={styles.buttonstyle1}
        onPress={() => navigation.push('userHome')}
      />
      <View style={{height:30}}/>
       <Button
        buttonStyle={styles.buttonstyle2}
        title="SIGN UP"
        type="solid"
        raised
        onPress={() => navigation.push('signUp')}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonLayout:{
    marginBottom:150,
    width: "85%",
    marginLeft: 30,

  },
  buttonstyle1:{
   
    
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#eb5a5a'
  },
  buttonstyle2:{
   
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#eb5a5a'
  },
  mainStyle: {
    flex: 1,
    flexDirection: "column",

  },
  PageHeading: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#eb5a5a',
    marginTop: 75,
    // marginLeft:25,
    alignSelf: "center"
  },
  title: {
    fontSize: 25,
    color: '#000000',
    marginLeft: 30,
    marginBottom: 10,
  },
  welcomeMsg: {
    marginBottom: 15,
    marginLeft: 30,
    color: '#999898',
  },
  inputPlaceHolder: {
    fontFamily: "Lucida Console",
    fontSize: 18,
    color: '#eb5a5a',
    marginLeft: 30,
  },
  inputLine: {
    marginLeft: 20,
    width: "85%",
  }
});

export default signInAndUp