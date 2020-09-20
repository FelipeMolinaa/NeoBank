import styled from 'styled-components/native'

export const Tela = styled.View`
    flex: 1;
    display: flex;
    justify-content: space-around;
    padding: 0 8px;
`

export const Logo = styled.Text`
    font-size: 50px;
    text-align: center;
    font-family: Monoton_400Regular;
    color: white;
`

export const Input = styled.TextInput`
    background-color: #E7E7E7;
    border-radius: 10px;
    font-size: 24px;
    padding: 3px 16px;
    font-family: Roboto_400Regular;
`

export const Label = styled.Text`
    font-size: 24px;
    padding: 0 5px;
    color: white;
    font-family: Roboto_400Regular;
`

export const P = styled.Text`
    font-size: 20px;
    padding: 0 5px;
    color: white;
    text-align: center;
    font-family: Roboto_400Regular;
`

export const PSublinhado = styled.Text`
    font-size: 20px;
    padding: 0 5px;
    color: white;
    text-align: center;
    font-family: Roboto_700Bold;
    text-decoration: underline white;
`

export const Formulario = styled.View`
    width: 100%;
    margin: 0 auto;
    padding: 16px 24px;
    background-color: rgba(50, 50, 50, 0.3);
`

export const LabelForm = styled.Text`
    color: white;
    font-size: 30px;
    padding: 0 10px;
    text-align: center;
`

export const InputView = styled.View`
    margin-bottom: 10px;
`

export const Botao = styled.TouchableOpacity`
    background-color: #6577fc;
    border-radius: 30px;
    width: auto;
    margin: 0 auto;
    padding: 5px 32px;
    margin-top: 8px;
`

export const TextoBotao = styled.Text`
    color: white;
    font-size: 30px;
    text-align: center;
`