import styled from 'styled-components/native'

export const Tela = styled.View`
    flex: 1;
    display: flex;
    justify-content: space-around;
    padding: 8px 8px;
`

export const ContasBox = styled.ScrollView`
    margin: 16% 0;
`

export const Conta = styled.TouchableOpacity`
    border-radius: 10px;
    padding: 25px 8px;
    margin-right: 16px;
    justify-content: space-between;
    background-color: rgba(50, 50, 50, 0.8);
`

export const NomeContaDiv = styled.View`
    display: flex;
    max-width: 250px;
    width: 100%;
`

export const H2 = styled.Text`
    font-size: 26px;
    font-family: Roboto_400Regular;
    text-align: center;
    color: white;
`

export const TextoModal = styled.Text`
    font-size: 19px;
    font-family: Roboto_400Regular;
    text-align: center;
    margin-bottom: 8px;
`

export const BotaoModal = styled.TouchableOpacity`
    background-color: blue;
    padding: 10px 20px;
    border-radius: 10px;
    margin: 0 10px;
`

export const TextoBotao = styled.Text`
    font-size: 20px;
    color: white;
`

export const BotoesDiv = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`

export const H3 = styled.Text`
    font-size: 24px;
    font-family: Roboto_700Bold;
    text-align: center;
    color: white;
`

export const DadosPequenos = styled.View`
    flex-direction: row;
    justify-content: space-around;
`

export const NumeroCarcaoDiv = styled.View`
    margin-bottom: 30px;
    padding: 0 20px;
    border-radius: 20px;
`

export const ItensDiv = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`

export const ItemDiv = styled.TouchableOpacity`
    height: 80px;
    width: 30%;
    background-color: rgba(255, 255, 255, 0.7);
    margin-right: 8px;
    justify-content: center;
    border-radius: 10px;
`

export const TextoItem = styled.Text`
    text-align: center;
`

export const Input = styled.TextInput`
    background-color: #E7E7E7;
    border-radius: 10px;
    font-size: 20px;
    padding: 3px 16px;
    font-family: Roboto_400Regular;
    min-width: 100%
`