import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import {FontAwesome as Icons} from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'

import {Tela, ContasBox, Conta, H2, H3, DadosPequenos, ItemDiv, TextoItem, NumeroCarcaoDiv, ItensDiv, NomeContaDiv} from './style'
import Header from '../../components/Header'
import api from '../../utils/axiosConfig'
import Modal from '../../components/modal'
import { userProps } from '../../../interfaces/userPropsInterface'
import { contaProps } from '../../../interfaces/contasPropsInterface'

export default function Home(){

    const [modalVisible, setModalVisible] = useState(false)
    const [novaContaNome, setNovaContaNome] = useState('')
    const [contas, setContas] = useState<contaProps[]>([])

    const route = useRoute();
    const routeParams = route.params as userProps
    const navigation = useNavigation()

    useEffect(() =>{
        api.get(`/contas/${routeParams.id}`).then(response =>{
            setContas(response.data.usuarios)
        })
    })

    function handleAbreConta(conta: contaProps){
        navigation.navigate('DetalhesContaPage', {conta, nome: routeParams.nome})
    }

    async function handleNovaConta(){
        if(novaContaNome == ''){
            return Alert.alert(
                "Voce deve adicionar um nome para sua nova conta",
                "",
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
        
        setModalVisible(false)

        const dadosNovaConta = {
            idUsuario: routeParams.id,
            nomeConta: novaContaNome
        }

        api.post('/conta', dadosNovaConta)

        setNovaContaNome('')
    }

    function handleSairDaConta(){
        Alert.alert(
            "Deseja sair da sua conta?",
            "Ao clicar 'Sim', você voltara para o menu de Login",
            [
                {
                    text:"Não",
                    onPress: () => {},
                    style: "cancel"
                },
                {
                    text:"Sim",
                    onPress: () => {navigation.goBack()}
                }
            ],
            {cancelable: true}
        )
    }

    return (
        <Tela>
            <Header Titulo={routeParams.nome.split(" ")[0]} OpcaoVoltar={false}/>
            <ContasBox horizontal showsHorizontalScrollIndicator={false}>
                {contas.map((conta) =>(
                    <Conta activeOpacity={0.8} onPress={() => handleAbreConta(conta)}>
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
                    </Conta>
                ))}
                

                {modalVisible ? (
                    <Modal 
                    onChangeText={setNovaContaNome} 
                    callback={handleNovaConta} 
                    onPressCancel={setModalVisible}
                    labelInput="Digite o nome da sua nova conta"
                    placeholderInput="Exemplo: Boletos"
                    textoBotao="Criar Conta"/>
                ): (null)}

            </ContasBox>
            <ItensDiv>
                <ItemDiv activeOpacity={0.7} onPress={handleSairDaConta}>
                    <Icons name='arrow-left' size={40} style={{textAlign: "center"}}/>
                    <TextoItem>Sair</TextoItem>
                </ItemDiv>
                 
                <ItemDiv activeOpacity={0.7} onPress={() => {setModalVisible(true)}}>
                    <Icons name='plus' size={40} style={{textAlign: "center"}}/>
                    <TextoItem>Nova Conta</TextoItem>
                </ItemDiv>
            </ItensDiv>
        </Tela>
    )
}