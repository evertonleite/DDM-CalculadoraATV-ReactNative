import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function Screen(props){ 

    return(
        <View style = {StyleScreen.tela}> 
            <Text style = {StyleScreen.textOper}> {props.oper} </Text>
            <Text style = {StyleScreen.textResult}> {props.result} </Text>
        </View>
    );
}

const StyleScreen = StyleSheet.create ({
    tela: {
        flexDirection:'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: '#d4dfbf',
        height: 80,
        width: 380,
        borderRadius: 8
    },
    textOper : {
        fontSize: 25
    },
    textResult : {
        fontSize: 35
    }
})