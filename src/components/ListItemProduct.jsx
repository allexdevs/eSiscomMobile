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
          <Text ml={2} fontSize={11} color="gray.400">
            Código
            <Text fontWeight="bold" color="gray.500">
              {' '}
              {code}
            </Text>
          </Text>
        </HStack>
        <HStack alignItems="center">
          <Icon as={MaterialCommunityIcons} name="cart" size="sm" color="amber.500" />
          <Text ml={2} fontSize={12} color="gray.500" fontWeight="bold">
            {name}
          </Text>
        </HStack>
        <HStack alignItems="center">
          <HStack alignItems="center" w="50%">
            <Icon as={MaterialCommunityIcons} name="numeric" size="sm" color="amber.500" />
            <Text ml={2} fontSize={11} color="gray.400">
              Unidade:
              <Text fontWeight="bold" color="gray.500">
                {' '}
                {unity}
              </Text>
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Icon as={MaterialCommunityIcons} name="currency-usd" size="sm" color="amber.500" />
            <Text ml={2} fontSize={11} color="gray.400">
              Preço:
              <Text fontWeight="bold" color="gray.500">
                {' '}
                {price}
              </Text>
            </Text>
          </HStack>
        </HStack>
        <HStack alignItems="center">
          <HStack alignItems="center" w="50%">
            <Icon
              as={MaterialCommunityIcons}
              name="package-variant-closed"
              size="sm"
              color="amber.500"
            />
            <Text ml={2} fontSize={11} color="gray.400">
              Estoque:
              <Text fontWeight="bold" color="gray.500">
                {' '}
                {stock}
              </Text>
            </Text>
          </HStack>
          <HStack alignItems="center" justifyContent="flex-start">
            <Icon as={MaterialCommunityIcons} name="format-list-text" size="sm" color="amber.500" />
            <Text ml={2} fontSize={11} color="gray.400">
              Grupo:
              <Text fontWeight="bold" color="gray.500">
                {' '}
                {group}
              </Text>
            </Text>
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
  group: PropTypes.string,
};

ListItemProduct.defaultProps = {
  code: 0,
  name: '',
  unity: '',
  price: '',
  stock: '',
  group: '',
};
