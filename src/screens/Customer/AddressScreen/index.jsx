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
} from 'native-base';
import HeaderComponent from '../../../components/HeaderComponent';
import InputComponent from '../../../components/InputComponent';
import SelectComponent from '../../../components/SelectComponent';
import ModalComponent from '../../../components/ModalComponent';

import states from '../../../mock/listOfStates';

function AddressScreen({ navigation }) {
  const [address, setAddress] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [zipCode, setZipCode] = React.useState('');
  const [complement, setComplement] = React.useState('');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NativeBaseProvider>
      <HeaderComponent title="Endereço" link={() => navigation.navigate('QueryScreen')} />

      <ScrollView
        _contentContainerStyle={{
          pb: 12,
        }}
      >
        <InputComponent
          containerWidth="100%"
          paddingHorizontal="4"
          changeText={(text) => setAddress(text)}
          value={address}
          clearValue={() => setAddress('')}
          inputType="text"
          isPassword={false}
          keyboardType="default"
          keyboardButton="done"
          leftIcon="map-marker"
          placeholder="Endereço"
          rightIcon="delete"
        />

        <HStack alignItems="center" justifyContent="space-between" px="4">
          <InputComponent
            changeText={(text) => setNumber(text)}
            value={number}
            clearValue={() => setNumber('')}
            inputType="text"
            isPassword={false}
            keyboardType="numeric"
            keyboardButton="done"
            leftIcon="numeric"
            placeholder="Número"
            rightIcon="delete"
            containerWidth="45%"
          />

          <InputComponent
            changeText={(text) => setDistrict(text)}
            value={district}
            clearValue={() => setDistrict('')}
            inputType="text"
            isPassword={false}
            keyboardType="default"
            keyboardButton="done"
            leftIcon="map-legend"
            placeholder="Bairro"
            rightIcon="delete"
            containerWidth="45%"
          />
        </HStack>

        <InputComponent
          containerWidth="100%"
          paddingHorizontal="4"
          changeText={(text) => setZipCode(text)}
          value={zipCode}
          clearValue={() => setZipCode('')}
          inputType="text"
          isPassword={false}
          keyboardType="numeric"
          keyboardButton="done"
          leftIcon="map-marker-radius"
          placeholder="CEP"
          rightIcon="delete"
        />

        <HStack alignItems="center" justifyContent="flex-end" pr={4}>
          <Button
            variant="ghost"
            _text={{ color: 'gray.400', fontSize: 12 }}
            _pressed={{ bgColor: 'gray.200' }}
            borderRadius="full"
            onPress={() => setIsOpen(true)}
          >
            Não sei o meu CEP
          </Button>
        </HStack>

        <ModalComponent
          title="Pesquisar CEP"
          isOpen={isOpen}
          onCancel={() => setIsOpen(false)}
          onClose={() => setIsOpen(false)}
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
                  onValueChange={(text) => setState(text)}
                  placeholder="Estado"
                  selectedValue={state}
                  clearValue={() => setState('')}
                />

                <SelectComponent
                  accessibilityLabel="City selection"
                  containerWidth="45%"
                  marginHorizontal={0}
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
                  onValueChange={(text) => setCity(text)}
                  placeholder="Cidade"
                  selectedValue={city}
                  editable={!state}
                  clearValue={() => setCity('')}
                />
              </HStack>

              <InputComponent
                containerWidth="100%"
                changeText={(text) => setComplement(text)}
                value={complement}
                clearValue={() => setComplement('')}
                inputType="text"
                isPassword={false}
                keyboardType="default"
                keyboardButton="done"
                leftIcon="map-marker"
                placeholder="Logradouro"
                rightIcon="delete"
                paddingHorizontal={0}
              />

              <Button
                my={4}
                size="sm"
                bgColor="amber.500"
                borderRadius="full"
                _pressed={{
                  bgColor: 'amber.600',
                }}
              >
                Pesquisar
              </Button>

              <Divider my={4} alignSelf="center" />

              <Box my={2}>
                <Text mb={4} fontSize={12} color="gray.700">
                  Resultado da busca
                </Text>

                <HStack my={2}>
                  <Text fontSize={12} fontWeight="bold" color="gray.500">
                    Logradouro:{' '}
                  </Text>
                  <Text fontSize={12} color="gray.500">
                    Endereço pesquisado
                  </Text>
                </HStack>

                <HStack alignItems="center" justifyContent="space-between">
                  <HStack my={2}>
                    <Text fontSize={12} fontWeight="bold" color="gray.500">
                      Bairro:{' '}
                    </Text>
                    <Text fontSize={12} color="gray.500">
                      Bairro pesquisado
                    </Text>
                  </HStack>

                  <HStack my={2}>
                    <Text fontSize={12} fontWeight="bold" color="gray.500">
                      CEP:{' '}
                    </Text>
                    <Text fontSize={12} color="gray.500">
                      00000-000
                    </Text>
                  </HStack>
                </HStack>

                <HStack alignItems="center" justifyContent="space-between">
                  <HStack my={2}>
                    <Text fontSize={12} fontWeight="bold" color="gray.500">
                      Cidade:{' '}
                    </Text>
                    <Text fontSize={12} color="gray.500">
                      Cidade pesquisada
                    </Text>
                  </HStack>

                  <HStack my={2}>
                    <Text fontSize={12} fontWeight="bold" color="gray.500">
                      UF:{' '}
                    </Text>
                    <Text fontSize={12} color="gray.500">
                      AC
                    </Text>
                  </HStack>
                </HStack>

                <HStack my={2}>
                  <Text fontSize={12} fontWeight="bold" color="gray.500">
                    Complemento:{' '}
                  </Text>
                  <Text fontSize={12} color="gray.500">
                    Complemento pesquisado
                  </Text>
                </HStack>
              </Box>
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
            onValueChange={(text) => setState(text)}
            placeholder="Estado"
            selectedValue={state}
            clearValue={() => setState('')}
          />

          <SelectComponent
            containerWidth="45%"
            accessibilityLabel="City selection"
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
            onValueChange={(text) => setCity(text)}
            placeholder="Cidade"
            selectedValue={city}
            editable={!state}
            clearValue={() => setCity('')}
          />
        </HStack>

        <InputComponent
          containerWidth="100%"
          paddingHorizontal="4"
          changeText={(text) => setComplement(text)}
          value={complement}
          clearValue={() => setComplement('')}
          inputType="text"
          isPassword={false}
          keyboardType="default"
          keyboardButton="done"
          leftIcon="comment-text"
          placeholder="Complemento"
          rightIcon="delete"
        />
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default AddressScreen;
