import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
function bookRides({ navigation }) {
  return (
    <View >
      <Card containerStyle={styles.containerStyle1}>
        <Card.Title>Pricing</Card.Title>
        <Card.Divider />

        <Text style={{ marginBottom: 10,textAlign: "center" }}>
          Enjoy your ride for the best price!!
         
        </Text>
        <Text style={styles.priceText }>1{'\u00A3'}<Text style={{ fontSize: 20 }}>/30 min</Text></Text>


      </Card>
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
  priceText:{
    fontSize:40,
    fontWeight: "bold",
    textAlign: "center"
  },
  containerStyle1: {

  },

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