import React, { useState } from 'react'
import {
  NativeBaseProvider,
  ScrollView,
  Stack,
  Text,
  Box,
  Icon,
  HStack,
  Button,
  Select,
  Checkbox,
  Fab,
} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// mock values
import { paymentMethods } from '../../../mock/paymentMethods'

const RequestScreen = ({ navigation }) => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [checkClients, setCheckClients] = useState('')
  const [checkProducts, setCheckProducts] = useState('')

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box bgColor="amber.500" py="2" px="2" shadow={8} mb="4">
          <HStack alignItems="center">
            <Button
              onPress={() => navigation.navigate('LoginScreen')}
              leftIcon={
                <Icon
                  as={MaterialIcons}
                  name="arrow-left"
                  size="md"
                  color="white"
                />
              }
              variant="ghost"
              borderRadius="50"
            ></Button>
            <Text ml="4" color="white" fontWeight="bold" fontSize="lg">
              Pedido
            </Text>
            <Button
              ml="auto"
              leftIcon={
                <Icon
                  as={MaterialIcons}
                  name="download-network"
                  size="md"
                  color="white"
                />
              }
              variant="ghost"
              borderRadius="50"
            />
            <Button
              leftIcon={
                <Icon
                  as={MaterialIcons}
                  name="upload-network"
                  size="md"
                  color="white"
                />
              }
              variant="ghost"
              borderRadius="50"
            />
          </HStack>
        </Box>
        <Stack alignItems="center">
          <Select
            w="90%"
            variant="rounded"
            selectedValue={paymentMethod}
            placeholder="Forma de pagamento padrão"
            _selectedItem={{
              endIcon: (
                <Icon as={MaterialIcons} size="sm" color="gray.500" mr="4" />
              ),
            }}
            onValueChange={itemValue => setPaymentMethod(itemValue)}
          >
            {paymentMethods.map((value, index) => (
              <Select.Item
                key={`${index}-${value}`}
                label={value.value}
                value={value.value}
              />
            ))}
          </Select>
          <HStack mt="4" alignItems="center" w="90%">
            <Checkbox
              mt="4"
              value={checkClients}
              accessibilityLabel="clientes"
            />
            <Text mt="4" ml="2">
              Lista todos os Clientes ao abrir o Pedido
            </Text>
          </HStack>
          <HStack alignItems="center" w="90%" mt="4">
            <Checkbox
              mt="2"
              value={checkProducts}
              accessibilityLabel="produtos"
            />
            <Text mt="2" ml="2">
              Lista todos os Produtos ao abrir o Pedido
            </Text>
          </HStack>
          <Fab
            colorScheme="amber"
            size="lg"
            icon={
              <Icon as={MaterialIcons} name="check" color="white" size="md" />
            }
          />
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default RequestScreen
