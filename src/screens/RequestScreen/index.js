import React from 'react'
import { NativeBaseProvider, ScrollView, Stack, Text, Input } from 'native-base'

const RequestScreen = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Input w="90%" placeholder="Teste" />
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default RequestScreen
