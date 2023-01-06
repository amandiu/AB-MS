import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stay from './Screens/Stay';
import Login from './Screens/Login';
import register from './Screens/Register';
import { Background } from './Components/Background';
import { SvgXml } from 'react-native-svg';
import Card from './Components/Card';
import Bottombar from './Components/Bottombar';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, onValue, set } from 'firebase/database';


/*
header: (props) => <Header {...props} />
 */

const Stack = createNativeStackNavigator();


export default function App() {

  //Connect between to firebase and expo project
  // Firebase Function (firebaseConfig)

  const firebaseConfig = {
    apiKey: "AIzaSyCilPVNxOr7WmVJt63NAIVABFRERpsMLFw",
    authDomain: "project-45f03.firebaseapp.com",
    projectId: "project-45f03",
    storageBucket: "project-45f03.appspot.com",
    messagingSenderId: "813381821307",
    appId: "1:813381821307:web:27ab6989c7cb5fdc84d3de"
  };

  
initializeApp(firebaseConfig);



function storeHighScore(userId, score) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);
  set(reference, {
    highscore: score,
  });
}


  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' translucent={true} backgroundColor='transparent' />
      <SvgXml xml={Background} height='800' width={'400'} style={styles.AppSvg}></SvgXml>
      <Navigation/>
    </View>
  )
}
/*<Navigation />
*/
const Navigation = () => {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: 'transparent'
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen options={{
           headerShown: false
        }} name="Stay Screen" component={Stay} />
        <Stack.Screen options={{
          headerShown: false
        }} name="StayScreen2" component={Login} />
        <Stack.Screen options={{
        title: 'Registration',
        headerStyle: { backgroundColor: 'transparent' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} name="Registration" component={register} />
        <Stack.Screen options={{
          headerShown: false
        }} name="LogInButton" component={Bottombar} />
        <Stack.Screen options={{
          headerShown: false
        }} name="RegisterButton" component={Bottombar} />
        <Stack.Screen options={{
          headerShown: false,
        }} name="BuyTicket" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  AppSvg: {
    position: 'absolute',
    top: -20
  }
});
