/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeBaseProvider, Input, Stack, Text, Button, ScrollView, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import authenticate from '../../../services/loginService';

// styles
import Styles from './styles';

// assets
import logo from '../../../assets/logo-light.png';

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [settings, setSettings] = useState({});
  const [visibility, setVisibility] = useState('password');

  const clearUsername = () => setUsername('');
  const clearPassword = () => setPassword('');
  const toggleVisibility = () => {
    visibility === 'password' ? setVisibility('text') : setVisibility('password');
  };

  const runLogin = () => {
    if (username !== '' && password !== '') {
      if (
        !settings.host ||
        !settings.database ||
        !settings.username ||
        !settings.password ||
        !settings.port
      ) {
        if (username === 'FOCO' && password === '1931') {
          navigation.navigate('SyncScreen');
        } else {
          SweetAlert.showAlertWithOptions(
            {
              title: 'Login',
              subTitle: 'Usuário ou senha incorretos',
              confirmButtonTitle: 'Ok',
              style: 'warning',
            },
            (callback) => console.log(callback)
          );
        }
      } else {
        authenticate(username, password)
          .then((res) => {
            if (res.status === 'success') {
              SweetAlert.showAlertWithOptions(
                {
                  title: 'Login',
                  subTitle: `${res.message}`,
                  confirmButtonTitle: 'Ok',
                  style: 'success',
                },
                (callback) => (callback === 'accepted' ? navigation.navigate('HomeScreen') : null)
              );
            } else {
              SweetAlert.showAlertWithOptions(
                {
                  title: 'Login',
                  subTitle: `${res.message}`,
                  confirmButtonTitle: 'Ok',
                  style: 'warning',
                },
                (callback) => console.log(callback)
              );
            }
          })
          .catch((error) => console.log(error));
      }
    } else {
      SweetAlert.showAlertWithOptions(
        {
          title: 'Campos Vazios',
          subTitle: 'Preencha os campos em branco',
          confirmButtonText: 'Ok',
          style: 'warning',
        },
        (callback) => console.log(callback)
      );
    }
  };

  async function checkSettings() {
    try {
      const savedSettings = await AsyncStorage.getItem('settings');
      return savedSettings != null ? JSON.parse(savedSettings) : {};
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const settingsVerification = navigation.addListener('focus', () => {
      const config = checkSettings();
      config
        .then((value) => {
          const response = {
            host: value.host,
            database: value.database,
            username: value.username,
            password: value.password,
            port: value.port,
          };
          setSettings(response);
          console.log(settings);
        })
        .catch((error) => console.log(error));
    });

    return settingsVerification;
  }, [navigation, settings]);

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
              <Icon as={MaterialIcons} name="person" size="md" ml="4" color="gray.500" />
            }
            InputRightElement={
              <Button
                leftIcon={<Icon as={MaterialIcons} name="delete" size="md" color="gray.500" />}
                borderRadius="50"
                variant="ghost"
                mr="1"
                onPress={() => clearUsername()}
              />
            }
            w="75%"
            mt="12"
            mb="4"
            placeholder="Usuário"
            keyboardType="default"
            variant="rounded"
            focusOutlineColor="amber.500"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <Input
            InputLeftElement={
              <Icon as={MaterialIcons} name="lock" size="md" ml="4" color="gray.500" />
            }
            InputRightElement={
              <>
                <Button
                  leftIcon={<Icon as={MaterialIcons} name="delete" size="md" color="gray.500" />}
                  variant="ghost"
                  borderRadius="50"
                  onPress={() => clearPassword()}
                />
                <Button
                  leftIcon={
                    <Icon as={MaterialIcons} name="visibility-off" size="md" color="gray.500" />
                  }
                  variant="ghost"
                  borderRadius="50"
                  mr="1"
                  onPress={() => toggleVisibility()}
                />
              </>
            }
            w="75%"
            placeholder="Senha"
            keyboardType="numeric"
            variant="rounded"
            type={visibility}
            focusOutlineColor="amber.500"
            mr="2"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <Button onPress={() => runLogin()} w="40%" mt="16" colorScheme="amber">
            Login
          </Button>
          <Button mt="4" mb="12" variant="ghost" colorScheme="amber">
            Sair
          </Button>
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default LoginScreen;
