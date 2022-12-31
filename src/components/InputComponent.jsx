import React from 'react';
import { Box, Input, Icon, IconButton } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

function InputComponent({
  leftIcon,
  rightIcon,
  placeholder,
  value,
  changeText,
  clearValue,
  isPassword,
  keyboardType,
  keyboardButton,
  passwordIcon,
  togglePassword,
  inputType,
  containerWidth = '100%',
  editable = false,
  paddingHorizontal = '4',
}) {
  return (
    <Box w={containerWidth} px={paddingHorizontal} my="2">
      <Input
        _focus={{
          borderColor: 'amber.500',
          bgColor: 'gray.200',
        }}
        InputLeftElement={
          <Icon as={MaterialCommunityIcons} name={leftIcon} size="md" color="gray.400" ml={3} />
        }
        InputRightElement={
          <>
            {isPassword ? (
              <IconButton
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    name={passwordIcon}
                    size="md"
                    color="gray.400"
                  />
                }
                borderRadius="full"
                mr={1}
                _pressed={{
                  bgColor: 'gray.200',
                }}
                onPress={togglePassword}
              />
            ) : null}
            <IconButton
              icon={
                <Icon as={MaterialCommunityIcons} name={rightIcon} size="md" color="gray.400" />
              }
              borderRadius="full"
              mr={1}
              _pressed={{
                bgColor: 'gray.200',
              }}
              onPress={clearValue}
            />
          </>
        }
        variant="outline"
        rounded="full"
        placeholder={placeholder}
        color="gray.600"
        value={value}
        onChangeText={changeText}
        type={inputType}
        keyboardType={keyboardType}
        returnKeyType={keyboardButton}
        isDisabled={editable}
      />
    </Box>
  );
}

InputComponent.propTypes = {
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  changeText: PropTypes.func,
  clearValue: PropTypes.func,
  isPassword: PropTypes.bool,
  keyboardType: PropTypes.string,
  keyboardButton: PropTypes.string,
  passwordIcon: PropTypes.string,
  togglePassword: PropTypes.func,
  inputType: PropTypes.string,
  containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  editable: PropTypes.bool,
  paddingHorizontal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputComponent.defaultProps = {
  leftIcon: '',
  rightIcon: '',
  placeholder: '',
  value: '',
  changeText: () => {},
  clearValue: () => {},
  isPassword: false,
  keyboardType: '',
  keyboardButton: '',
  passwordIcon: '',
  togglePassword: () => {},
  inputType: '',
  containerWidth: '',
  editable: false,
  paddingHorizontal: '',
};

export default InputComponent;
