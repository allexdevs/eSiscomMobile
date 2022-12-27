import React, { useState } from 'react'
import { NativeBaseProvider, ScrollView } from 'native-base'
import HeaderComponent from '../../../components/HeaderComponent'
import InputComponent from '../../../components/InputComponent'

const MainScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const [fantasyName, setFantasyName] = useState('')
  const [cpfCnpj, setCpfCnpj] = useState('')
  const [rgIe, setRgIe] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [togglePassword, setTogglePassword] = useState(false)

  return (
    <NativeBaseProvider>
      <HeaderComponent
        title="Principal"
        link={() => navigation.navigate('QueryScreen')}
      />
      <ScrollView>
        <InputComponent
          leftIcon="text"
          rightIcon="delete"
          placeholder="Nome"
          value={name}
          changeText={text => setName(text)}
          clearValue={() => setName('')}
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
          leftIcon="note-text-outline"
          rightIcon="delete"
          placeholder="Nome Fantasia"
          value={fantasyName}
          changeText={text => setFantasyName(text)}
          clearValue={() => setFantasyName('')}
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
          leftIcon="card-bulleted-outline"
          rightIcon="delete"
          placeholder="CPF/CNPJ"
          value={cpfCnpj}
          changeText={text => setCpfCnpj(text)}
          clearValue={() => setCpfCnpj('')}
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
          leftIcon="card-text-outline"
          rightIcon="delete"
          placeholder="Inscrição Estadual / RG"
          value={rgIe}
          changeText={text => setRgIe(text)}
          clearValue={() => setRgIe('')}
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
          leftIcon="phone"
          rightIcon="delete"
          placeholder="Telefone"
          value={phone}
          changeText={text => setPhone(text)}
          clearValue={() => setPhone('')}
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
          leftIcon="email"
          rightIcon="delete"
          placeholder="Email"
          value={email}
          changeText={text => setEmail(text)}
          clearValue={() => setEmail('')}
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
    </NativeBaseProvider>
  )
}

export default MainScreen
