/* eslint-disable no-console */
/* eslint-disable no-promise-executor-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useCallback } from 'react';
import { NativeBaseProvider, Box, Text, Icon, Fab, FlatList } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RefreshControl } from 'react-native';
import ListEmptyItem from '../../../components/ListEmptyItem';
import filters from '../../../mock/filterCustomers';
import {
  getCustomers,
  getCustomerByName,
  getCustomerById,
  deleteCustomer,
} from '../../../services/customersService';
import ListItem from '../../../components/ListItem';
import HeaderComponent from '../../../components/HeaderComponent';
import SearchBarComponent from '../../../components/SearchBarComponent';
import { showAlert } from '../../../shared/helpers';

function QueryScreen({ navigation }) {
  const [filterValue, setFilterValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [customers, setCustomers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const clearSearchValue = () => setSearchValue('');

  useEffect(() => {
    const loadingCustomers = navigation.addListener('focus', () => {
      getCustomers()
        .then((res) => {
          setCustomers(res);
        })
        .catch((error) => console.log(error));
    });

    return loadingCustomers;
  }, [navigation]);

  const customerSearch = () => {
    if (searchValue !== '') {
      if (filterValue === 'NOME') {
        setCustomers([]);
        getCustomerByName(searchValue)
          .then((res) => {
            res.status === 'success' ? setCustomers(res.payload) : setCustomers([]);
          })
          .catch((error) => console.log(error));
      } else {
        setCustomers([]);
        getCustomerById(searchValue)
          .then((res) => {
            res.status === 'success' ? setCustomers([res.payload]) : setCustomers([]);
          })
          .catch((error) => console.log(error));
      }
    } else {
      setCustomers([]);
      getCustomers()
        .then((res) => {
          setCustomers(res);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => customerSearch(), [searchValue, filterValue]);

  const wait = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setCustomers([]);
    setSearchValue('');
    wait(3000).then(() => {
      setRefreshing(false);
      getCustomers()
        .then((res) => {
          setCustomers(res);
        })
        .catch((error) => console.log(error));
    });
  }, []);

  return (
    <NativeBaseProvider>
      <HeaderComponent title="Clientes" link={() => navigation.navigate('HomeScreen')} />

      <SearchBarComponent
        filterPlaceholder="Filtrar"
        filterList={filters}
        changeFilterValue={(text) => setFilterValue(text)}
        filterValue={filterValue}
        searchValue={searchValue}
        changeSearchValue={(text) => setSearchValue(text)}
        clearSearchValue={() => clearSearchValue()}
      />

      <Box w="100%" px="4" mb="6">
        <Text fontWeight="bold" color="gray.500">
          Histórico de Clientes
        </Text>
      </Box>

      <FlatList
        data={customers}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#faba24']} />
        }
        ListEmptyComponent={<ListEmptyItem />}
        ListFooterComponent={<Box h="75" />}
        renderItem={({ item }) => (
          <ListItem
            title={`${item.CODIGO} - ${item.NOME}`}
            subtitle={item.CPF_CNPJ}
            address={`${item.RUA}, ${item.NUMERO} - ${item.BAIRRO}`}
            deleteItem={() => {
              showAlert(
                'Excluir Cliente',
                'Deseja excluir esse cliente?',
                'warning',
                'Excluir',
                async (callback) => {
                  if (callback === 'accepted') {
                    await deleteCustomer(item.CODIGO);
                    onRefresh();
                  }
                }
              );
            }}
            link={() =>
              navigation.navigate('MainPersonalDataScreen', {
                screen: 'MainScreen',
                params: {
                  id: item.CODIGO,
                  name: item.NOME,
                  fantasyName: item.FANTASIA,
                  cpfCnpj: item.CPF_CNPJ,
                  rgIe: item.RG_IE,
                  address: item.RUA,
                  district: item.BAIRRO,
                  city: item.CIDADE,
                  state: item.ESTADO,
                  zipCode: item.CEP,
                  complement: item.COMPLEMENTO,
                  number: item.NUMERO,
                  additional: item.OBS,
                  email: item.EMAIL,
                  phone: item.TELEFONE,
                },
              })
            }
          />
        )}
      />

      <Fab
        size="md"
        bgColor="amber.500"
        _pressed={{ bgColor: 'amber.600' }}
        icon={<Icon as={MaterialCommunityIcons} name="plus" color="white" />}
        onPress={() => navigation.navigate('MainPersonalDataScreen')}
      />
    </NativeBaseProvider>
  );
}

export default QueryScreen;
