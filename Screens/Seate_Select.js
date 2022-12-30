import { View, Text, StyleSheet,<Checkbox value={false} onValueChange={() => console.log('value changed')}/> } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';



export default function Seate_Select() {
    return (
        <View style={Styles.Body}>
            <View style={Styles.HeaderBox}>
                <Text style={Styles.Txt}>Site Select</Text>
            </View>
            <View style={Styles.HeaderBox1}>
                <Text style={Styles.Txt1}>Agreement</Text>
                <Text style={Styles.Txt}>If you want to make your journey time more enjoyable and pleasant then select "AC" & "Non AC" button.</Text>
            <Checkbox ></Checkbox>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    Body: {
        height: '100%',
        width: '100%',
        marginTop: '5%',
        padding: '5%',
        alignItems: 'center'
    },
    HeaderBox: {
        height: '5%',
        width: '40%',
        borderRadius: 10,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Txt: {
        fontSize: 18,
        margin: '2%',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
        elevation: 0
    },
    HeaderBox1: {
        height: '70%',
        width: '95%',
        margin: '5%',
        borderRadius: 10,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',

    },
    Txt1: {
        textDecorationLine: 'underline',
        fontSize: 18,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
        elevation: 0

    },
    Ac_Sit: {
        height: '7%',
        width: '50%',
        marginRight: '40%',
        marginTop: '5%',
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        shadowOffset: { width: 1, height: 3 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10
    },
    SelectBox: {
        height: '65%',
        width: '15%',
        marginRight: '8%',
        borderRadius: 5,
        backgroundColor: 'white'
    },
    Txt11: {
        color: 'white',
        fontSize: 18,
        margin: '2%',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
        elevation: 0
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },

});