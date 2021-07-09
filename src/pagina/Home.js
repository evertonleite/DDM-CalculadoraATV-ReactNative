import React from 'react';
import { View, StyleSheet} from 'react-native';
import {Buttons} from '/Users/evert/Documents/ProjetosRN/CalculadoraATV/src/componentes/buttons';
import {ButtonC} from '/Users/evert/Documents/ProjetosRN/CalculadoraATV/src/componentes/ButtonC';
import {ButtonMais} from '/Users/evert/Documents/ProjetosRN/CalculadoraATV/src/componentes/ButtonMais';
import {Screen} from '/Users/evert/Documents/ProjetosRN/CalculadoraATV/src/componentes/Screen';
import { useState } from 'react';


let Status = {
    valor: '',
    resultado: 0,
    executar: false,
    pontoExist: false
}

export function Home(){ 

    const [operacoesTela, setOperacoesTela] = useState(Status.valor)
    const [resultadoTela, setResuladoTela] = useState(Status.resulado)

    const adcCaractere = (digito)=>{
        Status.valor = Status.valor + digito
        setOperacoesTela(Status.valor)
        setResuladoTela(Status.resultado)
        Status.executar = false
    }

    const ClearScreen = () => {
        Status = {
            valor: '',
            resultado: 0,
            executar: false,
            pontoExist: false
        }
        setOperacoesTela(Status.valor)
        setResuladoTela(Status.resultado)
    }

    const operacao = (digito) => {
        if(digito == 'CE/C'){
            ClearScreen()
          return
        }
        if(digito == '>'){
            Status.valor = operacoesTela.substring(0,(operacoesTela.length-1))
            setOperacoesTela(Status.valor)
            return
        }
        
        try{
            Status.resultado = eval(Status.valor)
            Status.executar = true
            setResuladoTela(Status.resultado)
        }catch{
            Status.resultado = 'Erro na operação'
            Status.operacao = true
            setResuladoTela(Status.resultado)
        }
    }

    return(
        <View style = {Container.container}>
            <View style = {Container.layout}> 
                <Screen oper={operacoesTela} result={resultadoTela}/>
                <ButtonC texto = "CE/C" Clique = {()=>{operacao(ClearScreen())}}/>
                <View style = {Container.ButtonRow}>
                    <View style = {Container.ButtonsColumn}>
                        <Buttons texto = "7" Clique = {()=>{adcCaractere('7')}}/>
                        <Buttons texto = "4" Clique = {()=>{adcCaractere('4')}}/>
                        <Buttons texto = "1" Clique = {()=>{adcCaractere('1')}}/>
                        <Buttons texto = "0" Clique = {()=>{adcCaractere('0')}}/>
                    </View>
                    <View style = {Container.ButtonsColumn}>
                        <Buttons texto = "8" Clique = {()=>{adcCaractere('8')}}/>
                        <Buttons texto = "5" Clique = {()=>{adcCaractere('5')}}/>
                        <Buttons texto = "2" Clique = {()=>{adcCaractere('2')}}/>
                        <Buttons texto = "00" Clique = {()=>{adcCaractere('00')}}/>
                    </View>
                    <View style = {Container.ButtonsColumn}>
                        <Buttons texto = "9" Clique = {()=>{adcCaractere('9')}}/>
                        <Buttons texto = "6" Clique = {()=>{adcCaractere('6')}}/>
                        <Buttons texto = "3" Clique = {()=>{adcCaractere('3')}}/>
                        <Buttons texto = "." Clique = {()=>{adcCaractere('.')}}/>
                    </View>
                    <View style = {Container.ButtonsColumn}>
                        <Buttons texto = "%" Clique = {()=>{adcCaractere('%')}}/>
                        <Buttons texto = "x" Clique = {()=>{adcCaractere('*')}}/>
                        <ButtonMais texto = "+" Clique = {()=>{adcCaractere('+')}}/>
                    </View>
                    <View style = {Container.ButtonsColumn}>
                        <Buttons texto = ">" Clique = {()=>{operacao('>')}}/>
                        <Buttons texto = "÷" Clique = {()=>{adcCaractere('/')}}/>
                        <Buttons texto = "-" Clique = {()=>{adcCaractere('-')}}/>
                        <Buttons texto = "=" Clique = {()=>{operacao('=')}}/>
                    </View>
                </View>   
            </View>
        </View>   
    )
}

const Container = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonRow : {
        flexDirection: 'row'
    },
    ButtonsColumn: {
        flexDirection: 'column'
    },
    layout: {
        backgroundColor: '#000000',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 460,
        width: 420,
        borderRadius: 12
    }
})
