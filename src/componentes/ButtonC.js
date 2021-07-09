import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export function ButtonC(props){ 

    return(
        <TouchableOpacity style = {stylesButton.button} onPress = {props.Clique}>
                <Text style={stylesButton.numbers}> 
                    {props.texto}
                </Text>
        </TouchableOpacity>
    )
}

const stylesButton = StyleSheet.create({
    button: {
        backgroundColor: '#ff7900',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 310,
        height: 60,
        width: 70,
        borderRadius: 8
    },
    numbers: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    }
});