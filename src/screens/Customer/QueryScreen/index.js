import React, { useState, useEffect, useCallback } from 'react'
import {
  NativeBaseProvider,
  HStack,
  Box,
  Text,
  Icon,
  Button,
  Fab,
  FlatList,
  Select,
  Input,
} from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ListEmptyItem from '../../../components/ListEmptyItem'
import { filters } from '../../../mock/filterCustomers'
import {
  getCustomers,
  getCustomerByName,
  getCustomerById,
} from '../../../services/customersService'
import ListItem from '../../../components/ListItem'
import { RefreshControl } from 'react-native'
import HeaderComponent from '../../../components/HeaderComponent'

const QueryScreen = ({ navigation }) => {
  const [filterValue, setFilterValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [customers, setCustomers] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const clearSearchValue = () => setSearchValue('')

  useEffect(() => {
    const loadingCustomers = navigation.addListener('focus', () => {
      getCustomers()
        .then(res => {
          setCustomers(res)
        })
        .catch(error => console.log(error))
    })

    return loadingCustomers
  }, [navigation])

  const customerSearch = () => {
    if (searchValue != '') {
      if (filterValue == 'NOME') {
        setCustomers([])
        getCustomerByName(searchValue)
          .then(res => {
            res.status == 'success'
              ? setCustomers(res.payload)
              : setCustomers([])
          })
          .catch(error => console.log(error))
      } else {
        setCustomers([])
        getCustomerById(searchValue)
          .then(res => {
            res.status == 'success'
              ? setCustomers([res.payload])
              : setCustomers([])
          })
          .catch(error => console.log(error))
      }
    } else {
      setCustomers([])
      getCustomers()
        .then(res => {
          setCustomers(res)
        })
        .catch(error => console.log(error))
    }
  }

  useEffect(() => customerSearch(), [searchValue, filterValue])

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setCustomers([])
    setSearchValue('')
    wait(3000).then(() => {
      setRefreshing(false)
      getCustomers()
        .then(res => {
          setCustomers(res)
        })
        .catch(error => console.log(error))
    })
  }, [])

  return (
    <NativeBaseProvider>
      <HeaderComponent
        title="Clientes"
        link={() => navigation.navigate('HomeScreen')}
      />

      <Box
        justifyContent="center"
        h="12"
        mb="6"
        borderWidth={1}
        borderColor="gray.300"
        mx="4"
        borderRadius="30"
      >
        <HStack alignItems={'center'}>
          <Select
            width="90"
            textAlign="center"
            color="gray.500"
            variant="unstyled"
            selectedValue={filterValue}
            placeholder="Filtro"
            accessibilityLabel="Filter customers"
            onValueChange={item => setFilterValue(item)}
            defaultValue="NOME"
            dropdownCloseIcon={
              <Icon
                as={MaterialCommunityIcons}
                name="chevron-down-circle-outline"
                size="md"
                color="gray.400"
              />
            }
            dropdownOpenIcon={
              <Icon
                as={MaterialCommunityIcons}
                name="chevron-up-circle-outline"
                size="md"
                color="gray.400"
              />
            }
          >
            {filters.map(filter => (
              <Select.Item
                key={`filter-${filter.id}`}
                value={filter.value}
                label={filter.text}
              />
            ))}
          </Select>
          <Input
            width="70%"
            variant="unstyled"
            placeholder="Pesquisar"
            ml="2"
            color="gray.500"
            keyboardType={filterValue == 'NOME' ? 'default' : 'numeric'}
            keyboardAppearance="default"
            returnKeyType="done"
            value={searchValue}
            onChangeText={text => setSearchValue(text)}
            InputRightElement={
              <Button
                _pressed={{
                  bgColor: 'gray.200',
                }}
                leftIcon={
                  <Icon
                    as={MaterialCommunityIcons}
                    name="delete"
                    size="md"
                    color="gray.500"
                  />
                }
                variant="ghost"
                borderRadius="50"
                onPress={() => clearSearchValue()}
              />
            }
          />
        </HStack>
      </Box>

      <Box w="100%" px="4" mb="6">
        <Text fontWeight="bold" color="gray.500">
          Histórico de Clientes
        </Text>
      </Box>

      <FlatList
        data={customers}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#faba24']}
          />
        }
        ListEmptyComponent={<ListEmptyItem />}
        ListFooterComponent={<Box h="75" />}
        renderItem={({ item }) => (
          <ListItem
            title={`${item.CODIGO} - ${item.NOME}`}
            subtitle={item.CPF_CNPJ}
            address={`${item.RUA}, ${item.NUMERO} - ${item.BAIRRO}`}
            link={() => navigation.navigate('HomeScreen')}
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
  )
}

export default QueryScreen
