import React from 'react';
import { Button, Text, Icon, HStack, IconButton, Box, Input } from 'native-base';
import { Modal } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

function SelectComponentWithSearchBar({
  containerWidth,
  label,
  leftIcon,
  rightIcon,
  clearValue,
  visible,
  show,
  hide,
  title,
  placeholder,
  items,
  searchValue,
  onSearch,
  clearSearchValue,
  emptyLabel,
  editable,
}) {
  return (
    <Button
      variant="ghost"
      width={containerWidth}
      borderWidth={1}
      borderColor="gray.300"
      borderRadius="full"
      py={0.5}
      _pressed={{ bgColor: 'gray.200' }}
      onPress={show}
      disabled={editable}
      my={2}
    >
      <HStack alignItems="center" width="100%">
        <Icon as={MaterialCommunityIcons} name={leftIcon} size="md" color="gray.400" ml={2} />
        <Text color="gray.400" textAlign="center" fontSize={12} ml={3} flexGrow={1}>
          {label === '' ? emptyLabel : label}
        </Text>
        <IconButton
          icon={<Icon as={MaterialCommunityIcons} name={rightIcon} size="md" color="gray.400" />}
          onPress={clearValue}
          borderRadius="full"
          _pressed={{ bgColor: 'gray.200' }}
          ml="auto"
        />
      </HStack>

      <Modal visible={visible} transparent animationType="fade">
        <Box height="100%" width="100%" bgColor="rgba(0, 0, 0, 0.35)">
          <Box
            height="70%"
            bgColor="white"
            width="100%"
            position="absolute"
            bottom="0"
            borderTopRadius="2xl"
            px={4}
          >
            <Box width="100%" bgColor="transparent" py={4} alignItems="center">
              <Box height={2} width={60} bgColor="gray.400" borderRadius="full" />
            </Box>
            <Text fontWeight="bold" color="gray.600" mb={4}>
              Selecionar {title}
            </Text>

            <Input
              mb={4}
              placeholder={placeholder}
              variant="outline"
              borderRadius="full"
              _focus={{ borderColor: 'amber.500', bgColor: 'gray.200' }}
              rightElement={
                <IconButton
                  icon={
                    <Icon as={MaterialCommunityIcons} name="delete" size="md" color="gray.400" />
                  }
                  borderRadius="full"
                  _pressed={{ bgColor: 'gray.200' }}
                  mr={1}
                  onPress={clearSearchValue}
                />
              }
              value={searchValue}
              onChangeText={onSearch}
            />
            {items}
            <IconButton
              icon={<Icon as={MaterialCommunityIcons} name="close" size="md" color="white" />}
              borderRadius="full"
              bgColor="red.500"
              onPress={hide}
              width={10}
              height={10}
              _pressed={{ bgColor: 'red.600' }}
              position="absolute"
              top={-15}
              right={0}
            />
          </Box>
        </Box>
      </Modal>
    </Button>
  );
}

SelectComponentWithSearchBar.propTypes = {
  containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  clearValue: PropTypes.func,
  visible: PropTypes.bool,
  show: PropTypes.func,
  hide: PropTypes.func,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  items: PropTypes.element.isRequired,
  searchValue: PropTypes.string,
  onSearch: PropTypes.func,
  clearSearchValue: PropTypes.func,
  emptyLabel: PropTypes.string,
  editable: PropTypes.bool,
};

SelectComponentWithSearchBar.defaultProps = {
  containerWidth: 0,
  label: '',
  leftIcon: '',
  rightIcon: '',
  clearValue: () => {},
  visible: false,
  show: () => {},
  hide: () => {},
  title: '',
  placeholder: '',
  searchValue: '',
  onSearch: () => {},
  clearSearchValue: () => {},
  emptyLabel: '',
  editable: false,
};

export default SelectComponentWithSearchBar;
