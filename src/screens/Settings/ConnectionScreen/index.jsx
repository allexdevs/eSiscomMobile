/* eslint-disable no-console */
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SweetAlert from 'react-native-sweet-alert';
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
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import config from '../../../services/settingsService';

function ConnectionScreen({ navigation }) {
  const [host, setHost] = useState('');
  const [database, setDatabase] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [port, setPort] = useState('');

  const saveSettings = async () => {
    if (!host || !database || !username || !password || !port) {
      SweetAlert.showAlertWithOptions(
        {
          title: 'Campos Vazios',
          subTitle: 'Preencha os campos em branco',
          confirmButtonTitle: 'Ok',
          style: 'warning',
        },
        (callback) => console.log(callback)
      );
      return;
    }
    try {
      const settings = {
        host,
        database,
        username,
        password,
        port,
      };
      const value = JSON.stringify(settings);
      await AsyncStorage.setItem('settings', value);
      config(host, database, username, password, port)
        .then((res) => {
          SweetAlert.showAlertWithOptions(
            {
              title: 'Configuração',
              subTitle: `${res.message}`,
              confirmButtonTitle: 'Ok',
              style: 'success',
            },
            (callback) => (callback === 'accepted' ? navigation.navigate('LoginScreen') : null)
          );
        })
        .catch((error) => {
          SweetAlert.showAlertWithOptions(
            {
              title: 'Configuração',
              subTitle: `${error.message}`,
              confirmButtonTitle: 'Ok',
              style: 'error',
            },
            (callback) => (callback === 'accepted' ? SweetAlert.dismissAlert() : null)
          );
        });
    } catch (e) {
      SweetAlert.showAlertWithOptions(
        {
          title: 'Erro',
          subTitle: 'Não foi possível concluir a configuração',
          confirmButtonTitle: 'Ok',
          style: 'error',
        },
        (callback) => (callback === 'accepted' ? SweetAlert.dismissAlert() : null)
      );
      console.log(e);
    }
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box bgColor="amber.500" py="2" px="2" shadow={8} mb="4">
          <HStack alignItems="center">
            <Button
              onPress={() => navigation.navigate('LoginScreen')}
              leftIcon={<Icon as={MaterialIcons} name="arrow-left" size="md" color="white" />}
              variant="ghost"
              borderRadius="50"
            />
            <Text ml="4" color="white" fontWeight="bold" fontSize="lg">
              Conexão
            </Text>
            <Button
              ml="auto"
              leftIcon={<Icon as={MaterialIcons} name="download-network" size="md" color="white" />}
              variant="ghost"
              borderRadius="50"
            />
            <Button
              leftIcon={<Icon as={MaterialIcons} name="upload-network" size="md" color="white" />}
              variant="ghost"
              borderRadius="50"
            />
          </HStack>
        </Box>
        <Stack py="6" alignItems="center">
          <Input
            InputLeftElement={
              <Icon as={MaterialIcons} name="server-network" size="md" color="gray.500" ml="4" />
            }
            focusOutlineColor="amber.500"
            w="90%"
            variant="rounded"
            placeholder="Endereço IP"
            onChangeText={(text) => setHost(text)}
          />
          <Input
            InputLeftElement={
              <Icon as={MaterialIcons} name="database" size="md" color="gray.500" ml="4" />
            }
            focusOutlineColor="amber.500"
            mt="4"
            w="90%"
            variant="rounded"
            placeholder="Base de dados"
            onChangeText={(text) => setDatabase(text)}
          />
          <Input
            InputLeftElement={
              <Icon as={MaterialIcons} name="account" size="md" color="gray.500" ml="4" />
            }
            focusOutlineColor="amber.500"
            mt="4"
            w="90%"
            variant="rounded"
            placeholder="Usuário"
            onChangeText={(text) => setUsername(text)}
          />
          <Input
            InputLeftElement={
              <Icon as={MaterialIcons} name="lock-open" size="md" color="gray.500" ml="4" />
            }
            focusOutlineColor="amber.500"
            mt="4"
            w="90%"
            variant="rounded"
            placeholder="Senha"
            type="password"
            onChangeText={(text) => setPassword(text)}
          />
          <Input
            InputLeftElement={
              <Icon as={MaterialIcons} name="door-closed-lock" size="md" color="gray.500" ml="4" />
            }
            focusOutlineColor="amber.500"
            mt="4"
            w="90%"
            variant="rounded"
            placeholder="Porta"
            onChangeText={(text) => setPort(text)}
            keyboardType="numeric"
            mb="24"
          />
          <Fab
            colorScheme="amber"
            size="lg"
            icon={<Icon as={MaterialIcons} name="check" color="white" size="md" />}
            onPress={() => saveSettings()}
          />
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default ConnectionScreen;
