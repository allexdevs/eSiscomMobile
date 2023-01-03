import React, { useContext } from 'react';
import { NativeBaseProvider } from 'native-base';
import HeaderComponent from '../../../components/HeaderComponent';
import TextareaComponent from '../../../components/TextareaComponent';

import { CustomerContext } from '../../../contexts/customerContext';
import FabButtonComponent from '../../../components/FabButtonComponent';

function AdditionalScreen({ navigation }) {
  const {
    name,
    fantasyName,
    cpfCnpj,
    phone,
    email,
    address,
    number,
    district,
    zipCode,
    state,
    city,
    additional,
    fillAdditional,
  } = useContext(CustomerContext);

  return (
    <NativeBaseProvider>
      <HeaderComponent title="Dados Adicionais" link={() => navigation.navigate('QueryScreen')} />
      <TextareaComponent
        onChangeText={(text) => fillAdditional(text)}
        placeholder="Informações adicionais"
        value={additional}
        clearValue={() => fillAdditional('')}
      />

      {name !== '' &&
      fantasyName !== '' &&
      cpfCnpj !== '' &&
      phone !== '' &&
      email !== '' &&
      address !== '' &&
      number !== '' &&
      district !== '' &&
      zipCode !== '' &&
      state !== '' &&
      city !== '' ? (
        <FabButtonComponent onPress={() => {}} />
      ) : null}
    </NativeBaseProvider>
  );
}

export default AdditionalScreen;
