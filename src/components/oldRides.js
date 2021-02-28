import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
function oldRides({ navigation }) {

  return (
    <View>
      
      <Card containerStyle={styles.containerStyle1}>
        <Card.Title>Date</Card.Title>
        <Card.Divider />
        <View style={styles.centerAlign}>
        <Text style={styles.displayText}>Place1 <Icon name='arrow-right' type='font-awesome'/> Place2</Text>
        </View>
        <Text style={styles.priceText }>1{'\u00A3'}<Text style={{ fontSize: 20 }}></Text></Text>
        


      </Card>

    </View>
  );
}

const styles = StyleSheet.create({
  displayText: {
    fontSize: 25,
    fontWeight: "bold",

  },
  priceText:{
    fontSize:40,
    fontWeight: "bold",
    textAlign: "center"
  },
  centerAlign:{
    alignItems: "center"
  }
})

export default oldRides