import React from 'react';
import { NativeBaseProvider, Box, Text, HStack, Icon } from 'native-base';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListItemProduct({ code, name, unity, price, stock, group }) {
  return (
    <NativeBaseProvider>
      <Box
        mx={4}
        my={2}
        backgroundColor="white"
        borderWidth={1}
        borderRadius="md"
        borderColor="gray.300"
        px={2}
        py={2}
        shadow={4}
      >
        <HStack alignItems="center">
          <Icon as={MaterialCommunityIcons} name="key" size="sm" color="amber.500" />
          <Text ml={2}>Código {code}</Text>
        </HStack>
        <HStack alignItems="center">
          <Icon as={MaterialCommunityIcons} name="cart" size="sm" color="amber.500" />
          <Text ml={2}>{name}</Text>
        </HStack>
        <HStack alignItems="center">
          <HStack alignItems="center" w="70%">
            <Icon as={MaterialCommunityIcons} name="numeric" size="sm" color="amber.500" />
            <Text ml={2}>Unidade: {unity}</Text>
          </HStack>
          <HStack alignItems="center">
            <Icon as={MaterialCommunityIcons} name="currency-usd" size="sm" color="amber.500" />
            <Text ml={2}>Preço: {price}</Text>
          </HStack>
        </HStack>
        <HStack alignItems="center">
          <HStack alignItems="center" w="70%">
            <Icon
              as={MaterialCommunityIcons}
              name="package-variant-closed"
              size="sm"
              color="amber.500"
            />
            <Text ml={2}>Estoque: {stock}</Text>
          </HStack>
          <HStack alignItems="center" justifyContent="flex-start">
            <Icon as={MaterialCommunityIcons} name="format-list-text" size="sm" color="amber.500" />
            <Text ml={2}>Grupo: {group}</Text>
          </HStack>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

ListItemProduct.propTypes = {
  code: PropTypes.number,
  name: PropTypes.string,
  unity: PropTypes.string,
  price: PropTypes.string,
  stock: PropTypes.string,
  group: PropTypes.number,
};

ListItemProduct.defaultProps = {
  code: 0,
  name: '',
  unity: '',
  price: '',
  stock: '',
  group: 0,
};
