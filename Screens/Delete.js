import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import Deletes from '../assets/Delete.png';


const Delete = () => {
    return (
        <View style={{
            height: '100%',
            width: '100%',
            margin: '1%',
            padding: '1%',
            alignItems: 'center'

        }}>

            <View style={{
                        height: '6%',
                        width: '30%',
                        backgroundColor:'#fff',
                        marginTop: '2%',
                        borderRadius: 5,
                        justifyContent:'center',
                        shadowColor: "#fff",
                        shadowOffset: { width: 0, height: 0, },
                        shadowOpacity: 0.15,
                        shadowRadius: 5,
                        elevation: 0,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:'space-evenly'

                }}>
                    <View>
                        <Image source={Deletes} style={{
                            height: 25,
                            width: 25,
                        }}></Image>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>Delete</Text>
                    </View>
                </View>
            </View>
            <View style={{
                height: '5%',
                width: '90%',
                marginTop: '5%',
                backgroundColor: 'white',
                borderRadius: 7,

            }}>
                <TextInput style={{
                    textAlign: 'center',
                    fontSize: 20,
                    marginTop: '2%'

                }} placeholder='Email/Phone'></TextInput>

            </View>

            <View style={{
                height: '5%',
                width: '90%',
                marginTop: '5%',
                backgroundColor: 'white',
                borderRadius: 7,

            }}>
                <TextInput style={{
                    textAlign: 'center',
                    fontSize: 20,
                    marginTop: '2%'

                }} placeholder='Password'></TextInput>

            </View>

            <View style={{
                height: '5%',
                width: '30%',
                marginTop: '10%',
                backgroundColor: 'white',
                borderRadius: 7,

            }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    marginTop: '2%',
                    fontWeight:'bold',

                }}>Submit</Text>

            </View>

        </View>
    )
}

export default Delete