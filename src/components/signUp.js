import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

function signUp({ navigation }) {
    return (
        <ScrollView>
        <View style={styles.mainStyle}>

            <View style={{ flex: 8 }}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.welcomeMsg}>Please enter the below details to sign up</Text>
                <Text style={styles.inputPlaceHolder}>Name</Text>
                <View style={styles.inputLine}>
                    <Input
                        placeholder='Enter your Name'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    />
                </View>
                <Text style={styles.inputPlaceHolder}>Email</Text>
                <View style={styles.inputLine}><Input
                    placeholder='Enter your mail-id'
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                /></View>

                <Text style={styles.inputPlaceHolder}>Password</Text>
                <View style={styles.inputLine}>
                    <Input
                        placeholder='Enter your Password'
                        leftIcon={{ type: 'font-awesome', name: 'key' }}
                    />
                </View>
                <Text style={styles.inputPlaceHolder}>Confirm Password</Text>
                <View style={styles.inputLine}>
                    <Input
                        placeholder='Enter your Password'
                        leftIcon={{ type: 'font-awesome', name: 'key' }}
                    />
                </View>
                <Text style={styles.inputPlaceHolder}>City</Text>
                <View style={styles.inputLine}>
                    <Input
                        placeholder='Enter your City'
                        leftIcon={{ type: 'font-awesome', name: 'location-arrow' }}
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
                    onPress={() => navigation.push('userHome')}
                />
                
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