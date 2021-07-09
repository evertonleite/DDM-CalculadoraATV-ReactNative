import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export function ButtonMais(props){ 

    return(
        <TouchableOpacity style = {stylesButton.button} onPress = {props.Clique}>
                <Text style={stylesButton.numbers} > 
                    {props.texto}
                </Text>
        </TouchableOpacity>
    )
}

const stylesButton = StyleSheet.create({
    button: {
        backgroundColor: '#404146',
        height: 127,
        width: 70,
        margin: 3,
        marginTop: 4,
        justifyContent: 'center',
        borderRadius: 7
    },
    numbers: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    }
});