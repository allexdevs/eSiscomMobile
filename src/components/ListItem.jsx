import React from 'react';
import { NativeBaseProvider, Box, Icon, Text, Button, HStack, VStack } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

function ListItem({ title, subtitle, address, link }) {
  return (
    <NativeBaseProvider>
      <Box
        w="90%"
        minH="16"
        mx="4"
        borderWidth={1}
        borderColor="gray.300"
        mb="3"
        borderRadius={14}
        justifyContent="center"
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
          <Button
            rightIcon={
              <Icon
                as={MaterialCommunityIcons}
                name="chevron-right-circle"
                size="lg"
                color="amber.500"
              />
            }
            ml="auto"
            borderRadius="50"
            variant="ghost"
            _pressed={{
              bgColor: 'gray.300',
            }}
            onPress={link}
          />
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
};

ListItem.defaultProps = {
  title: '',
  subtitle: '',
  address: '',
  link: () => {},
};

export default ListItem;
