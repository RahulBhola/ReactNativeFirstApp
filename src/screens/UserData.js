import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from "react-native";

const UserData = () => {
  const [myUserData, setMyUserData] = useState();
  const [isLoaded, setIsLoaded] = useState(true);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const myData = await response.json();
      setMyUserData(myData);
      setIsLoaded(false);
    } catch (error) {
      console.timeLog(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.mainContainer}>
        {isLoaded ? (
            <View style={styles.loader}> 
                <ActivityIndicator size="large" color="#0000ff"/> 
            </View>
            )
            :
            (
            <View>
                <Text style= {styles.mainHeader}>List Of Students</Text>
                <FlatList
                    data={myUserData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                          <View style={styles.imgContainer}>
                              <Image
                              style={styles.imgStyle}
                              resizeMode="cover"
                              source={{ uri: item.image }}
                              />
                          </View>
          
                          <View>
                              <View style={styles.bioDataContainer}>
                                <Text style={styles.bioData}>Bio-Data</Text>
                                <Text style={styles.idNumber}>{item.id<10 ?`#0${item.id}`:`#${item.id}`}</Text>
                              </View>
                              <View style={styles.mainContain}>
                                <Text style={styles.myName}>Name: {item.name}</Text>
                                <Text style={styles.myName}>Email: {item.email}</Text>
                                <Text style={styles.myName}>Mobile: {item.mobile}</Text>
                              </View>
                          </View>
                        </View>
                    );
                    }}
                />
            </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    width: "100%",
    paddingTop: 10,
    backgroundColor: "#b696d7",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  card: {
    width:250,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginLeft: 20,
    // margin: 39,
    // backgroundColor: "black",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent:"space-between",
  },
  bioDataContainer:{
    width: "100%",
    display:"flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor: "#353535",
    paddingVertical: 5,
  },
  idNumber:{
    fontSize: 20,
    color: "rgba(255,255,255,0.5)",
  },
  bioData:{
    marginHorizontal: 5,
    fontSize: 30,
    color:"#fff",
  },
  mainHeader:{
    fontSize: 30,
    color:"#fff",
    textAlign: "center",
  },
  imgContainer:{
    padding:10,
  },
  imgStyle:{
    width:"100%",
    height: 180,
  },
  mainContain:{
    backgroundColor: "#353535",
  },
  myName:{
    fontSize: 16,
    marginLeft: 5,
    marginBottom: 5,
    color: "white",
  },
});

export default UserData;
