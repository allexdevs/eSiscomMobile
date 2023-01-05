/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import React, { useContext, useState } from 'react';
import { NativeBaseProvider } from 'native-base';
import HeaderComponent from '../../../components/HeaderComponent';
import TextareaComponent from '../../../components/TextareaComponent';

import { CustomerContext } from '../../../contexts/customerContext';
import FabButtonComponent from '../../../components/FabButtonComponent';

import { addNewCustomer, updateCustomer } from '../../../services/customersService';

function AdditionalScreen({ navigation }) {
  const [toggleFabButton, setToggleFabButton] = useState(true);
  const {
    id,
    name,
    fantasyName,
    cpfCnpj,
    rgIe,
    phone,
    email,
    address,
    number,
    district,
    zipCode,
    state,
    city,
    additional,
    complement,
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
        onFocus={() => setToggleFabButton(false)}
        onBlur={() => setToggleFabButton(true)}
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
      city !== '' &&
      toggleFabButton ? (
        <FabButtonComponent
          onPress={() => {
            id !== ''
              ? addNewCustomer(
                  name,
                  fantasyName,
                  cpfCnpj,
                  rgIe,
                  phone,
                  email,
                  address,
                  number,
                  district,
                  zipCode,
                  state,
                  city,
                  complement,
                  additional
                )
              : updateCustomer(
                  id,
                  name,
                  fantasyName,
                  cpfCnpj,
                  rgIe,
                  address,
                  district,
                  city,
                  state,
                  zipCode,
                  complement,
                  number,
                  additional,
                  email,
                  phone,
                  '',
                  '0'
                );
          }}
        />
      ) : null}
    </NativeBaseProvider>
  );
}

export default AdditionalScreen;
