import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Rahul Bhola</Text>
      <Text style={styles.paraStyle}>I am a full stack developer</Text>
      <View>
        <Image 
          style={styles.imgStyle}
          source = {{uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}}
        />
      </View>
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutHeader}>About me</Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa distinctio eum illum enim laboriosam? Tenetur iste eaque sit cum reprehenderit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate et sapiente accusamus.</Text>
      </View>
      <Text style={styles.mainHeader}>Follow me on Social Network</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.buttonStyle}
          onPress={()=>Linking.openURL("https://rahulbhola.github.io/MyPortfolio/")}
        >
        <Image
          style= {styles.iconStyle}
          source={{uri: "https://cdn-icons-png.flaticon.com/512/211/211463.png"}}
        />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonStyle}
          onPress={()=>Linking.openURL("https://rahulbhola.github.io/MyPortfolio/")}
        >
        <Image
          style= {styles.iconStyle}
          source={{uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png"}}
        />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonStyle}
          onPress={()=>Linking.openURL("https://rahulbhola.github.io/MyPortfolio/")}
        >
        <Image
          style= {styles.iconStyle}
          source={{uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png"}}
        />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  aboutContainer:{
    dispaly: "flex",
    alignItems: "center",
  },
  imgStyle:{
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader:{
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight:"500",
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "JosefinSans_500Medium",
  },
  paraStyle:{
    fontSize: 12,
    color: "#7d7d7d",
    paddingBottom: 20,
  },
  aboutLayout:{
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  aboutHeader:{
    fontSize: 14,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 8,
    fontFamily: "JosefinSans_500Medium",
    alignSelf: "center",
  },
  aboutPara:{
    color: "#fff",
  },
  menuContainer:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconStyle:{
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
})

export default About;
