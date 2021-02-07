import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

function bookRides({ navigation }) {
  return (
    <View >
      <View style={styles.inputLine}>
        <Input
          placeholder='Enter Bike Code'
          leftIcon={{ type: 'font-awesome', name: 'location-arrow' }}
        />
      </View>
      <View style={styles.buttonLayout}>
        <Button
          title="Let's Go!!!"
          type="solid"
          raised
          backgroundColor="green"
          buttonStyle={styles.buttonstyle1}
          onPress={() => navigation.push('userHome')}
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
})

export default bookRides