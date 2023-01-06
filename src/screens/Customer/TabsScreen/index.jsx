import React, { useContext, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { NativeBaseProvider, Text, ScrollView } from 'native-base';
import PagerView from 'react-native-pager-view';

// external hooks
import { useNavigation } from '@react-navigation/native';

// contexts
import { CustomerContext } from '../../../contexts/customerContext';

// mocks
import tabs from '../../../mock/tabList';

// components
import HeaderComponent from '../../../components/HeaderComponent';
import FabButtonComponent from '../../../components/FabButtonComponent';
import BottomBarComponent from '../../../components/BottomBarComponent';
import InputComponent from '../../../components/InputComponent';
import MaskInputComponent from '../../../components/MaskInputComponent';

export default function TabsScreen() {
  const [togglePassword, setTogglePassword] = useState(false);
  // const [toggleFabButton, setToggleFabButton] = useState(true);
  const navigation = useNavigation();

  const {
    // id,
    name,
    fantasyName,
    cpfCnpj,
    rgIe,
    phone,
    email,
    // address,
    // number,
    // district,
    // zipCode,
    // state,
    // city,
    // complement,
    // additional,
    // fillId,
    fillName,
    fillFantasyName,
    fillCpfCnpj,
    fillRgIe,
    fillPhone,
    fillEmail,
    // fillAddress,
    // fillNumber,
    // fillDistrict,
    // fillZipCode,
    // fillState,
    // fillCity,
    // fillComplement,
    // fillAdditional,
  } = useContext(CustomerContext);

  return (
    <NativeBaseProvider>
      <HeaderComponent title="Dados Principais" link={() => navigation.navigate('QueryScreen')} />
      <PagerView
        style={{ backgroundColor: 'red', height: Dimensions.get('window').height - 100 }}
        initialPage={0}
      >
        <View key="1">
          <ScrollView>
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
              // onFocus={() => setToggleFabButton(false)}
              // onBlur={() => setToggleFabButton(true)}
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
              // onFocus={() => setToggleFabButton(false)}
              // onBlur={() => setToggleFabButton(true)}
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
              // onFocus={() => setToggleFabButton(false)}
              // onBlur={() => setToggleFabButton(true)}
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
              // onFocus={() => setToggleFabButton(false)}
              // onBlur={() => setToggleFabButton(true)}
            />
          </ScrollView>
        </View>
        <View key="2">
          <Text>Dados de Endereço</Text>
        </View>
        <View key="3">
          <Text>Dados Adicionais</Text>
        </View>
      </PagerView>
      <FabButtonComponent onPress={() => {}} />
      <BottomBarComponent tabList={tabs} />
    </NativeBaseProvider>
  );
}
