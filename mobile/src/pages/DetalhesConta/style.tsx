import styled from 'styled-components/native'

export const Tela = styled.View`
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 8px 8px;
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

export const DadosPequenos = styled.View`
    flex-direction: row;
    justify-content: space-around;
`

export const NomeContaDiv = styled.View`
    display: flex;
    max-width: 250px;
    width: 100%;
`

export const NumeroCarcaoDiv = styled.View`
    margin-bottom: 30px;
    padding: 0 20px;
    border-radius: 20px;
`

export const H3 = styled.Text`
    font-size: 24px;
    font-family: Roboto_700Bold;
    text-align: center;
    color: white;
`

export const H2 = styled.Text`
    font-size: 26px;
    font-family: Roboto_400Regular;
    text-align: center;
    color: white;
`

export const ContaStatusDiv = styled.View`
    justify-content: space-around;
    background-color: rgba(50, 50, 50, 0.8);
    height: 60%
`