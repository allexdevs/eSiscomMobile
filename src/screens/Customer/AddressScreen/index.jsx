/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-children-prop */
import * as React from 'react';
import {
  NativeBaseProvider,
  ScrollView,
  Select,
  HStack,
  Button,
  Divider,
  Box,
  Text,
  Checkbox,
} from 'native-base';
import HeaderComponent from '../../../components/HeaderComponent';
import InputComponent from '../../../components/InputComponent';
import SelectComponent from '../../../components/SelectComponent';
import ModalComponent from '../../../components/ModalComponent';

import states from '../../../mock/listOfStates';
import FabButtonComponent from '../../../components/FabButtonComponent';

import { CustomerContext } from '../../../contexts/customerContext';
import ListItemOfZipCode from '../../../components/ListItemOfZipCode';
import MaskInputComponent from '../../../components/MaskInputComponent';

function AddressScreen({ navigation }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [toggleFabButton, setToggleFabButton] = React.useState(true);
  const [autoFill, setAutoFill] = React.useState(false);
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
    modalState,
    modalCity,
    modalComplement,
    listCities,
    complement,
    modalListCities,
    listZipCode,
    fillAddress,
    fillNumber,
    fillDistrict,
    fillZipCode,
    fillState,
    fillCity,
    fillComplement,
    fillModalState,
    fillModalCity,
    fillModalComplement,
    setListZipCode,
  } = React.useContext(CustomerContext);

  return (
    <NativeBaseProvider>
      <HeaderComponent title="Endereço" link={() => navigation.navigate('QueryScreen')} />

      <ScrollView
        _contentContainerStyle={{
          pb: 16,
        }}
      >
        <InputComponent
          containerWidth="100%"
          paddingHorizontal="4"
          changeText={(text) => fillAddress(text)}
          value={address}
          clearValue={() => fillAddress('')}
          inputType="text"
          isPassword={false}
          keyboardType="default"
          keyboardButton="done"
          leftIcon="map-marker"
          placeholder="Endereço"
          rightIcon="delete"
          onFocus={() => setToggleFabButton(false)}
          onBlur={() => setToggleFabButton(true)}
        />

        <HStack alignItems="center" justifyContent="space-between" px="4">
          <InputComponent
            changeText={(text) => fillNumber(text)}
            value={number}
            clearValue={() => fillNumber('')}
            inputType="text"
            isPassword={false}
            keyboardType="numeric"
            keyboardButton="done"
            leftIcon="numeric"
            placeholder="Número"
            rightIcon="delete"
            containerWidth="45%"
            onFocus={() => setToggleFabButton(false)}
            onBlur={() => setToggleFabButton(true)}
          />

          <InputComponent
            changeText={(text) => fillDistrict(text)}
            value={district}
            clearValue={() => fillDistrict('')}
            inputType="text"
            isPassword={false}
            keyboardType="default"
            keyboardButton="done"
            leftIcon="map-legend"
            placeholder="Bairro"
            rightIcon="delete"
            containerWidth="45%"
            onFocus={() => setToggleFabButton(false)}
            onBlur={() => setToggleFabButton(true)}
          />
        </HStack>

        <MaskInputComponent
          value={zipCode}
          onChangeText={(masked, unmasked) => fillZipCode(unmasked)}
          containerWidth="100%"
          paddingHorizontal="4"
          mask="ZIP_CODE"
          leftIcon="map-marker-radius"
          rightIcon="delete"
          clearValue={() => fillZipCode('')}
          type="numeric"
          onFocus={() => setToggleFabButton(false)}
          onBlur={() => setToggleFabButton(true)}
        />

        <HStack alignItems="center" justifyContent="flex-end" pr={4}>
          <Button
            variant="ghost"
            _text={{ color: 'gray.400', fontSize: 12 }}
            _pressed={{ bgColor: 'gray.200' }}
            borderRadius="full"
            onPress={() => setIsOpen(true)}
          >
            Pesquisar CEP
          </Button>
        </HStack>

        <ModalComponent
          title="Pesquisar CEP"
          isOpen={isOpen}
          onCancel={() => {
            setIsOpen(false);
            fillModalState('');
            fillModalCity('');
            fillModalComplement('');
            setListZipCode([]);
          }}
          onClose={() => {
            setIsOpen(false);
            fillModalState('');
            fillModalCity('');
            fillModalComplement('');
            setListZipCode([]);
          }}
          onConfirm={() => setIsOpen(false)}
          cancelButtonLabel="Fechar"
          confirmButtonLabel="Confirmar"
          children={
            <ScrollView>
              <HStack alignItems="center" justifyContent="space-between">
                <SelectComponent
                  containerWidth="45%"
                  marginVertical={2}
                  marginHorizontal={0}
                  accessibilityLabel="State selection for Zip Code"
                  borderWidth={1}
                  closeIcon="chevron-down-circle-outline"
                  openIcon="chevron-up-circle-outline"
                  defaultValue=""
                  items={states.map((stateValue) => (
                    <Select.Item
                      key={`state-${stateValue.id}`}
                      value={stateValue.value}
                      label={`${stateValue.uf} - ${stateValue.label}`}
                    />
                  ))}
                  onValueChange={(text) => fillModalState(text)}
                  placeholder="Estado"
                  selectedValue={modalState}
                  clearValue={() => fillModalState('')}
                />

                <SelectComponent
                  accessibilityLabel="City selection"
                  containerWidth="45%"
                  marginHorizontal={0}
                  borderWidth={1}
                  closeIcon="chevron-down-circle-outline"
                  openIcon="chevron-up-circle-outline"
                  defaultValue=""
                  items={
                    modalListCities.length > 0
                      ? modalListCities.map((cityValue) => (
                          <Select.Item
                            key={`state-${cityValue.id}`}
                            value={cityValue.name}
                            label={cityValue.name}
                          />
                        ))
                      : null
                  }
                  onValueChange={(text) => fillModalCity(text)}
                  placeholder="Cidade"
                  selectedValue={modalCity}
                  editable={!modalState}
                  clearValue={() => fillModalCity('')}
                />
              </HStack>

              <InputComponent
                containerWidth="100%"
                changeText={(text) => fillModalComplement(text)}
                value={modalComplement}
                clearValue={() => fillModalComplement('')}
                inputType="text"
                isPassword={false}
                keyboardType="default"
                keyboardButton="done"
                leftIcon="map-marker"
                placeholder="Logradouro"
                rightIcon="delete"
                paddingHorizontal={0}
                onFocus={() => setToggleFabButton(false)}
                onBlur={() => setToggleFabButton(true)}
              />

              <Checkbox
                _checked={{ bgColor: 'amber.500', borderColor: 'amber.500' }}
                mt={4}
                ml={2}
                _text={{ fontSize: 12, color: 'gray.500' }}
                value="yes"
                onChange={setAutoFill}
              >
                Preencher automaticamente
              </Checkbox>

              <Button
                my={4}
                size="sm"
                bgColor="amber.500"
                borderRadius="full"
                _pressed={{
                  bgColor: 'amber.600',
                }}
              >
                Limpar
              </Button>

              <Divider my={4} alignSelf="center" />

              <Box my={2}>
                <Text mb={4} fontSize={12} color="gray.700">
                  Resultado da busca
                </Text>
              </Box>
              {listZipCode.length > 0
                ? listZipCode.map((item, index) => (
                    <ListItemOfZipCode
                      key={`${index}-${item.zipcode}`}
                      publicPlace={item.public_place}
                      district={item.district}
                      zipCode={item.zipCode}
                      city={item.city}
                      uf={item.uf}
                      complement={item.complement}
                      onSelect={() => {
                        if (autoFill) {
                          fillAddress(item.public_place);
                          fillDistrict(item.district);
                          fillCity(item.city);
                          fillZipCode(item.zipCode);
                          fillState(item.uf);
                          fillComplement(item.complement);
                          setIsOpen(false);
                          fillModalCity('');
                          fillModalState('');
                          fillModalComplement('');
                        } else {
                          fillZipCode(item.zipCode);
                          setIsOpen(false);
                        }
                      }}
                    />
                  ))
                : null}
            </ScrollView>
          }
        />

        <HStack alignItems="center" justifyContent="space-between" width="100%" px="4">
          <SelectComponent
            marginVertical={2}
            containerWidth="45%"
            accessibilityLabel="State selection"
            borderWidth={1}
            closeIcon="chevron-down-circle-outline"
            openIcon="chevron-up-circle-outline"
            defaultValue=""
            items={states.map((stateValue) => (
              <Select.Item
                key={`state-${stateValue.id}`}
                value={stateValue.value}
                label={`${stateValue.uf} - ${stateValue.label}`}
              />
            ))}
            onValueChange={(text) => fillState(text)}
            placeholder="Estado"
            selectedValue={state}
            clearValue={() => fillState('')}
          />

          <SelectComponent
            containerWidth="45%"
            accessibilityLabel="City selection"
            borderWidth={1}
            closeIcon="chevron-down-circle-outline"
            openIcon="chevron-up-circle-outline"
            defaultValue=""
            items={
              listCities.length > 0
                ? listCities.map((cityValue) => (
                    <Select.Item
                      key={`city-${cityValue.id}`}
                      value={cityValue.name}
                      label={cityValue.name}
                    />
                  ))
                : null
            }
            onValueChange={(text) => fillCity(text)}
            placeholder="Cidade"
            selectedValue={city}
            editable={!state}
            clearValue={() => fillCity('')}
          />
        </HStack>

        <InputComponent
          containerWidth="100%"
          paddingHorizontal="4"
          changeText={(text) => fillComplement(text)}
          value={complement}
          clearValue={() => fillComplement('')}
          inputType="text"
          isPassword={false}
          keyboardType="default"
          keyboardButton="done"
          leftIcon="comment-text"
          placeholder="Complemento"
          rightIcon="delete"
          onFocus={() => setToggleFabButton(false)}
          onBlur={() => setToggleFabButton(true)}
        />
      </ScrollView>

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
      toggleFabButton === true ? (
        <FabButtonComponent onPress={() => {}} />
      ) : null}
    </NativeBaseProvider>
  );
}

export default AddressScreen;
