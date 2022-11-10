import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Driver from '../assets/driving.png';

function Ac_sit_System() {
    return (
        <View style={styles.Body}>
            <View style={styles.BusBody}>
                <View style={styles.BusControl}>
                    <Image source={Driver} style={styles.Drivers}></Image>
                </View>
                <View style={styles.SitBody}>
                    <View style={styles.SitLine}>
                        <TouchableOpacity style={styles.Sit}>
                            <Text style={styles.Text11}>A1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Sit}>
                            <Text style={styles.Text11}>B1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Sit}>
                            <Text style={styles.Text11}>C1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Sit}>
                            <Text style={styles.Text11}>D1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Sit}>
                            <Text style={styles.Text11}>E1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Sit}>
                            <Text style={styles.Text11}>F1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Sit}>
                            <Text style={styles.Text11}>G1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Sit}>
                            <Text style={styles.Text11}>H1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Sit}>
                            <Text style={styles.Text11}>I1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Sit}>
                            <Text style={styles.Text11}>J1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.SitLine13}>
                        <View style={styles.Sit3}>
                            <TouchableOpacity style={styles.Sit31}>
                                <Text style={styles.Text11}>J2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit31}>
                                <Text style={styles.Text11}>J3</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.SitLine1}>
                        <View style={styles.SitLine11}>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>A2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>B2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>C2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>D2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>E2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>F2</Text>
                            </TouchableOpacity>
                            <View style={styles.Sit1}>
                                <Text style={styles.Text11}>G2</Text>
                            </View>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>H2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>I2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>J4</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.SitLine11}>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>A3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>B3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>C3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>D3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>E3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>F3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>G3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>H3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>I3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Sit1}>
                                <Text style={styles.Text11}>J6</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </View>
        </View>
    )
}

export default Ac_sit_System


const styles = StyleSheet.create({
    Body: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    BusBody: {
        height: '90%',
        width: '95%',
        backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 10,
    },
    BusControl: {
        height: '15%',
        width: '95%',
        marginTop: '5%',
        backgroundColor: 'white',
        borderRadius: 10,

    },
    Drivers: {
        height: '85%',
        width: '35%',
        marginTop: '2%',
        marginLeft: '60%'
    },
    SitBody: {
        height: '79%',
        width: '95%',
        marginTop: '1%',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10
    },
    SitLine: {
        height: '95%',
        width: '22%',
        backgroundColor: 'black',
        margin: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowOffset: { height: 5, width: 2 },
        shadowOpacity: 10,
        shadowColor: '#000',
        shadowRadius: 10,
        elevation: 0
    },
    SitLine1: {
        height: '95%',
        width: '33%',
        backgroundColor: 'black',
        flexDirection: 'row',
        margin: '2%',
        borderRadius: 10,
        shadowOffset: { height: 5, width: 2 },
        shadowOpacity: 10,
        shadowColor: '#000',
        shadowRadius: 10,
        elevation: 0
    },
    Sit: {
        height: '8%',
        width: '60%',
        marginTop: '10%',
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SitLine11: {
        height: '98%',
        width: '40%',
        margin: '5%',
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Sit1: {
        height: '8%',
        width: '80%',
        marginTop: '20%',
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SitLine13: {
        height: '95%',
        width: '33%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: '2%',
        borderRadius: 10,
        shadowOffset: { height: 5, width: 2 },
        shadowOpacity: 10,
        shadowColor: '#000',
        shadowRadius: 10,
        elevation: 0
    },
    Sit3: {
        height: '10%',
        width: '100%',
        marginTop: '430%',
        borderRadius: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Sit31: {
        height: '85%',
        width: '40%',
        margin: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowOffset: { height: 5, width: 2 },
        shadowOpacity: 10,
        shadowColor: '#000',
        shadowRadius: 10,
        elevation: 0
    },
    Text11: {
        fontSize: 20,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
        elevation: 0
    }


});