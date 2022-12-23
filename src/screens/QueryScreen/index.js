import React, { useState, useEffect } from 'react'
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
import ListEmptyItem from '../../components/ListEmptyItem'
import { filters } from '../../mock/filterCustomers'
import {
  getCustomers,
  getCustomerByName,
  getCustomerById
} from '../../services/customersService'
import ListItem from '../../components/ListItem'

const QueryScreen = ({ navigation }) => {
  const [filterValue, setFilterValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [customers, setCustomers] = useState([])

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
            res.status == 'success' ? setCustomers(res.payload) : setCustomers([])
          })
          .catch(error => console.log(error))
      } else {
        setCustomers([])
        getCustomerById(searchValue)
          .then(res => {
            res.status == 'success' ? setCustomers([res.payload]) : setCustomers([])
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

  return (
    <NativeBaseProvider>
      <Box bgColor="amber.500" py="2" px="2" mb="4" shadow={8}>
        <HStack alignItems="center">
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            leftIcon={
              <Icon
                as={MaterialCommunityIcons}
                name="arrow-left"
                size="md"
                color="white"
              />
            }
            variant="ghost"
            borderRadius={50}
          ></Button>
          <Text ml="4" color="white" fontWeight="bold" fontSize="lg">
            Clientes
          </Text>
        </HStack>
      </Box>

      <Box
        justifyContent="center"
        h="12"
        mb="8"
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
            defaultValue="nome"
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

      <FlatList
        data={customers}
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
      />
    </NativeBaseProvider>
  )
}

export default QueryScreen
