import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import {
  NativeBaseProvider,
  Input,
  Stack,
  Text,
  Button,
  ScrollView,
} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'

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
                name="person"
                size={24}
                style={{ marginLeft: 14 }}
                color="gray"
              />
            }
            InputRightElement={
              <Icon
                name="delete"
                size={24}
                style={{ marginRight: 14 }}
                color="gray"
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
                name="lock"
                size={24}
                style={{ marginLeft: 14 }}
                color="gray"
              />
            }
            InputRightElement={
              <>
                <Icon
                  name="delete"
                  size={24}
                  style={{ marginRight: 6 }}
                  color="gray"
                />
                <Icon
                  name="visibility-off"
                  size={24}
                  style={{ marginRight: 14 }}
                  color="gray"
                />
              </>
            }
            w="75%"
            placeholder="Senha"
            keyboardType="numeric"
            variant="rounded"
            type="password"
            focusOutlineColor="amber.500"
          />
          <Button
            onPress={() => navigation.navigate('SyncScreen')}
            w="40%"
            mt="16"
            colorScheme="amber"
          >
            Login
          </Button>
          <Button mt="4" mb="12" variant="ghost" colorScheme="amber">
            Sair
          </Button>
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default LoginScreen
