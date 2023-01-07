import React from 'react';
import {
  NativeBaseProvider,
  IconButton,
  Box,
  Icon,
  Text,
  Button,
  HStack,
  VStack,
  Divider,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

function ListItem({ title, subtitle, address, link, deleteItem }) {
  return (
    <NativeBaseProvider>
      <Box
        w="90%"
        minH="18"
        py={2}
        mx="4"
        borderWidth={1}
        borderColor="gray.300"
        mb="3"
        borderRadius="md"
        justifyContent="center"
        shadow={2}
        bgColor="white"
      >
        <HStack alignItems="center" px="4">
          <Icon as={MaterialCommunityIcons} name="account-circle" size="lg" color="amber.500" />
          <VStack ml="4" justifyContent="center">
            <Text color="gray.600">{title}</Text>
            <Text color="gray.500" fontSize={12}>
              {subtitle}
            </Text>
            <Text color="gray.500" fontSize={10}>
              {address}
            </Text>
          </VStack>
          <IconButton
            icon={
              <Icon as={MaterialCommunityIcons} name="account-edit" size="lg" color="amber.500" />
            }
            ml="auto"
            borderRadius="full"
            variant="ghost"
            _pressed={{
              bgColor: 'gray.300',
            }}
            onPress={link}
          />
        </HStack>
        <Divider my={4} />
        <HStack alignItems="center" justifyContent="flex-end" pr={2}>
          <Button
            onPress={deleteItem}
            bgColor="red.500"
            _pressed={{ bgColor: 'red.600' }}
            size="xs"
            _text={{ fontSize: 12 }}
            rightIcon={<Icon as={MaterialCommunityIcons} name="delete" size="md" color="white" />}
          >
            Excluir
          </Button>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

ListItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  address: PropTypes.string,
  link: PropTypes.func,
  deleteItem: PropTypes.func,
};

ListItem.defaultProps = {
  title: '',
  subtitle: '',
  address: '',
  link: () => {},
  deleteItem: () => {},
};

export default ListItem;
