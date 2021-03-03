import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
function bookRides(props) {

   const  [ bikeId, setBikeId ] = useState(0)
   const  [ position, setPosition ] = useState(0)
   const  [ bookedBikeId, setBookedBikeId ] = useState(0)
  // const [ password, setPassword ] = useState(0)
  const[bookingDone,setBookingDone]=useState(false)
  const bookRide = () => {
    console.log("test1*");
   
      axios.post(
          'http://192.168.56.1:5000/rent_bike?user_id='+props.user_Id+"&bike_id="+bikeId,{
          params: {
            user_id:props.user_id,
            bike_id: bikeId
            }
          })
          .then(function (response) {
            console.log("response", response.data);
            setBookingDone(true)
            setBookedBikeId(bike_id)
            
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
                  setBookingDone(true)
                  setBookedBikeId(bikeId)
                  alert("Booking Complete!!")
                  
                }
              });
            }
            const returnRide = () => {
              axios.post(
                'http://192.168.56.1:5000/return_bikes?user_id='+props.user_Id+"&bike_id=100007"+"&position="+position,{
                params: {
                  user_id:props.user_id,
                  bike_id: "100007",
                  position:position
                  }
                })
                .then(function (response) {
                  console.log("response", response.data);
                  // setBookingDone(True)
                  // setBookedBikeId(bike_id)
                  
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
    <View >
      <Card containerStyle={styles.containerStyle1}>
        <Card.Title>Pricing{props.user_Id}</Card.Title>
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
          onChangeText={value => setBikeId(value)}
        />
      </View>
      <View style={styles.buttonLayout}>
        <Button
          title="Let's Go!!!"
          type="solid"
          raised
          backgroundColor="green"
          buttonStyle={styles.buttonstyle1}
          onPress={() => bookRide()}
        />

      </View>
      <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/>
      {/* {bookingDone == true && */}
      <View>
      <Text style={styles.returnHeading}>Booking-Details</Text>
      <Text style={styles.returnHeading1}>Your bike-id:{bookedBikeId}</Text>
      <View style={styles.inputLine}>
                        <Input
                            placeholder='Enter Drop Position'
                            leftIcon={{ type: 'font-awesome', name: 'location-arrow' }}
                            onChangeText={value => setPosition(value)}
                        />
                    </View>
      <View style={styles.buttonLayout}>
        <Button
        
          title="Return"
          type="solid"
          raised
          backgroundColor="green"
          buttonStyle={styles.buttonstyle1}
          onPress={()=>returnRide()}
          
        />

      </View>
      </View>
      {/* } */}

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  returnHeading:{
    marginTop: 10,

    fontSize:25,
    fontWeight: "bold",
    textAlign: "center"
  },
  returnHeading1:{
    fontSize:15,
    fontWeight: "bold",
    textAlign: "center"
  },
  inputLine: {
    marginLeft: 20,
    width: "85%",
},
  priceText:{
    fontSize:40,
    fontWeight: "bold",
    textAlign: "center"
  },
  containerStyle1: {

  },

  buttonLayout: {
    marginBottom: 20,
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