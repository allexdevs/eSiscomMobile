import React from 'react';
import { Box, Select, Icon, HStack, IconButton } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

function SelectComponent({
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
  clearValue,
  marginHorizontal = '4',
}) {
  return (
    <Box
      width={containerWidth}
      h="12"
      marginY={marginVertical}
      borderWidth={borderWidth}
      borderColor="gray.300"
      mx={marginHorizontal}
      borderRadius="30"
    >
      <HStack alignItems="center">
        <IconButton
          icon={<Icon as={MaterialCommunityIcons} name="delete" size="md" color="gray.400" />}
          borderRadius="full"
          ml={1}
          mr="-5"
          _pressed={{
            bgColor: 'gray.200',
          }}
          onPress={clearValue}
          isDisabled={editable}
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
            <Icon as={MaterialCommunityIcons} name={closeIcon} size="md" color="gray.400" mr={3} />
          }
          dropdownOpenIcon={
            <Icon as={MaterialCommunityIcons} name={openIcon} size="md" color="gray.400" mr={3} />
          }
        >
          {items}
        </Select>
      </HStack>
    </Box>
  );
}

SelectComponent.propTypes = {
  containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.arrayOf(PropTypes.element),
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  selectedValue: PropTypes.string,
  onValueChange: PropTypes.func,
  closeIcon: PropTypes.string,
  openIcon: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginVertical: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  editable: PropTypes.bool,
  clearValue: PropTypes.func,
  marginHorizontal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SelectComponent.defaultProps = {
  containerWidth: '',
  items: [],
  placeholder: '',
  defaultValue: '',
  accessibilityLabel: '',
  selectedValue: '',
  onValueChange: () => {},
  closeIcon: '',
  openIcon: '',
  borderWidth: '',
  marginVertical: '',
  editable: false,
  clearValue: () => {},
  marginHorizontal: '',
};

export default SelectComponent;
