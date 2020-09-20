import React, { useEffect, useState } from 'react'
import { View, Alert } from 'react-native'
import {FontAwesome as Icons} from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'

import Header from '../../components/Header'
import api from '../../utils/axiosConfig'
import Modal from '../../components/modal'
import {Tela, ItensDiv, NomeContaDiv, H3, ContaStatusDiv, H2, DadosPequenos, NumeroCarcaoDiv, ItemDiv, TextoItem} from './style'
import { contaPropsUserName, contaProps } from '../../../interfaces/contasPropsInterface'

export default function DetalhesConta(){

    const navigate = useNavigation()
    const route = useRoute()
    const routeProps = route.params as contaPropsUserName

    const nomeUsuario = routeProps.nome
    const [modalVisible, setModalVisible] = useState(false)
    const [numeroConta, setNumeroConta] = useState('')
    const [valorTransferencia, setValorTransferencia] = useState(0)
    const [conta, setConta] = useState<contaProps>(routeProps.conta)
    const [gatilho, setGatilho] = useState(1)

    useEffect(()=>{
        api.get(`/conta/${conta.id}`).then((response) =>{
            setConta(response.data)
        })
    },[gatilho])
    
    function handleTransferir(){
        if(numeroConta == '' || valorTransferencia == 0){
            return Alert.alert(
                "Você deve adicionar o valor e o numero da conta",
                "Você precisa colocar o numero da conta que você deseja transferir e a quantidade que deseja tranferir",
                [
                    {
                        text:"OK",
                        onPress: () => {},
                        style: "cancel"
                    }
                ],
                {cancelable: true}
            )
        }

        api.put("/conta/tranferencia", {
            idContaEnvia: conta.id,
            numeroContaRecebe: numeroConta,
            valor: valorTransferencia
        })

        setModalVisible(false)
        setValorTransferencia(0)
        setNumeroConta('')
        setGatilho(gatilho + 1)
    }

    function handleAlterarDados(){
        Alert.alert(
            "Deseja mesmo alterar os dados?",
            "Ao confirmar, o codigo do cartão e o CVV serão alterados",
            [
                {
                    text: 'Cancelar',
                    onPress: () => {return},
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => {alteraDados()},
                    style: 'default'
                } 
            ],
            {cancelable: true}
        )
    }

    function alteraDados(){
        api.put("/conta/codigo", {id: conta.id}).then((dados) =>{
            setConta(
                {
                    ...conta,
                    numeroConta: dados.data.numeroConta,
                    codigoSeguranca: dados.data.codigoSeguranca
                }
            )
        })
        console.log('alo')
    }

    function handleExcluiConta(){
        Alert.alert(
            "Deseja mesmo excluir a conta?",
            "Ao confirmar, sua conta ira ser excluida",
            [
                {
                    text: 'Cancelar',
                    onPress: () => {return},
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => {excluiConta()},
                    style: 'default'
                } 
            ],
            {cancelable: true}
        )
    }

    function excluiConta(){
        api.delete(`/conta/${conta.id}`)

        navigate.goBack()
    }

    return (
        <Tela>
            <Header Titulo={nomeUsuario.split(" ")[0]} OpcaoVoltar={true}/>
            <ContaStatusDiv>
                {modalVisible ? (
                    <Modal 
                        onChangeText={setNumeroConta} 
                        callback={handleTransferir} 
                        onPressCancel={setModalVisible}
                        labelInput="Coloque o numero da conta de tranferencia"
                        placeholderInput="Ex: 1234567899999999"
                        textoBotao="Tranferir"
                        inputValor
                        onChangeValue={setValorTransferencia}/>
                ): (null)}
                
                <NomeContaDiv style={{alignSelf: 'center'}}>
                    <H3>{conta.nomeConta}</H3>
                </NomeContaDiv>
                <View style={{alignSelf: 'center'}}>
                    <H3>Saldo</H3>
                    <H2>{conta.saldo} NBs</H2>
                </View>
                <View>
                    <NumeroCarcaoDiv>
                        <H3>Codigo</H3>
                        <H2>{conta.numeroConta}</H2>
                    </NumeroCarcaoDiv>
                    <DadosPequenos>
                        <View>
                            <H3>Validade</H3>
                            <H2>{conta.validade}</H2>
                        </View>
                        <View>
                            <H3>CVV</H3>
                            <H2>{conta.codigoSeguranca}</H2>
                        </View>  
                    </DadosPequenos>
                </View> 
            </ContaStatusDiv>
            <ItensDiv>
                <ItemDiv activeOpacity={0.7} onPress={() => setModalVisible(true)}>
                    <Icons name='exchange' size={40} style={{textAlign: "center"}}/>
                    <TextoItem>Transferir</TextoItem>
                </ItemDiv>
                <ItemDiv activeOpacity={0.7} onPress={handleAlterarDados}>
                    <Icons name='edit' size={40} style={{textAlign: "center"}}/>
                    <TextoItem>Alterar codigos</TextoItem>
                </ItemDiv>
                <ItemDiv activeOpacity={0.7} onPress={handleExcluiConta}>
                    <Icons name='trash' size={40} style={{textAlign: "center"}}/>
                    <TextoItem>Excluir conta</TextoItem>
                </ItemDiv>
            </ItensDiv>
        </Tela>
    )
}