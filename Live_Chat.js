import React from 'react'
import { View, Text, StyleSheet,  TouchableOpacity } from 'react-native'

function Live_Chat() {
    return (
        <View style={styles.Icontainer}>
            <View style={styles.Titele}>
                <Text style={{
                    fontSize: 18
                }}>Live_Chat</Text>
            </View>
            <View style={styles.Card}>
                <Text style={{
                    margin: '3%'
                }}>tftftrdtrgguyguygufvxdvxfxfdxfdxfdxfdxhtftfytfhhjhghjgjygyjgjgfhfhjfguyfguyfguyfguytffhsf</Text>
            </View>
            <View style={styles.Card1}>
                <Text style={{
                    margin: '3%'
                }}>tftftrdtrgguyguygufvxdvxfxfdxfdxfdxfdxhtftfytfhhjhghjgjygyjgjgfhfhjfguyfguyfguyfguytffhsf</Text>
            </View>
            <View style={styles.Submit}>
                <TouchableOpacity>
                    <Text style={styles.SubmitText}>
                        Submit
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Live_Chat

const styles = StyleSheet.create({
    Icontainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    Titele: {
        marginTop: '12%',
        height: '5%',
        width: '30%',
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3, },
        shadowOpacity: 15,
        shadowRadius: 5,
        elevation: 15
    },
    Card: {
        height: 'auto',
        width: '60%',
        marginTop: '5%',
        backgroundColor: 'white',
        marginRight: '35%',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3, },
        shadowOpacity: 15,
        shadowRadius: 5,
        elevation: 15
    },
    Card1: {
        height: 'auto',
        width: '60%',
        marginTop: '5%',
        backgroundColor: 'white',
        marginLeft: '35%',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3, },
        shadowOpacity: 15,
        shadowRadius: 5,
        elevation: 15
    },
    Submit: {
        height: '8%',
        width: '30%',
        marginTop: '95%',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3, },
        shadowOpacity: 15,
        shadowRadius: 5,
        elevation: 15
    },
    SubmitText: {
        borderWidth: 2,
        padding: 5,
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 18
    }



}
)


