import { View, Text, Image, TextInput,Dimensions,StyleSheet} from 'react-native'
import React from 'react'
import Deletes from '../assets/Delete.png';
import Press_Button from '../Components/Press_Button';


const Delete = () => {
    return (
        <View style={styles.Icontainer}>
        <View style={styles.Lprofile}>
          <Image source={Deletes} style={styles.StayImage}></Image>
          <Text style={{
            fontSize:22,
            fontWeight:'700',
          }}>Delete</Text>
        </View>
        <View style={styles.LBody}>
          <TextInput style={styles.TextStyle} placeholder='Email / Phone'></TextInput>
          <TextInput style={styles.TextStyle} placeholder='Password'></TextInput>
        </View>
        <View style={styles.buttonR}>
          <Press_Button title='Submit'/>
        </View>
      </View>
    )
}

export default Delete

const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
  Icontainer: {
    marginTop:'5%',
    justifyContent: 'center',
    padding: '5%',
    alignItems: 'center',
    display: 'flex'

  },
  TextStyle: {
    width: width - 50,
    margin: 10,
    backgroundColor: '#DAD6D6',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 10,
    borderWidth: 0.5

  },
  Lprofile: {
    height: 40,
    width: 100,
    flexDirection:'row',
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent:'space-evenly',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 10,
  },
  under: {
    width: 136,
    height: 2,
    backgroundColor: '#fff',
    marginTop: 2,
    marginLeft: -5
  },
  ForgoteP: {
    marginTop: '35%',
    marginLeft: '60%'
  },
  /*
  #3B4F50
  */
  texts: {
    color: '#fff'
  },
  LBody: {
    marginTop: 20
  },
  StayImage: {
    width: 20,
    height: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3, },
    shadowOpacity: 15,
    shadowRadius: 5,
    elevation: 15
  }
}
)