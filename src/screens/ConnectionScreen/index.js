import React from 'react'
import { NativeBaseProvider, Input, Stack, ScrollView } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ConnectionScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Stack py="6" alignItems="center">
          <Input
            focusOutlineColor="amber.500"
            w="90%"
            variant="rounded"
            placeholder="Endereço IP"
          />
          <Input
            focusOutlineColor="amber.500"
            mt="4"
            w="90%"
            variant="rounded"
            placeholder="Base de dados"
          />
          <Input
            focusOutlineColor="amber.500"
            mt="4"
            w="90%"
            variant="rounded"
            placeholder="Usuário"
          />
          <Input
            focusOutlineColor="amber.500"
            mt="4"
            w="90%"
            variant="rounded"
            placeholder="Senha"
            type="password"
          />
          <Input
            focusOutlineColor="amber.500"
            mt="4"
            w="90%"
            variant="rounded"
            placeholder="Porta"
          />
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default ConnectionScreen
