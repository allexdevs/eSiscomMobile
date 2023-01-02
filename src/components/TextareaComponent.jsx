import React from 'react';
import { TextArea, Box, Icon, IconButton, HStack } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

function TextareaComponent({ placeholder, onChangeText, value, clearValue }) {
  return (
    <Box width="100%" px="4">
      <HStack alignItems="center" justifyContent="space-between" space={4} my="4">
        <Icon as={MaterialCommunityIcons} name="text" size="md" color="gray.400" />
        <TextArea
          placeholder={placeholder}
          flexGrow={1}
          _focus={{ bgColor: 'gray.200', borderColor: 'amber.500' }}
          onChangeText={onChangeText}
          value={value}
        />
        <IconButton
          borderRadius="full"
          _pressed={{ bgColor: 'gray.200' }}
          onPress={clearValue}
          icon={<Icon as={MaterialCommunityIcons} name="delete" size="md" color="gray.400" />}
        />
      </HStack>
    </Box>
  );
}

TextareaComponent.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  clearValue: PropTypes.func,
};

TextareaComponent.defaultProps = {
  placeholder: '',
  onChangeText: () => {},
  value: '',
  clearValue: () => {},
};

export default TextareaComponent;
