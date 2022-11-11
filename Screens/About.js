import { View, Text, Image } from 'react-native'
import React from 'react'
import Abouts from '../assets/About.png';


const About = () => {
  return (
    <View style={{
      height: '100%',
      width: '100%',
      margin: '1%',
      padding: '1%',
      alignItems: 'center',
      
    }}>
      <View style={{
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        paddingHorizontal: '5%',
        paddingVertical: '3%',
        justifyContent: 'space-around',
        marginTop:'2%'
      }}>
        <View>
          <Image source={Abouts} style={{
            height: 28,
            width: 28,
          }}></Image>
        </View>
        <View>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}> About</Text>
        </View>
      </View>

      <View style={{
        height: '60%',
        width: '90%',
        margin: '4%',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        elevation: 5

      }}>

      </View>

    </View>
  )
}

export default About