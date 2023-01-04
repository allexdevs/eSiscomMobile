import React from 'react';
import { Text, Box, HStack, Button } from 'native-base';
import PropTypes from 'prop-types';

function ListItemOfZipCode({ publicPlace, district, zipCode, city, uf, complement, onSelect }) {
  return (
    <Box
      my={2}
      borderWidth={1}
      borderRadius="md"
      px={2}
      py={2}
      borderColor="gray.300"
      shadow={8}
      bgColor="white"
    >
      <HStack>
        <Text fontSize={12} fontWeight="bold" color="gray.500">
          Logradouro:{' '}
        </Text>
        <Text fontSize={12} color="gray.500">
          {publicPlace}
        </Text>
      </HStack>
      <HStack>
        <Text fontSize={12} fontWeight="bold" color="gray.500">
          Bairro:{' '}
        </Text>
        <Text fontSize={12} color="gray.500">
          {district}
        </Text>
      </HStack>

      <HStack>
        <Text fontSize={12} fontWeight="bold" color="gray.500">
          Cidade:{' '}
        </Text>
        <Text fontSize={12} color="gray.500">
          {city}
        </Text>
      </HStack>
      <HStack alignItems="center" justifyContent="space-between">
        <HStack>
          <Text fontSize={12} fontWeight="bold" color="gray.500">
            CEP:{' '}
          </Text>
          <Text fontSize={12} color="gray.500">
            {zipCode}
          </Text>
        </HStack>

        <HStack>
          <Text fontSize={12} fontWeight="bold" color="gray.500">
            UF:{' '}
          </Text>
          <Text fontSize={12} color="gray.500">
            {uf}
          </Text>
        </HStack>
      </HStack>
      <HStack>
        <Text fontSize={12} fontWeight="bold" color="gray.500">
          Complemento:{' '}
        </Text>
        <Text fontSize={12} color="gray.500">
          {complement}
        </Text>
      </HStack>
      <HStack alignItems="center" justifyContent="flex-end" my={2}>
        <Button
          onPress={onSelect}
          _pressed={{ bgColor: 'amber.600' }}
          bgColor="amber.500"
          size="xs"
          _text={{ fontSize: 12, color: 'white' }}
          shadow={4}
        >
          Selecionar CEP
        </Button>
      </HStack>
    </Box>
  );
}

ListItemOfZipCode.propTypes = {
  publicPlace: PropTypes.string,
  district: PropTypes.string,
  zipCode: PropTypes.string,
  city: PropTypes.string,
  uf: PropTypes.string,
  complement: PropTypes.string,
  onSelect: PropTypes.func,
};

ListItemOfZipCode.defaultProps = {
  publicPlace: '',
  district: '',
  zipCode: '',
  city: '',
  uf: '',
  complement: '',
  onSelect: () => {},
};

export default ListItemOfZipCode;
