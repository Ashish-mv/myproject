import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
function oldRides(props) {
  const getOldRides = () => {

        axios.get(
            'http://39.102.40.181:5000/customer/rent_choice/userName/bikeid/')
            .then(function (response) {
              console.log("response", response.data);
              console.log("response id", response.data.user_id)
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
    
    <View>

      <Card containerStyle={styles.containerStyle1}>
        <Card.Title>Date</Card.Title>
        <Card.Divider />
        <View style={styles.centerAlign}>
          <Text style={styles.displayText}>Place1 <Icon name='arrow-right' type='font-awesome' /> Place2</Text>
        </View>
        <Text style={styles.priceText}>1{'\u00A3'}<Text style={{ fontSize: 20 }}></Text></Text>



      </Card>

    </View>
  );
}

const styles = StyleSheet.create({
  displayText: {
    fontSize: 25,
    fontWeight: "bold",

  },
  priceText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },
  centerAlign: {
    alignItems: "center"
  }
})

export default oldRides