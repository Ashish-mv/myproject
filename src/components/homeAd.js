import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
function homeAd({ navigation }) {
  return (
    <View >
      <Text style={styles.welcomeMsg}>Hi user</Text>
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


    </View>
  );
}

const styles = StyleSheet.create({
  welcomeMsg: {
    backgroundColor: '#eb5a5a',
    fontSize: 25,
    marginBottom: 0
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