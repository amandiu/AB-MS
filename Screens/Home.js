import { View, TextInput, SafeAreaView, StatusBar, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import img from '../assets/list-symbol-of-three-items-with-dots.png'
import ima from '../assets/search.png';





const Home = ({navigation, onPress }) => {
  return (


    <View style={{
      position: 'absolute',
      alignItems: 'center',
      marginLeft: '3.5%',
      justifyContent: 'center',
    }}>

      <View style={styles.Homemain}>
        <View style={styles.containerh}>
          <View style={styles.search}>

            <Image source={ima} style={{
              height: 30,
              width: 30,
              margin: 5,
              marginLeft: 7

            }}></Image>
            <View style={{
              margin: 5
            }}>
              <TextInput placeholder='search'></TextInput>
            </View>
          </View>
        </View>

        <View style={styles.homeBox}>

          <TouchableOpacity onPress={onPress}>
            <Image source={img} style={{
              height: 20,
              width: 20,
              marginTop: 5
            }}></Image>
          </TouchableOpacity>
          <Text style={styles.busservice}>Bus Service</Text>
        </View>
      </View>
    </View>


  )
}

const { width } = Dimensions.get("screen")

export default Home

const styles = StyleSheet.create({
  coarea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  containerh: {
    width: width - 40,
    height: 40,
    borderRadius: 10,
    marginTop: '25%',
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeBox: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 12,
    margin: 10,
    marginTop: '-4%',
    marginBottom: '8%',
    borderRadius: 15,
    flexDirection: 'row',
  },
  Homemain: {
    justifyContent: "center",
    alignItems: 'center'
  },
  search: {
    backgroundColor: 'white',
    height: 35,
    width: 300,
    marginBottom: '20%',
    borderRadius: 20,
    flexDirection: 'row',
  },
  busservice: {
    fontSize: 20,
    marginLeft: 20,
  },

});
