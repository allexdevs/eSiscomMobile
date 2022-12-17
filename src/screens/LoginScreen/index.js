import React from 'react'
import { Image } from 'react-native'
import {
  NativeBaseProvider,
  Input,
  Stack,
  Text,
  Button,
  ScrollView,
  Icon,
  HStack,
} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// styles
import Styles from './styles'

// assets
import logo from '../../assets/logo-light.png'

const LoginScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Stack alignItems="center">
          <Image style={Styles.logo} source={logo} resizeMode="contain" />
          <Text mt="16" fontSize="2xl" color="gray.600">
            Login
          </Text>
          <Input
            InputLeftElement={
              <Icon
                as={MaterialIcons}
                name="person"
                size="md"
                ml="4"
                color="gray.500"
              />
            }
            InputRightElement={
              <Button
                leftIcon={
                  <Icon
                    as={MaterialIcons}
                    name="delete"
                    size="md"
                    color="gray.500"
                  />
                }
                borderRadius="50"
                variant="ghost"
                mr="1"
              />
            }
            w="75%"
            mt="12"
            mb="4"
            placeholder="Usuário"
            keyboardType="default"
            variant="rounded"
            focusOutlineColor="amber.500"
          />
          <Input
            InputLeftElement={
              <Icon
                as={MaterialIcons}
                name="lock"
                size="md"
                ml="4"
                color="gray.500"
              />
            }
            InputRightElement={
              <>
                <Button
                  leftIcon={
                    <Icon
                      as={MaterialIcons}
                      name="delete"
                      size="md"
                      color="gray.500"
                    />
                  }
                  variant="ghost"
                  borderRadius="50"
                />
                <Button
                  leftIcon={
                    <Icon
                      as={MaterialIcons}
                      name="visibility-off"
                      size="md"
                      color="gray.500"
                    />
                  }
                  variant="ghost"
                  borderRadius="50"
                  mr='1'
                />
              </>
            }
            w="75%"
            placeholder="Senha"
            keyboardType="numeric"
            variant="rounded"
            type="password"
            focusOutlineColor="amber.500"
            mr="2"
          />
          <Button
            onPress={() => navigation.navigate('SyncScreen')}
            w="40%"
            mt="16"
            colorScheme="amber"
          >
            Login
          </Button>
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            mt="4"
            mb="12"
            variant="ghost"
            colorScheme="amber"
          >
            Sair
          </Button>
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default LoginScreen
