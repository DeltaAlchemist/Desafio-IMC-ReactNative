import React from 'react';
import { StyleSheet, View, StatusBar, Alert, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      peso: null,
      altura: null,
    }   
  }

  calcularImc = _ => {
    const { peso, altura } = this.state

    const pesoNum = parseFloat(peso)
    const alturaNum = parseFloat(altura)
    if (Number.isNaN(pesoNum) || Number.isNaN(alturaNum)) {
      Alert.alert("Erro", "Preencha os campos corretamente.")
      return
    }

    const imc = (peso / ((altura / 100) * (altura / 100)))

    const categoria = ""

    if (imc < 18.5) {
      categoria = "Abaixo do peso"
    } else if (imc < 25) {
      categoria = "Peso Normal"
    } else if (imc < 30) {
      categoria = "Acima do Peso"
    } else {
      categoria = "Obesidade"
    }
    
    Alert.alert(`Seu IMC é ${imc.toFixed(1)}`, `Sua Categoria é ${categoria}.`)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Peso"
          onChangeText={peso => this.setState({ peso: peso })}
        />
        <TextInput
          style={styles.input}
          placeholder="Altura"
          onChangeText={altura => this.setState({ altura: altura })}
        />
        <Button 
          color='#19F'
          title='Calcular'
          onPress={this.calcularImc}
        />
        <StatusBar />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  input: {
    borderWidth: 0.5,
    paddingHorizontal: 5,
    marginBottom: 15,
    fontSize: 16
  }
})