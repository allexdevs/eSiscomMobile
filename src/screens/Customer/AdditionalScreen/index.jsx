import React from 'react';
import { NativeBaseProvider, Text } from 'native-base';
import HeaderComponent from '../../../components/HeaderComponent';

function AdditionalScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <HeaderComponent title="Dados Adicionais" link={() => navigation.navigate('QueryScreen')} />
      <Text>Tela de Dados Adicionais</Text>
    </NativeBaseProvider>
  );
}

export default AdditionalScreen;
