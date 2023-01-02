import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';



const Seate_Select = () => {
    return (
        <View style={Styles.Body}>
            <View style={Styles.HeaderBox}>
                <Text style={Styles.Txt}>Site Select</Text>
            </View>
            <View style={Styles.HeaderBox1}>
                <Text style={Styles.Txt1}>Agreement</Text>
                <Text style={Styles.Txt}>If you want to make your journey time more enjoyable and pleasant then select "AC" & "Non AC" button.</Text>

                <View style={{
                    flexDirection: 'row',
                    paddingVertical: '5%'
                }}>
                    <Checkbox ></Checkbox>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 20,
                        paddingHorizontal: '5%',
                        marginTop:'-1.25%'
                    }}>AC</Text>
                </View>
                <Text style={{
                        fontWeight: '400',
                        fontSize: 16,
                        marginTop:'-2%',
                        marginBottom:'3%'
                    }}>OR</Text>
                <View style={{
                    flexDirection: 'row',
                    marginLeft:'14%'
                }}>
                    <Checkbox ></Checkbox>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 20,
                        paddingHorizontal: '5%',
                        marginTop:'-1.25%'
                    }}>Non-AC</Text>
                </View>
            </View>
        </View>
    )
}
export default Seate_Select;

const Styles = StyleSheet.create({
    Body: {
        height: '100%',
        width: '100%',
        marginTop: '15%',
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
        marginTop:'10%',
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