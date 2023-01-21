/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-fallthrough */
/* eslint-disable no-console */
/* eslint-disable no-promise-executor-return */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RefreshControl } from 'react-native';
import { NativeBaseProvider, Box, Text, FlatList } from 'native-base';

// components
import HeaderComponent from '../../components/HeaderComponent';
import SearchBarComponent from '../../components/SearchBarComponent';
import ListEmptyItem from '../../components/ListEmptyItem';
import ListItemProduct from '../../components/ListItemProduct';

// mocks
import products from '../../mock/productsFilter';

// services
import {
  findAllProducts,
  findProductsById,
  findProductsByName,
  findProductsByGroup,
  findProductsBySubGroup,
  findProductsByBrand,
  findProductsByFurnisher,
} from '../../services/productsService';

// helpers
import { toCurrency } from '../../shared/helpers';

export default function ProductsScreen() {
  const navigation = useNavigation();
  const [filterValue, setFilterValue] = useState('CODIGO');
  const [searchValue, setSearchValue] = useState('');
  const [productsList, setProductsList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const loadingProducts = navigation.addListener('focus', () => {
      findAllProducts()
        .then((responseData) => {
          responseData.status === 'success'
            ? setProductsList(responseData.payload)
            : setProductsList([]);
        })
        .catch((error) => console.log(error));
    });

    return loadingProducts;
  }, [navigation]);

  const wait = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setProductsList([]);
    setSearchValue('');
    wait(3000).then(() => {
      setRefreshing(false);
      findAllProducts()
        .then((res) => {
          setProductsList(res.payload);
        })
        .catch((error) => console.log(error));
    });
  }, []);

  const productSearch = () => {
    if (searchValue !== '') {
      if (filterValue === 'CODIGO') {
        setProductsList([]);
        findProductsById(searchValue)
          .then((responseData) => {
            responseData.status === 'success'
              ? setProductsList([responseData.payload])
              : setProductsList([]);
          })
          .catch((error) => console.log(error));
      } else if (filterValue === 'NOME') {
        setProductsList([]);
        findProductsByName(searchValue)
          .then((responseData) => {
            responseData.status === 'success'
              ? setProductsList(responseData.payload)
              : setProductsList([]);
          })
          .catch((error) => console.log(error));
      } else if (filterValue === 'GRUPO') {
        setProductsList([]);
        findProductsByGroup(searchValue)
          .then((responseData) => {
            responseData.status === 'success'
              ? setProductsList(responseData.payload)
              : setProductsList([]);
          })
          .catch((error) => console.log(error));
      } else if (filterValue === 'SUBGRUPO') {
        setProductsList([]);
        findProductsBySubGroup(searchValue)
          .then((responseData) => {
            responseData.status === 'success'
              ? setProductsList(responseData.payload)
              : setProductsList([]);
          })
          .catch((error) => console.log(error));
      } else if (filterValue === 'MARCA') {
        setProductsList([]);
        findProductsByBrand(searchValue)
          .then((responseData) => {
            responseData.status === 'success'
              ? setProductsList(responseData.payload)
              : setProductsList([]);
          })
          .catch((error) => console.log(error));
      } else if (filterValue === 'FORNECEDOR') {
        setProductsList([]);
        findProductsByFurnisher(searchValue)
          .then((responseData) => {
            responseData.status === 'success'
              ? setProductsList(responseData.payload)
              : setProductsList([]);
          })
          .catch((error) => console.log(error));
      }
    } else {
      setProductsList([]);
      findAllProducts()
        .then((responseData) => {
          responseData.status === 'success'
            ? setProductsList(responseData.payload)
            : setProductsList([]);
        })
        .catch((error) => console.log(error));
    }
  };

  // useEffect(() => {
  //   productSearch();
  // }, [searchValue, filterValue]);

  return (
    <NativeBaseProvider>
      <HeaderComponent title="Produtos" link={() => navigation.navigate('HomeScreen')} />

      <SearchBarComponent
        changeFilterValue={(text) => setFilterValue(text)}
        filterValue={filterValue}
        filterList={products}
        searchValue={searchValue}
        changeSearchValue={(text) => setSearchValue(text)}
        submitEditing={() => productSearch()}
        clearSearchValue={() => {
          setSearchValue('');
          setProductsList([]);
          findAllProducts()
            .then((responseData) => {
              responseData.status === 'success'
                ? setProductsList(responseData.payload)
                : setProductsList([]);
            })
            .catch((error) => console.log(error));
        }}
        filterPlaceholder="Filtrar"
      />

      <Box w="100%" px="4" mb="6">
        <Text fontWeight="bold" color="gray.500">
          Histórico de Produtos
        </Text>
      </Box>

      <FlatList
        data={productsList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#faba24']} />
        }
        ListEmptyComponent={<ListEmptyItem />}
        ListFooterComponent={<Box h="75" />}
        renderItem={({ item }) => (
          <ListItemProduct
            code={item.CODIGO}
            name={item.NOME}
            unity={item.UNIDADE}
            price={toCurrency(item.VLR_VENDA)}
            stock={item.ESTOQUE}
            group={item.GRUPO_NOME}
          />
        )}
        keyExtractor={(item) => item.CODIGO}
      />
    </NativeBaseProvider>
  );
}
