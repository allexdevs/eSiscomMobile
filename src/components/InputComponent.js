import React from 'react'
import { Box, Input, Icon, IconButton } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const InputComponent = ({
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
}) => {
  return (
    <Box w="100%" px="4" my="2">
      <Input
        _focus={{
          borderColor: 'amber.500',
          bgColor: 'gray.200',
        }}
        InputLeftElement={
          <Icon
            as={MaterialCommunityIcons}
            name={leftIcon}
            size="md"
            color="gray.400"
            ml={3}
          />
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
                <Icon
                  as={MaterialCommunityIcons}
                  name={rightIcon}
                  size="md"
                  color="gray.400"
                />
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
      />
    </Box>
  )
}

export default InputComponent
