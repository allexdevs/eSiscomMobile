import React from 'react'
import { NativeBaseProvider, Text, Input } from 'native-base'
import HeaderComponent from '../../../components/HeaderComponent'

const AddressScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <HeaderComponent
        title="Endereço"
        link={() => navigation.navigate('QueryScreen')}
      />
      <Text>Tela de Endereço</Text>
    </NativeBaseProvider>
  )
}

export default AddressScreen
