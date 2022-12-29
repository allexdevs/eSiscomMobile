import * as React from 'react'
import { NativeBaseProvider, ScrollView, Select, HStack } from 'native-base'
import HeaderComponent from '../../../components/HeaderComponent'
import InputComponent from '../../../components/InputComponent'
import SelectComponent from '../../../components/SelectComponent'

import { states } from '../../../mock/listOfStates'

const AddressScreen = ({ navigation }) => {
  const [address, setAddress] = React.useState('')
  const [number, setNumber] = React.useState('')
  const [district, setDistrict] = React.useState('')
  const [zipCode, setZipCode] = React.useState('')
  const [complement, setComplement] = React.useState('')
  const [state, setState] = React.useState('')
  const [city, setCity] = React.useState('')

  return (
    <NativeBaseProvider>
      <HeaderComponent
        title="Endereço"
        link={() => navigation.navigate('QueryScreen')}
      />

      <ScrollView
        _contentContainerStyle={{
          pb: 12,
        }}
      >
        <InputComponent
          changeText={text => setAddress(text)}
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

        <HStack>
          <InputComponent
            changeText={text => setNumber(text)}
            value={number}
            clearValue={() => setNumber('')}
            inputType="text"
            isPassword={false}
            keyboardType="numeric"
            keyboardButton="done"
            leftIcon="numeric"
            placeholder="Número"
            rightIcon="delete"
            containerWidth="50%"
          />

          <InputComponent
            changeText={text => setDistrict(text)}
            value={district}
            clearValue={() => setDistrict('')}
            inputType="text"
            isPassword={false}
            keyboardType="default"
            keyboardButton="done"
            leftIcon="map-legend"
            placeholder="Bairro"
            rightIcon="delete"
            containerWidth="50%"
          />
        </HStack>

        <InputComponent
          changeText={text => setZipCode(text)}
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

        <HStack alignItems="center" justifyContent="space-between" width="100%">
          <SelectComponent
            marginVertical={2}
            containerWidth="40%"
            accessibilityLabel="State selection"
            borderWidth={1}
            closeIcon="chevron-down-circle-outline"
            openIcon="chevron-up-circle-outline"
            defaultValue=""
            items={states.map(state => (
              <Select.Item
                key={`state-${state.id}`}
                value={state.value}
                label={`${state.uf} - ${state.label}`}
              />
            ))}
            onValueChange={text => setState(text)}
            placeholder="Estado"
            selectedValue={state}
            clearValue={() => setState('')}
          />

          <SelectComponent
            containerWidth="40%"
            accessibilityLabel="City selection"
            borderWidth={1}
            closeIcon="chevron-down-circle-outline"
            openIcon="chevron-up-circle-outline"
            defaultValue=""
            items={states.map(state => (
              <Select.Item
                key={`state-${state.id}`}
                value={state.value}
                label={`${state.uf} - ${state.label}`}
              />
            ))}
            onValueChange={text => setCity(text)}
            placeholder="Cidade"
            selectedValue={city}
            editable={!state ? true : false}
            clearValue={() => setCity('')}
          />
        </HStack>

        <InputComponent
          changeText={text => setComplement(text)}
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
  )
}

export default AddressScreen
