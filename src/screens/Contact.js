import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';

const Contact = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  
  const submit=()=>{
    if(!name && !email && !phone && !message) Alert.alert('Please fill out all fields');
    else{
      Alert.alert(`Thank You ${name}`);
      navigation.navigate('Home');
    }
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level Up Your Knowledge</Text>
      <Text style={styles.description}>You can reach us anytime at rahul@gmail.com</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Your Name</Text>
        <TextInput 
        style={styles.inputStyle}
        placeholder={"Rahul Bhola"}
        value= {name}
        onChangeText={(userdata)=>setName(userdata)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Your Email</Text>
        <TextInput 
        style={styles.inputStyle}
        placeholder={"demo@rahul.com"}
        value= {email}
        onChangeText={(email)=>setEmail(email)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Your Mobile no</Text>
        <TextInput 
        style={styles.inputStyle}
        placeholder={"123456789"}
        value= {phone}
        onChangeText={(phone)=>setPhone(phone)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>How can we help You</Text>
        <TextInput 
        style={[styles.inputStyle,styles.multilineStyle]}
        placeholder={"Tell Us About YourSelf"}
        value= {message}
        onChangeText={(message)=>setMessage(message)}
        numberOfLines={5}
        multiline = {true}
        />
      </View>
      {/* checkbox */}
      <View style={styles.wrapper}>
        <Checkbox 
          value={agree}
          onValueChange={()=> setAgree(!agree)}
          color={agree?"#4640EB":undefined}
        />
          <Text style={styles.wrapperText}>I have read and agreed with the T&C</Text>
      </View>
      {/* submit button*/}
      <TouchableOpacity
      style={[styles.buttonStyle,{
        backgroundColor:agree?"#4640EB":"grey",
      }
    ]}
    disabled={!agree}
    onPress={submit}
      >
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer:{
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader:{
    fontSize: 20,
    color: "#344055",
    textTransform: "capitalize",
    // fontWeight: "500",
    // padingTop: 20,
    paddingBottom: 15,
    textAlign:"center",
    fontFamily: "NunitoSans_600SemiBold",
  },
  description:{
    fontSize: 20,
    color:"#7d7d7d",
    textAlign:"left",
    fontFamily: "JosefinSans_400Regular",
    paddingBottom: 1,
  },
  inputContainer:{
    marginTop: 10, 
  },
  label:{
    fontWeight: "bold",
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "JosefinSans_400Regular",
    // lineHeight: 25, 
  },
  inputStyle:{
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 1,
    borderRadius:2,
  },
  multilineStyle:{
    paddingVertical: 1,
  },
  buttonStyle:{
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText:{
    color: "#eee",
  },
  wrapper:{
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    fontFamily: "JosefinSans_400Regular",
  },
  wrapperText:{
    marginLeft: 10,
    color: "#7d7d7d",
    fontFamily: "JosefinSans_400Regular",
  },
})

export default Contact;
