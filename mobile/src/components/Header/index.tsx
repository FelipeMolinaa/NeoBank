import React from 'react'
import {View} from 'react-native'
import {Header, IconBox, Logo} from './style'
import {Feather as Icons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface Props{
    Titulo: string | "NEOBANK",
    OpcaoVoltar: boolean
}

export default function HeaderComponent(props: Props){

    const navigation = useNavigation()
    function handleVoltar(){
        navigation.goBack()
    }

    return (
        <Header> 
            {props.OpcaoVoltar ? (
                <IconBox>
                <Icons 
                    name='arrow-left' 
                    size={32} color='#fff' 
                    onPress={handleVoltar}/>
                </IconBox>
            ) : (
                <View>
                </View>
            )}
            <View></View>
            <Logo>{props.Titulo.toUpperCase()}</Logo>
            <View></View>
            <View></View>
        </Header>
    )
}