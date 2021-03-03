import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Input } from 'react-native-elements';
// import { Button } from 'react-native-elements';
function oldRides(props) {
  const  [ bikeId, setBikeId ] = useState(0)
   const  [ repairType, setRepairType ] = useState(0)
  const reportDefective = () => {
    axios.post(
      'http://192.168.56.1:5000/report_defects?user_id='+props.user_Id+"&bike_id="+bikeId+"&repair_type="+repairType,{
      params: {
        user_id:props.user_id,
        bike_id: bikeId,
        repair_type:repairType
        }
      })
      .then(function (response) {
        // console.log("response", response.data.total_amount);
        // console.log("response", response.data.total_amount[0]);
        // console.log("response", response.data.total_amount.length);
        // console.log("response", response.data.total_amount[response.data.total_amount.length-1]);
        //   setReturnDone(true)
        // setBookedBikeId(bike_id)
        // setAmount( amount+response.data.total_amount[0])
        // payAmount()
        
        alert("Bike Reported.Thank you!!");
        
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
              setReturnDone(True)
              alert("Sorry!,Couldn't reach our server!!")
            }
          });

  }

  return (

    <View>

      <Card containerStyle={styles.containerStyle1}>
        <Card.Title>Report Defective Bikes</Card.Title>
        <Card.Divider />
        {/* <View style={styles.centerAlign}> <Text style={styles.displayText}>We are sorry for inconvenience caused.</Text></View> */}
        
        <View style={styles.centerAlign}><Text style={styles.displayText}>We are sorry for the inconvenience caused</Text></View>
        <View style={styles.centerAlign}><Text style={styles.displayText1}>Please Enter the type of defective from below option</Text></View>
        <View style={styles.centerAlign}><Text style={styles.displayText1}>1.Puncture Tires</Text></View>
        <View style={styles.centerAlign}><Text style={styles.displayText1}>2.Broken chain</Text></View>
        <View style={styles.centerAlign}><Text style={styles.displayText1}>3.Defective seat</Text></View>
        <View style={styles.centerAlign}><Text style={styles.displayText1}>4.Broken handle</Text></View>
        <View style={styles.centerAlign}><Text style={styles.displayText1}>5.Other probelms</Text></View>
</Card>
<View style={styles.topPadding}>
<Text style={styles.inputPlaceHolder}>Bike-Id</Text></View>
          <View style={styles.inputLine}><Input
            placeholder='Enter Bike Id'
            leftIcon={{ type: 'font-awesome', name: 'bicycle' }}
            onChangeText={value => setBikeId(value)}
          /></View>
          <Text style={styles.inputPlaceHolder}>Type of defective</Text>
          <View style={styles.inputLine}><Input
            placeholder='Enter defective option number '
            leftIcon={{ type: 'font-awesome', name: 'gears' }}
            onChangeText={value => setRepairType(value)}
          /></View>
          <View style={styles.buttonLayout}>
          <Button
            buttonStyle={styles.buttonstyle2}
            title="Report"
            type="solid"
            raised
            onPress={() => reportDefective()}
          /></View>
    </View>
  );
}


const styles = StyleSheet.create({
  topPadding:{
    paddingTop: 10,
  },
  buttonLayout: {
    marginBottom: 150,
    width: "85%",
    marginLeft: 30,

  },
  buttonstyle2: {

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
  },
  displayText: {
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center"

  },
  displayText: {
    fontSize: 17,
    fontWeight: "bold",
    alignItems: "center"

  },
  displayText1: {
    marginTop:10,
    fontSize: 15,
    
    alignItems: "center"

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