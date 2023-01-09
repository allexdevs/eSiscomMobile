/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import React, { useContext, useState } from 'react';
import { NativeBaseProvider } from 'native-base';
import SweetAlert from 'react-native-sweet-alert';
import HeaderComponent from '../../../components/HeaderComponent';
import TextareaComponent from '../../../components/TextareaComponent';

import { CustomerContext } from '../../../contexts/customerContext';
import FabButtonComponent from '../../../components/FabButtonComponent';
import { showAlert } from '../../../shared/helpers';

import { addNewCustomer, updateCustomer } from '../../../services/customersService';
import LoadingComponent from '../../../components/LoadingComponent';

function AdditionalScreen({ navigation }) {
  const [toggleFabButton, setToggleFabButton] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
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
    fillId,
    fillName,
    fillFantasyName,
    fillCpfCnpj,
    fillRgIe,
    fillPhone,
    fillEmail,
    fillAddress,
    fillNumber,
    fillDistrict,
    fillZipCode,
    fillState,
    fillCity,
    fillComplement,
    fillAdditional,
  } = useContext(CustomerContext);

  return (
    <NativeBaseProvider>
      <LoadingComponent show={showLoading} />
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
            if (id === '') {
              addNewCustomer(
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
                .then((responseData) => {
                  showAlert(
                    'Adicionar Usuário',
                    responseData.message,
                    'success',
                    'Ok',
                    (callback) => {
                      if (callback === 'accepted') {
                        setShowLoading(true);
                        fillId('');
                        fillName('');
                        fillFantasyName('');
                        fillCpfCnpj('');
                        fillRgIe('');
                        fillPhone('');
                        fillEmail('');
                        fillAddress('');
                        fillNumber('');
                        fillDistrict('');
                        fillZipCode('');
                        fillState('');
                        fillCity('');
                        fillComplement('');
                        fillAdditional('');
                        fillAdditional('');
                        SweetAlert.dismissAlert();
                        setShowLoading(false);
                        navigation.navigate('QueryScreen');
                      }
                    }
                  );
                })
                .catch((error) => {
                  console.log(error);
                });
            } else {
              updateCustomer(
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
                'A',
                '0'
              )
                .then((responseData) => {
                  showAlert(
                    'Atualizar Usuário',
                    responseData.message,
                    'success',
                    'Ok',
                    (callback) => {
                      if (callback === 'accepted') {
                        setShowLoading(true);
                        fillId('');
                        fillName('');
                        fillFantasyName('');
                        fillCpfCnpj('');
                        fillRgIe('');
                        fillPhone('');
                        fillEmail('');
                        fillAddress('');
                        fillNumber('');
                        fillDistrict('');
                        fillZipCode('');
                        fillState('');
                        fillCity('');
                        fillComplement('');
                        fillAdditional('');
                        fillAdditional('');
                        SweetAlert.dismissAlert();
                        setShowLoading(false);
                        navigation.navigate('QueryScreen');
                      }
                    }
                  );
                  console.log(responseData);
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          }}
        />
      ) : null}
    </NativeBaseProvider>
  );
}

export default AdditionalScreen;
