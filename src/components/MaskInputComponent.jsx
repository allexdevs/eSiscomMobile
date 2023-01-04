/* eslint-disable no-nested-ternary */
import React from 'react';
import { Box, HStack, Icon, IconButton } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaskInput, { Masks } from 'react-native-mask-input';
import PropTypes from 'prop-types';

function MaskInputComponent({
  leftIcon,
  rightIcon,
  containerWidth,
  paddingHorizontal,
  value,
  onChangeText,
  mask,
  clearValue,
  type,
  onFocus,
  onBlur,
}) {
  const masks = [
    { id: 1, value: Masks.BRL_CNPJ, label: 'CNPJ' },
    { id: 2, value: Masks.BRL_CPF, label: 'CPF' },
    { id: 3, value: Masks.BRL_CURRENCY, label: 'CURRENCY' },
    { id: 4, value: Masks.BRL_PHONE, label: 'PHONE' },
    { id: 5, value: Masks.ZIP_CODE, label: 'ZIP_CODE' },
    { id: 6, value: Masks.BRL_CPF_CNPJ, label: 'CPF_CNPJ' },
  ];

  return (
    <Box width={containerWidth} px={paddingHorizontal} my="2">
      <HStack
        alignItems="center"
        borderWidth={1}
        borderColor="gray.300"
        borderRadius="full"
        justifyContent="flex-start"
      >
        <Icon ml="3" as={MaterialCommunityIcons} name={leftIcon} size="md" color="gray.400" />
        <MaskInput
          style={{ flexGrow: 1, marginLeft: 8, color: '#52525b' }}
          value={value}
          onChangeText={onChangeText}
          mask={
            mask === 'CNPJ'
              ? masks[0].value
              : mask === 'CPF'
              ? masks[1].value
              : mask === 'CURRENCY'
              ? masks[2].value
              : mask === 'PHONE'
              ? masks[3].value
              : mask === 'ZIP_CODE'
              ? masks[4].value
              : mask === 'CPF_CNPJ'
              ? masks[5].value
              : ''
          }
          keyboardType={type}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <IconButton
          mr="1"
          borderRadius="full"
          _pressed={{ bgColor: 'gray.200' }}
          onPress={clearValue}
          icon={<Icon as={MaterialCommunityIcons} name={rightIcon} size="md" color="gray.400" />}
        />
      </HStack>
    </Box>
  );
}

MaskInputComponent.propTypes = {
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingHorizontal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  mask: PropTypes.string,
  clearValue: PropTypes.func,
  type: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

MaskInputComponent.defaultProps = {
  leftIcon: '',
  rightIcon: '',
  containerWidth: 0,
  paddingHorizontal: 0,
  value: '',
  onChangeText: () => {},
  mask: '',
  clearValue: () => {},
  type: '',
  onFocus: () => {},
  onBlur: () => {},
};

export default MaskInputComponent;
