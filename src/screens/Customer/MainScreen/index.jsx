/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext } from 'react';
import { NativeBaseProvider, ScrollView } from 'native-base';
import HeaderComponent from '../../../components/HeaderComponent';
import InputComponent from '../../../components/InputComponent';

import { CustomerContext } from '../../../contexts/customerContext';
import FabButtonComponent from '../../../components/FabButtonComponent';

function MainScreen({ navigation }) {
  const [togglePassword, setTogglePassword] = useState(false);

  const {
    name,
    fantasyName,
    cpfCnpj,
    rgIe,
    phone,
    email,
    fillName,
    fillFantasyName,
    fillCpfCnpj,
    fillRgIe,
    fillPhone,
    fillEmail,
  } = useContext(CustomerContext);

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
        />
        <InputComponent
          containerWidth="100%"
          paddingHorizontal="4"
          leftIcon="card-bulleted-outline"
          rightIcon="delete"
          placeholder="CPF/CNPJ"
          value={cpfCnpj}
          changeText={(text) => fillCpfCnpj(text)}
          clearValue={() => fillCpfCnpj('')}
          inputType={!togglePassword ? 'text' : 'password'}
          keyboardButton="done"
          keyboardType="numeric"
          passwordIcon={!togglePassword ? 'eye' : 'eye-off'}
          isPassword={false}
          togglePassword={() =>
            !togglePassword ? setTogglePassword(true) : setTogglePassword(false)
          }
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
        />
        <InputComponent
          containerWidth="100%"
          paddingHorizontal="4"
          leftIcon="phone"
          rightIcon="delete"
          placeholder="Telefone"
          value={phone}
          changeText={(text) => fillPhone(text)}
          clearValue={() => fillPhone('')}
          inputType={!togglePassword ? 'text' : 'password'}
          keyboardButton="done"
          keyboardType="numeric"
          passwordIcon={!togglePassword ? 'eye' : 'eye-off'}
          isPassword={false}
          togglePassword={() =>
            !togglePassword ? setTogglePassword(true) : setTogglePassword(false)
          }
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
        />
      </ScrollView>

      <FabButtonComponent
        onPress={() => {
          console.log(name, fantasyName, cpfCnpj, rgIe, phone, email);
        }}
      />
    </NativeBaseProvider>
  );
}

export default MainScreen;
