import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


function bikeBooked( props) {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <View style={styles.buttonLayout}>
        <Button
          title="Sign-Out"
          type="solid"
          raised
          backgroundColor="green"
          buttonStyle={styles.buttonstyle1}
          // onPress={() => navigation.push('signInAndUp')}
        />

      </View>

    </View>
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
})

export default bikeBooked