import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

function Live_Chat() {
    return (
        <View style={styles.Icontainer}>
            <View style={styles.Titele}>
                <Text style={{
                    fontSize: 18
                }}>Live_Chat</Text>
            </View>
            <View style={{
                width: '98%',
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>yfguyfguytffhsf</Text>
                </View>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>frtyhuyui8</Text>
                </View>
            </View>
            <View style={{
                width: '98%',
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>yfguyfguytffhsf</Text>
                </View>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>frtyhuyui8</Text>
                </View>
            </View>
            <View style={{
                width: '98%',
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>yfguyfguytffhsf</Text>
                </View>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>frtyhuyui8</Text>
                </View>
            </View>
            <View style={{
                width: '98%',
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>yfguyfguytffhsf</Text>
                </View>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>frtyhuyui8</Text>
                </View>
            </View>
            <View style={{
                width: '98%',
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>yfguyfguytffhsf</Text>
                </View>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>frtyhuyui8</Text>
                </View>
            </View>
            <View style={{
                width: '98%',
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>yfguyfguytffhsf</Text>
                </View>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>frtyhuyui8</Text>
                </View>
            </View>
            <View style={{
                width: '98%',
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>yfguyfguytffhsf</Text>
                </View>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>frtyhuyui8</Text>
                </View>
            </View>
            <View style={{
                width: '98%',
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>yfguyfguytffhsf</Text>
                </View>
                <View style={styles.Card}>
                    <Text style={{
                        margin: '3%'
                    }}>frtyhuyui8</Text>
                </View>
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

const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    Icontainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Titele: {
        marginTop: '0%',
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
        width: width - 190,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: '5%',
        paddingVertical: '1%',
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3, },
        shadowOpacity: 15,
        shadowRadius: 5,
        elevation: 15
    },
    Submit: {
        height: '8%',
        width: '30%',
        marginTop: '9%',
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


