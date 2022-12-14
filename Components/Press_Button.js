import { View, Text,Image } from 'react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';

const Press_Button = ({ 
  title,
 onPress
}) => {
  
  return (
    <TouchableOpacity onPress={onPress?onPress:()=>{}}>
      <View style={styles.prbutton}>
        <Text style={styles.prbutext}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Press_Button

const styles = StyleSheet.create({
  prbutton: {
    flexDirection:'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical:5,
    paddingHorizontal:30,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 15,
  },
  prbutext:{
    color:'black',
    fontSize:20
  },
  settingimg: {
    height: 20,
    width: 20,
    marginRight:'5%',
    borderRadius: 10,
  },
});