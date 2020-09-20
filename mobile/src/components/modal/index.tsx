import React, { useState } from 'react'
import {Modal, StyleSheet, View} from 'react-native'
import {TextoModal, BotaoModal, Input, BotoesDiv, TextoBotao} from './style'

interface Props{
    onChangeText: changeText
    onPressCancel: PressCancel
    callback: () => void
    textoBotao: string
    placeholderInput: string
    labelInput: string
    inputValor?: boolean
    onChangeValue?: changeValue
}

interface changeText{
    (texto: string): void
}

interface PressCancel{
    (visivel: boolean): void
}

interface changeValue{
    (value: number): void
}

export default function ModalComponent(props: Props){

    return (
        <Modal
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextoModal>{props.labelInput}</TextoModal>
                    <Input onChangeText={props.onChangeText} placeholder={props.placeholderInput}/>
                    {props.inputValor ? (
                        <>
                            <TextoModal>Adicione o valor de transferencia</TextoModal>
                            <Input onChangeText={props.onChangeValue} placeholder={'ex: 234.56'}/>   
                        </>    
                    ) : (null)}
                    <BotoesDiv>
                        <BotaoModal activeOpacity={0.7} onPress={props.callback}>
                            <TextoBotao>
                                {props.textoBotao}
                            </TextoBotao>
                        </BotaoModal>
                        <BotaoModal activeOpacity={0.7} onPress={() => {props.onPressCancel(false)}}>
                            <TextoBotao>
                                Cancelar
                            </TextoBotao>
                        </BotaoModal>
                    </BotoesDiv>                          
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
});