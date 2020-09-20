import React, { useState } from 'react'
import { ToastAndroid, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import {Tela, Botao, Formulario, Input, InputView, Label, LabelForm, TextoBotao } from './style'
import Header from '../../components/Header'
import api from '../../utils/axiosConfig'

export default function Cadastro(){

    const navigation = useNavigation()

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [cep, setCep] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirm, setSenhaConfirm] = useState('')

    async function handleCadastra(){

        if(senha == senhaConfirm){
            const usuario = {
                nome, cpf, telefone,
                email, cep, senha,
                senhaConfirm
            }
    
            const {data} = await api.post('/user', usuario)

            if(data.status == 'CAMPO_NULL'){
                ToastAndroid.show('Existe campos que não foram preenchidos', ToastAndroid.LONG)
            }else if(data.status == 'CPF_ALREADY_EXIST'){
                ToastAndroid.show('Esse CPF ja esta cadastrado', ToastAndroid.LONG)
            }else if(data.status == 'SIGNIN_SUCCESS'){
                ToastAndroid.show('Cadastro feito com sucesso!!', ToastAndroid.LONG)
                navigation.goBack()
            }
        } 
    }


    return (
        <ScrollView>
            <Tela>
                <Header OpcaoVoltar Titulo='NEOBANK'/>
                <Formulario>
                    <LabelForm>Faça login</LabelForm>
                    <View>
                        <InputView>
                            <Label>Nome</Label>
                            <Input onChangeText={setNome} value={nome}/>
                        </InputView>

                        <InputView>
                            <Label>CPF</Label>
                            <Input onChangeText={setCpf} value={cpf}/>
                        </InputView>

                        <InputView>
                            <Label>Telefone</Label>
                            <Input onChangeText={setTelefone} value={telefone}/>
                        </InputView>

                        <InputView>
                            <Label>Email</Label>
                            <Input onChangeText={setEmail} value={email}/>
                        </InputView>

                        <InputView>
                            <Label>CEP</Label>
                            <Input onChangeText={setCep} value={cep}/>
                        </InputView>

                        <InputView>
                            <Label>Senha</Label> 
                            <Input secureTextEntry={true} onChangeText={setSenha} value={senha}/>   
                        </InputView>

                        <InputView>
                            <Label>Confirme a senha</Label> 
                            <Input secureTextEntry={true} onChangeText={setSenhaConfirm} value={senhaConfirm}/>   
                        </InputView>
                    </View>
                    <Botao>
                        <TextoBotao onPress={handleCadastra}>Cadastrar</TextoBotao>
                    </Botao>
                </Formulario>
            </Tela>
        </ScrollView>
    )
}