
import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
function homeAd( props) {
  // const { user_Id } = route.params;
  // console.log(user_Id)
  // {JSON.stringify(user_Id)}
  const  [ userName, setUserName ] = useState(0)
// useEffect(()=>{
//   axios.get(
//     "http://192.168.56.1:5000/user_name?userId="+props.user_Id)
//     .then(function (response) {
//       if (response.status == 200) {
      
//      console.log("name"+respone.data)
//       // console.log("user-id set-"+userId)
      
//     }
//     })

//     .catch(function (resp) {
//           if (resp.response != undefined && resp.response.status == 412) {
//             var errorString = resp.response.request._response;
//             var error = JSON.parse(errorString.substring(1, errorString.length - 1))
//             alert(error.message);
//           }
//           else if (resp.response != undefined && resp.response.status == 500) {
//             alert("Server Error!!");
//           }
//           else if (resp.response != undefined && resp.response.status == 400) {
//             alert("Bad Request!!");
//           }
//           else {
//             console.log("name test"+resp.respone.data)
//             // setUserName()

//           }
//         });
// })
  
  return (
    <View >
      <Text style={styles.welcomeMsg}>Hello </Text>
      
      <Card containerStyle={styles.CardStyle} wrapperStyle={styles.noBorder}>

        <Card.Cover containerStyle={styles.imageStyle} source={require('./images/cycle2.jpg')} />

        {/* <Paragraph>Explore,Travel and move around this beautiful city on a cycle</Paragraph> */}
      </Card>
      
      <Text style={styles.welcomeMsg1}>Explore,Travel and move around this beautiful city on a cycle</Text>
      <Card  containerStyle={styles.CardStyle}>

        <Card.Cover containerStyle={styles.imageStyle}  source={require('./images/location.jpg')}/>

        {/* <Paragraph>Card content</Paragraph> */}
      </Card>
      <Text style={styles.welcomeMsg1}>Spread across various parts of city</Text>
<Text>

</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  
  welcomeMsg: {
    backgroundColor: '#eb5a5a',
    fontSize: 25,
    marginBottom: 0,
  },
  welcomeMsg1: {
    backgroundColor: '#eb5a5a',
    fontSize: 15,
    marginBottom: 0,
    fontWeight: "bold",
    textAlign: "center"
  },
  CardStyle: {
    
    marginTop: 5,
    marginBottom: 0,
    paddingTop: 0,
   

  },
  imageStyle: {
   
    borderRadius:0
  },
  noBorder:{
    
  }
})

export default homeAd