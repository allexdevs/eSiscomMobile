import React from 'react';
import { HStack, Select, Icon, Input, Button, Box } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

function SearchBarComponent({
  filterValue,
  changeFilterValue,
  filterPlaceholder,
  filterList,
  searchValue,
  changeSearchValue,
  clearSearchValue,
  submitEditing,
}) {
  return (
    <Box
      justifyContent="center"
      h="12"
      mb="6"
      borderWidth={1}
      borderColor="gray.300"
      mx="4"
      borderRadius="30"
    >
      <HStack alignItems="center">
        <Select
          width="90"
          textAlign="center"
          color="gray.500"
          variant="unstyled"
          selectedValue={filterValue}
          placeholder={filterPlaceholder}
          accessibilityLabel="Filter customers"
          onValueChange={changeFilterValue}
          defaultValue="NOME"
          dropdownCloseIcon={
            <Icon
              as={MaterialCommunityIcons}
              name="chevron-down-circle-outline"
              size="md"
              color="gray.400"
            />
          }
          dropdownOpenIcon={
            <Icon
              as={MaterialCommunityIcons}
              name="chevron-up-circle-outline"
              size="md"
              color="gray.400"
            />
          }
        >
          {filterList.map((filter) => (
            <Select.Item key={`filter-${filter.id}`} value={filter.value} label={filter.text} />
          ))}
        </Select>
        <Input
          width="70%"
          variant="unstyled"
          placeholder="Pesquisar"
          ml="2"
          color="gray.500"
          keyboardType={filterValue === 'CODIGO' ? 'numeric' : 'default'}
          keyboardAppearance="default"
          returnKeyType="done"
          value={searchValue}
          onChangeText={changeSearchValue}
          onSubmitEditing={submitEditing}
          InputRightElement={
            <Button
              _pressed={{
                bgColor: 'gray.200',
              }}
              leftIcon={
                <Icon as={MaterialCommunityIcons} name="delete" size="md" color="gray.500" />
              }
              variant="ghost"
              borderRadius="50"
              onPress={clearSearchValue}
            />
          }
        />
      </HStack>
    </Box>
  );
}

SearchBarComponent.propTypes = {
  filterValue: PropTypes.string,
  changeFilterValue: PropTypes.func,
  filterPlaceholder: PropTypes.string,
  filterList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  searchValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  changeSearchValue: PropTypes.func,
  clearSearchValue: PropTypes.func,
  submitEditing: PropTypes.func,
};

SearchBarComponent.defaultProps = {
  filterValue: '',
  changeFilterValue: () => {},
  filterPlaceholder: '',
  filterList: [],
  searchValue: '',
  changeSearchValue: () => {},
  clearSearchValue: () => {},
  submitEditing: () => {},
};

export default SearchBarComponent;
