/* eslint-disable no-unneeded-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-children-prop */
import * as React from 'react';
import {
  NativeBaseProvider,
  ScrollView,
  HStack,
  Button,
  Divider,
  Box,
  Text,
  Checkbox,
  FlatList,
} from 'native-base';
import HeaderComponent from '../../../components/HeaderComponent';
import InputComponent from '../../../components/InputComponent';
import ModalComponent from '../../../components/ModalComponent';

import states from '../../../mock/listOfStates';
import FabButtonComponent from '../../../components/FabButtonComponent';

import { CustomerContext } from '../../../contexts/customerContext';
import ListItemOfZipCode from '../../../components/ListItemOfZipCode';
import MaskInputComponent from '../../../components/MaskInputComponent';
import SelectComponentWithSearchBar from '../../../components/SelectComponentWithSearchBar';

import { addNewCustomer, updateCustomer } from '../../../services/customersService';

import {
  limitCharacters,
  removeSpecialCharacters,
  filterCity,
  filterState,
} from '../../../shared/helpers';

function AddressScreen({ navigation }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [toggleFabButton, setToggleFabButton] = React.useState(true);
  const [autoFill, setAutoFill] = React.useState(false);
  // state
  const [toggleModalState, setToggleModalState] = React.useState(false);
  const [modalStateSearch, setModalStateSearch] = React.useState('');
  // city
  const [toggleModalCity, setToggleModalCity] = React.useState(false);
  const [modalCitySearch, setModalCitySearch] = React.useState('');
  // zip code state
  const [toggleModalZipCodeState, setToggleModalZipCodeState] = React.useState(false);
  const [modalZipCodeStateSearch, setModalZipCodeStateSearch] = React.useState('');
  // zip code city
  const [toggleModalZipCodeCity, setToggleModalZipCodeCity] = React.useState(false);
  const [modalZipCodeCitySearch, setModalZipCodeCitySearch] = React.useState('');

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
    lookForZipCode,
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
                <SelectComponentWithSearchBar
                  label={modalState}
                  emptyLabel="Estado"
                  containerWidth="45%"
                  leftIcon="map"
                  rightIcon="delete"
                  editable={false}
                  visible={toggleModalZipCodeState}
                  show={() => setToggleModalZipCodeState(true)}
                  hide={() => {
                    setToggleModalZipCodeState(false);
                    setModalZipCodeStateSearch('');
                  }}
                  title="Estado"
                  placeholder="Pesquisar estado..."
                  items={
                    <FlatList
                      data={filterState(states, modalZipCodeStateSearch)}
                      renderItem={({ item }) => (
                        <Button
                          justifyContent="flex-start"
                          variant="ghost"
                          my={1}
                          _text={{ color: 'gray.500' }}
                          _pressed={{ bgColor: 'gray.200' }}
                          borderRadius="full"
                          onPress={() => {
                            fillModalState(item.value.toUpperCase());
                            setToggleModalZipCodeState(false);
                            setModalZipCodeStateSearch('');
                          }}
                        >{`${item.uf} - ${item.label}`}</Button>
                      )}
                      keyExtractor={(item) => item.id}
                    />
                  }
                  clearValue={() => {
                    fillModalState('');
                    fillModalCity('');
                  }}
                  clearSearchValue={() => setModalZipCodeStateSearch('')}
                  searchValue={modalZipCodeStateSearch}
                  onSearch={(text) => setModalZipCodeStateSearch(text)}
                />

                <SelectComponentWithSearchBar
                  label={limitCharacters(modalCity)}
                  emptyLabel="Cidade"
                  containerWidth="45%"
                  leftIcon="city"
                  rightIcon="delete"
                  editable={modalState !== '' ? false : true}
                  visible={toggleModalZipCodeCity}
                  show={() => setToggleModalZipCodeCity(true)}
                  hide={() => {
                    setToggleModalZipCodeCity(false);
                    setModalZipCodeCitySearch('');
                  }}
                  title="Cidade"
                  placeholder="Pesquisar cidade..."
                  items={
                    <FlatList
                      data={filterCity(modalListCities, modalZipCodeCitySearch)}
                      renderItem={({ item }) => (
                        <Button
                          justifyContent="flex-start"
                          variant="ghost"
                          my={1}
                          _text={{ color: 'gray.500' }}
                          _pressed={{ bgColor: 'gray.200' }}
                          borderRadius="full"
                          onPress={() => {
                            fillModalCity(item.name);
                            setToggleModalZipCodeCity(false);
                            setModalZipCodeCitySearch('');
                          }}
                        >
                          {item.name}
                        </Button>
                      )}
                      keyExtractor={(item) => item.id}
                    />
                  }
                  clearValue={() => fillModalCity('')}
                  clearSearchValue={() => setModalZipCodeCitySearch('')}
                  searchValue={modalZipCodeCitySearch}
                  onSearch={(text) => setModalZipCodeCitySearch(text)}
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
                onPress={() =>
                  lookForZipCode(modalState, removeSpecialCharacters(modalCity), modalComplement)
                }
              >
                Pesquisar
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
          <SelectComponentWithSearchBar
            label={state}
            emptyLabel="Estado"
            containerWidth="45%"
            leftIcon="map"
            rightIcon="delete"
            editable={false}
            visible={toggleModalState}
            show={() => setToggleModalState(true)}
            hide={() => {
              setToggleModalState(false);
              setModalStateSearch('');
            }}
            title="Estado"
            placeholder="Pesquisar estado..."
            items={
              <FlatList
                data={filterState(states, modalStateSearch)}
                renderItem={({ item }) => (
                  <Button
                    justifyContent="flex-start"
                    variant="ghost"
                    my={1}
                    _text={{ color: 'gray.500' }}
                    _pressed={{ bgColor: 'gray.200' }}
                    borderRadius="full"
                    onPress={() => {
                      fillState(item.value.toUpperCase());
                      setToggleModalState(false);
                      setModalStateSearch('');
                    }}
                  >{`${item.uf} - ${item.label}`}</Button>
                )}
                keyExtractor={(item) => item.id}
              />
            }
            clearValue={() => {
              fillState('');
              fillCity('');
            }}
            clearSearchValue={() => setModalStateSearch('')}
            searchValue={modalStateSearch}
            onSearch={(text) => setModalStateSearch(text)}
          />

          <SelectComponentWithSearchBar
            label={limitCharacters(city)}
            emptyLabel="Cidade"
            containerWidth="45%"
            leftIcon="city"
            rightIcon="delete"
            visible={toggleModalCity}
            editable={state !== '' ? false : true}
            show={() => setToggleModalCity(true)}
            hide={() => {
              setToggleModalCity(false);
              setModalCitySearch('');
            }}
            title="Cidade"
            placeholder="Pesquisar cidade..."
            items={
              <FlatList
                data={filterCity(listCities, modalCitySearch)}
                renderItem={({ item }) => (
                  <Button
                    justifyContent="flex-start"
                    variant="ghost"
                    my={1}
                    _text={{ color: 'gray.500' }}
                    _pressed={{ bgColor: 'gray.200' }}
                    borderRadius="full"
                    onPress={() => {
                      fillCity(item.name);
                      setToggleModalCity(false);
                      setModalCitySearch('');
                    }}
                  >
                    {item.name}
                  </Button>
                )}
                keyExtractor={(item) => item.id}
              />
            }
            clearValue={() => fillCity('')}
            clearSearchValue={() => setModalCitySearch('')}
            searchValue={modalCitySearch}
            onSearch={(text) => setModalCitySearch(text)}
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

export default AddressScreen;
