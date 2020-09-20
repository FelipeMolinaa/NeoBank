import React, { useState } from 'react'
import { ToastAndroid, View } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { apisAreAvailable } from 'expo'

import { Tela, Logo, Input, Formulario, Label, LabelForm, InputView, Botao, TextoBotao, P, PSublinhado } from './style'
import api from '../../utils/axiosConfig'

export default function Login(){

    const navigation = useNavigation()

    const [cpf, setCPF] = useState('')
    const [senha, setSenha] = useState('')

    function handleBotaoCadastro(){
        navigation.navigate('CadastroPage')
    }

    async function handleBotaoLogin(){
        const {data} = await api.get(`/user/`, {params:{cpf, senha}})

        if(data.status == 'LOGIN_SUCCESS'){

            ToastAndroid.show('Login feito com sucesso', ToastAndroid.LONG)
            navigation.navigate('HomePage', {
                ...data.Usuario
            })


        }else if(data.status == 'LOGIN_INCORRECT'){
            setSenha('')
            ToastAndroid.show('CPF ou senha estão incorretos', ToastAndroid.LONG)
        }
        
    }

    return (
        <Tela>
            <View></View>
            <View> 
                <Logo>NEOBANK</Logo>
            </View>
            <Formulario>
                <LabelForm>Faça login</LabelForm>
                <View>
                    <InputView>
                        <Label>CPF</Label>
                        <Input value={cpf} onChangeText={setCPF}/>
                    </InputView>
                    <InputView>
                        <Label>Senha</Label> 
                        <Input secureTextEntry={true} value={senha} onChangeText={setSenha}/>   
                    </InputView>
                </View>
                <Botao>
                    <TextoBotao onPress={handleBotaoLogin}>Confirmar</TextoBotao>
                </Botao>
            </Formulario>
            <View>
                <P>
                    Ainda não possue conta?
                </P>
                <PSublinhado onPress={handleBotaoCadastro}>
                    Criar Conta
                </PSublinhado>
            </View>
            <View></View>
            <View></View>
        </Tela>
    )
}