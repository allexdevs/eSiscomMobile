/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { NativeBaseProvider, ScrollView } from 'native-base';
import SweetAlert from 'react-native-sweet-alert';
import HeaderComponent from '../../../components/HeaderComponent';
import InputComponent from '../../../components/InputComponent';
import MaskInputComponent from '../../../components/MaskInputComponent';

import { CustomerContext } from '../../../contexts/customerContext';
import FabButtonComponent from '../../../components/FabButtonComponent';

import { addNewCustomer, updateCustomer } from '../../../services/customersService';
import { showAlert } from '../../../shared/helpers';

function MainScreen({ navigation, route }) {
  const [togglePassword, setTogglePassword] = useState(false);
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
    complement,
    additional,
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

  useEffect(() => {
    const navParams = navigation.addListener('focus', () => {
      const { params } = route;
      if (
        params.id !== '' ||
        params.name !== '' ||
        params.fantasyName !== '' ||
        params.cpfCnpj !== '' ||
        params.rgIe !== '' ||
        params.phone !== '' ||
        params.email !== '' ||
        params.address !== '' ||
        params.number !== '' ||
        params.district !== '' ||
        params.zipCode !== '' ||
        params.state !== '' ||
        params.city !== '' ||
        params.complement !== '' ||
        params.additional !== ''
      ) {
        fillId(params.id);
        fillName(params.name);
        fillFantasyName(params.fantasyName);
        fillCpfCnpj(params.cpfCnpj);
        fillRgIe(params.rgIe);
        fillPhone(params.phone);
        fillEmail(params.email);
        fillAddress(params.address);
        fillNumber(params.number.toString());
        fillDistrict(params.district);
        fillZipCode(params.zipCode);
        fillState(params.state);
        fillCity(params.city);
        fillComplement(params.complement);
        fillAdditional(params.additional);
      }
    });

    return navParams;
  }, [navigation]);

  return (
    <NativeBaseProvider>
      <HeaderComponent title="Principal" link={() => navigation.navigate('QueryScreen')} />
      <ScrollView
        _contentContainerStyle={{
          pb: 16,
        }}
      >
        <InputComponent
          containerWidth="100%"
          paddingHorizontal="4"
          leftIcon="text"
          rightIcon="delete"
          placeholder="Nome"
          value={name}
          changeText={(text) => fillName(text)}
          clearValue={() => fillName('')}
          inputType={!togglePassword ? 'text' : 'password'}
          keyboardButton="done"
          keyboardType="default"
          passwordIcon={!togglePassword ? 'eye' : 'eye-off'}
          isPassword={false}
          togglePassword={() =>
            !togglePassword ? setTogglePassword(true) : setTogglePassword(false)
          }
          onFocus={() => setToggleFabButton(false)}
          onBlur={() => setToggleFabButton(true)}
        />
        <InputComponent
          containerWidth="100%"
          paddingHorizontal="4"
          leftIcon="note-text-outline"
          rightIcon="delete"
          placeholder="Nome Fantasia"
          value={fantasyName}
          changeText={(text) => fillFantasyName(text)}
          clearValue={() => fillFantasyName('')}
          inputType={!togglePassword ? 'text' : 'password'}
          keyboardButton="done"
          keyboardType="default"
          passwordIcon={!togglePassword ? 'eye' : 'eye-off'}
          isPassword={false}
          togglePassword={() =>
            !togglePassword ? setTogglePassword(true) : setTogglePassword(false)
          }
          onFocus={() => setToggleFabButton(false)}
          onBlur={() => setToggleFabButton(true)}
        />

        <MaskInputComponent
          value={cpfCnpj}
          onChangeText={(masked, unmasked) => fillCpfCnpj(unmasked)}
          containerWidth="100%"
          paddingHorizontal="4"
          mask="CPF_CNPJ"
          leftIcon="card-bulleted-outline"
          rightIcon="delete"
          clearValue={() => fillCpfCnpj('')}
          type="numeric"
          onFocus={() => setToggleFabButton(false)}
          onBlur={() => setToggleFabButton(true)}
        />

        <InputComponent
          containerWidth="100%"
          paddingHorizontal="4"
          leftIcon="card-text-outline"
          rightIcon="delete"
          placeholder="Inscrição Estadual / RG"
          value={rgIe}
          changeText={(text) => fillRgIe(text)}
          clearValue={() => fillRgIe('')}
          inputType={!togglePassword ? 'text' : 'password'}
          keyboardButton="done"
          keyboardType="numeric"
          passwordIcon={!togglePassword ? 'eye' : 'eye-off'}
          isPassword={false}
          togglePassword={() =>
            !togglePassword ? setTogglePassword(true) : setTogglePassword(false)
          }
          onFocus={() => setToggleFabButton(false)}
          onBlur={() => setToggleFabButton(true)}
        />
        <MaskInputComponent
          value={phone}
          onChangeText={(masked, unmasked) => fillPhone(unmasked)}
          containerWidth="100%"
          paddingHorizontal="4"
          mask="PHONE"
          leftIcon="phone"
          rightIcon="delete"
          clearValue={() => fillPhone('')}
          type="numeric"
          onFocus={() => setToggleFabButton(false)}
          onBlur={() => setToggleFabButton(true)}
        />
        <InputComponent
          containerWidth="100%"
          paddingHorizontal="4"
          leftIcon="email"
          rightIcon="delete"
          placeholder="Email"
          value={email}
          changeText={(text) => fillEmail(text)}
          clearValue={() => fillEmail('')}
          inputType={!togglePassword ? 'text' : 'password'}
          keyboardButton="done"
          keyboardType="default"
          passwordIcon={!togglePassword ? 'eye' : 'eye-off'}
          isPassword={false}
          togglePassword={() =>
            !togglePassword ? setTogglePassword(true) : setTogglePassword(false)
          }
          mb="12"
          onFocus={() => setToggleFabButton(false)}
          onBlur={() => setToggleFabButton(true)}
        />
      </ScrollView>

      {name !== '' &&
      fantasyName !== '' &&
      cpfCnpj !== '' &&
      phone !== '' &&
      address !== '' &&
      number !== '' &&
      district !== '' &&
      zipCode !== '' &&
      state !== '' &&
      city !== '' &&
      toggleFabButton === true ? (
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
                        SweetAlert.dismissAlert();
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
                        SweetAlert.dismissAlert();
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

export default MainScreen;
