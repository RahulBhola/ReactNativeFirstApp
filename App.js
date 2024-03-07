import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import UserData from "./src/screens/UserData";
import {
  useFonts,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';

import {
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from '@expo-google-fonts/josefin-sans';


export default function App() {
  const Stack = createNativeStackNavigator();
  let [fontsLoaded] = useFonts({
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
  });
  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home Screen */ }
        {/*  <Stack.Screen name="Home" component={Home} />  */}
        <Stack.Screen name="Home" options={{headerShown: false,}}>
          {(props) => <Home {...props} channelName={"vinnod Thapa"}/>}
        </Stack.Screen>

        {/* Course Screens */}
        <Stack.Screen name="Course" component={Course}
          options={{headerTitleStyle:{
            fontSize: 25,
            fontFamily: "NunitoSans_600SemiBold",
          },
          headerTitle:"Courses",
          headerTitleAlign:"center",
        }}
        />

        {/* About Screens */}
        <Stack.Screen name="About" component={About}
        options={{headerTitleStyle:{
          fontSize: 25,
          fontFamily: "NunitoSans_600SemiBold",
        },
        headerTitle:"Students Data",
        headerTitleAlign:"center",
      }}/>

        {/* UserData Screens */}
        <Stack.Screen name="Student" component={UserData}
        options={{headerTitleStyle:{
          fontSize: 25,
          fontFamily: "NunitoSans_600SemiBold",
        },
        headerTitleAlign:"center",
      }}/>

        {/* Contact Screens */}
        <Stack.Screen name="Contact" component={Contact}
        options={{headerTitleStyle:{
          fontSize: 25,
          fontFamily: "NunitoSans_600SemiBold",
        },
        headerTitleAlign:"center",
      }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
