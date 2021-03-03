import React, { useState, useEffect } from 'react'

import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
//@customer.route('')user_register/<username>/<sex>/<age>/<city>/<phone_no>/<account_name>/<password>

function signUp({ navigation }) {
    const [userName, setUserName] = useState(0)
    const [sex, setSex] = useState(0)
    const [age, setAge] = useState(0)
    const [city, setCity] = useState(0)
    const [phoneNo, setPhoneNo] = useState(0)
    const [accountName, setAccountName] = useState(0)
    const [password, setPassword] = useState(0)

    const uploadData = () => {
        console.log("test2");
        console.log("userName" + userName + "sex" + sex
            + "age" + age
            + "city" + city
            + "phone_no" + phoneNo
            + "account_name" + accountName
            + "password" + password)
        axios.post(
            "http://192.168.56.1:5000/user_register?userName="+userName+"&sex="+sex+"&age="+age+"&city="+city+"&phone_no="+phoneNo+"&account_name="+accountName+"&password="+password, {
            params: {
                userName: userName,
                sex: sex,
                age: age,
                city: city,
                phone_no: phoneNo,
                account_name: accountName,
                password: password,
            }
}
        )
            .then(function (response) {
                console.log("response", response.data);
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
                {/* @customer.route('')user_register/<username>/<sex>/<age>/<city>/<phone_no>/<account_name>/<password> */}

                <View style={{ flex: 8 }}>
                    <Text style={styles.title}>Sign Up</Text>
                    <Text style={styles.welcomeMsg}>Please enter the below details to sign up</Text>
                    <Text style={styles.inputPlaceHolder}>Name</Text>
                    <View style={styles.inputLine}>
                        <Input
                            placeholder='Enter your Name'
                            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                            onChangeText={value => setUserName(value)}
                        />

                    </View>
                    <Text style={styles.inputPlaceHolder}>Account Name</Text>
                    <View style={styles.inputLine}>
                        <Input
                            placeholder='Enter your Account-Name'
                            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                            onChangeText={value => setAccountName(value)}
                        />
                    </View>


                    <Text style={styles.inputPlaceHolder}>Password</Text>
                    <View style={styles.inputLine}>
                        <Input
                            placeholder='Enter your Password'
                            leftIcon={{ type: 'font-awesome', name: 'key' }}
                            onChangeText={value => setPassword(value)}
                        />
                    </View>
                    {/* <Text style={styles.inputPlaceHolder}>Confirm Password</Text>
                <View style={styles.inputLine}>
                    <Input
                        placeholder='Enter your Password'
                        leftIcon={{ type: 'font-awesome', name: 'key' }}
                        onChangeText={value => setPassword(value)}
                    />
                </View> */}
                    <Text style={styles.inputPlaceHolder}>Age</Text>
                    <View style={styles.inputLine}>
                        <Input
                            placeholder='Enter your Age'
                            leftIcon={{ type: 'font-awesome', name: 'calendar' }}
                            onChangeText={value => setAge(value)}
                        />
                    </View>
                    <Text style={styles.inputPlaceHolder}>Sex</Text>
                    <View style={styles.inputLine}><Input
                        placeholder='Enter your gender'
                        leftIcon={{ type: 'font-awesome', name: 'venus' }}
                        onChangeText={value => setSex(value)}
                    /></View>
                    <Text style={styles.inputPlaceHolder}>City</Text>
                    <View style={styles.inputLine}>
                        <Input
                            placeholder='Enter your City'
                            leftIcon={{ type: 'font-awesome', name: 'location-arrow' }}
                            onChangeText={value => setCity(value)}
                        />
                    </View>

                    <Text style={styles.inputPlaceHolder}>Phone-No</Text>
                    <View style={styles.inputLine}>
                        <Input
                            placeholder='Enter your Phone-No'
                            leftIcon={{ type: 'font-awesome', name: 'mobile' }}
                            onChangeText={value => setPhoneNo(value)}
                        />
                    </View>
                </View>
                <View style={styles.buttonLayout}>
                    <Button
                        title="Confirm"
                        type="solid"
                        raised
                        backgroundColor="red"
                        buttonStyle={styles.buttonstyle1}
                        onPress={() => uploadData()}
                    />
                    {/* navigation.push('userHome') */}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    buttonLayout: {
        marginBottom: 100,
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

    title: {
        fontSize: 25,
        color: '#000000',
        marginLeft: 30,
        marginBottom: 10,
        marginTop: 20
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

export default signUp