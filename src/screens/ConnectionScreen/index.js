import React from 'react'
import {
  NativeBaseProvider,
  Input,
  Stack,
  ScrollView,
  Icon,
  Fab,
  Text,
  Box,
  HStack,
  Button,
} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ConnectionScreen = ({ navigation }) => {
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
              Conexão
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
        <Stack py="6" alignItems="center">
          <Input
            InputLeftElement={
              <Icon
                as={MaterialIcons}
                name="server-network"
                size="md"
                color="gray.500"
                ml="4"
              />
            }
            focusOutlineColor="amber.500"
            w="90%"
            variant="rounded"
            placeholder="Endereço IP"
          />
          <Input
            InputLeftElement={
              <Icon
                as={MaterialIcons}
                name="database"
                size="md"
                color="gray.500"
                ml="4"
              />
            }
            focusOutlineColor="amber.500"
            mt="4"
            w="90%"
            variant="rounded"
            placeholder="Base de dados"
          />
          <Input
            InputLeftElement={
              <Icon
                as={MaterialIcons}
                name="account"
                size="md"
                color="gray.500"
                ml="4"
              />
            }
            focusOutlineColor="amber.500"
            mt="4"
            w="90%"
            variant="rounded"
            placeholder="Usuário"
          />
          <Input
            InputLeftElement={
              <Icon
                as={MaterialIcons}
                name="lock-open"
                size="md"
                color="gray.500"
                ml="4"
              />
            }
            focusOutlineColor="amber.500"
            mt="4"
            w="90%"
            variant="rounded"
            placeholder="Senha"
            type="password"
          />
          <Input
            InputLeftElement={
              <Icon
                as={MaterialIcons}
                name="door-closed-lock"
                size="md"
                color="gray.500"
                ml="4"
              />
            }
            focusOutlineColor="amber.500"
            mt="4"
            w="90%"
            variant="rounded"
            placeholder="Porta"
          />
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

export default ConnectionScreen
