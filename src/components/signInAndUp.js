import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import axios from 'axios';

function signInAndUp({ navigation }) {
  const [userName, setUserName] = useState(0)
  const [password, setPassword] = useState(0)
  const [userId, setUserId] = useState(0)
  const loginCheckFunction = () => {
    // console.log("test1*");
    //  console.log(userName +":"+password)

    axios.post(
      "http://192.168.56.1:5000/user_login", {
      params: {
        username: userName,
        password:password
      }
    })
      .then(function (response) {
        console.log("response1", response.data);
        console.log("response1", response.data.role[0]);

      })

      .catch(function (resp) {
        if (resp.response != undefined && resp.response.status == 412) {
          var errorString = resp.response.request._response;
          var error = JSON.parse(errorString.substring(1, errorString.length - 1))
          alert(error.message);
        }
        else if (resp.response != undefined && resp.response.status == 500) {
          alert("Server Error!!");
        }
        else if (resp.response != undefined && resp.response.status == 400) {
          alert("Bad Request!!");
        }
        else {
          alert("Sorry!,Couldn't reach our server!!")

        }
      });

    axios.get(
        "http://192.168.56.1:5000/user_id",{
          params:{username:userName}
        })
        .then(function (response) {
          if (response.status == 200) {
          
          console.log("response2", response.data.user_id[0]);
          // console.log("user-id set-"+userId)
          navigation.push('userHome',{
            user_Id:response.data.user_id[0]
          })
        }
        })

        .catch(function (resp) {
              if (resp.response != undefined && resp.response.status == 412) {
                var errorString = resp.response.request._response;
                var error = JSON.parse(errorString.substring(1, errorString.length - 1))
                alert(error.message);
              }
              else if (resp.response != undefined && resp.response.status == 500) {
                alert("Server Error!!");
              }
              else if (resp.response != undefined && resp.response.status == 400) {
                alert("Bad Request!!");
              }
              else {
                alert("Sorry!,Couldn't reach our server!!")

              }
            });
  }


  return (
    <ScrollView>
      <View style={styles.mainStyle}>
        <Text style={styles.PageHeading}>Bike-Rental</Text>
        <View style={{ flex: 8 }}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.welcomeMsg}>Hi there!!Nice to see you again</Text>
          <Text style={styles.inputPlaceHolder}>Email</Text>
          <View style={styles.inputLine}><Input
            placeholder='Enter your mail-id'
            leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
            onChangeText={value => setUserName(value)}
          /></View>

          <Text style={styles.inputPlaceHolder}>Password</Text>
          <View style={styles.inputLine}><Input
            placeholder='Enter your Password'
            leftIcon={{ type: 'font-awesome', name: 'key' }}
            onChangeText={value => setPassword(value)}
          /></View>
        </View>
        <View style={styles.buttonLayout}>
          <Button
            title="SIGN IN"
            type="solid"
            raised
            backgroundColor="red"
            buttonStyle={styles.buttonstyle1}
            onPress={() => loginCheckFunction()}
          />
          <View style={{ height: 30 }} />
          <Button
            buttonStyle={styles.buttonstyle2}
            title="SIGN UP"
            type="solid"
            raised
            onPress={() => navigation.push('signUp')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonLayout: {
    marginBottom: 150,
    width: "85%",
    marginLeft: 30,

  },
  buttonstyle1: {


    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#eb5a5a'
  },
  buttonstyle2: {

    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#eb5a5a'
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