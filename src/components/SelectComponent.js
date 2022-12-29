import React from 'react'
import { Box, Select, Icon, HStack, IconButton } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const SelectComponent = ({
  containerWidth,
  items,
  placeholder,
  defaultValue,
  accessibilityLabel,
  selectedValue,
  onValueChange,
  closeIcon,
  openIcon,
  borderWidth,
  marginVertical,
  editable = false,
  clearValue
}) => {
  return (
    <Box
      width={containerWidth}
      h="12"
      marginY={marginVertical}
      borderWidth={borderWidth}
      borderColor="gray.300"
      mx="4"
      borderRadius="30"
    >
      <HStack alignItems='center' >
        <IconButton
          icon={
            <Icon
              as={MaterialCommunityIcons}
              name="delete"
              size="md"
              color="gray.400"
            />
          }
          borderRadius='full'
          ml={1}
          mr='-5'
          _pressed={{
            bgColor: 'gray.200'
          }}
          onPress={clearValue}
        />
        <Select
          flexGrow={1}
          placeholder={placeholder}
          defaultValue={defaultValue}
          accessibilityLabel={accessibilityLabel}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          color="gray.500"
          textAlign="center"
          variant="unstyled"
          isDisabled={editable}
          dropdownCloseIcon={
            <Icon
              as={MaterialCommunityIcons}
              name={closeIcon}
              size="md"
              color="gray.400"
              mr={3}
            />
          }
          dropdownOpenIcon={
            <Icon
              as={MaterialCommunityIcons}
              name={openIcon}
              size="md"
              color="gray.400"
              mr={3}
            />
          }
        >
          {items}
        </Select>
      </HStack>
    </Box>
  )
}

export default SelectComponent
