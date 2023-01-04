import React from 'react';
import {
  NativeBaseProvider,
  Stack,
  Image,
  FlatList,
  HStack,
  VStack,
  Icon,
  Box,
  Text,
  Button,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// assets
import logo from '../../assets/logo-light.png';

// mocks
import items from '../../mock/menuList';

function HomeScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <Stack alignItems="center">
        <Image source={logo} size="xl" alt="logo" mb="4" resizeMode="contain" />
        <FlatList
          w="90%"
          data={items}
          ListFooterComponent={<Box height="200" />}
          renderItem={({ item }) => (
            <Box mb="4">
              <HStack space={[5, 0]} alignItems="center" justifyContent="flex-start">
                <Icon
                  as={MaterialCommunityIcons}
                  name={item.leftIcon}
                  size="md"
                  color="amber.500"
                />
                <VStack>
                  <Text fontSize="md" color="gray.600">
                    {item.title}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    {item.subtitle}
                  </Text>
                </VStack>
                <Button
                  ml="auto"
                  variant="ghost"
                  borderRadius="50"
                  width="10"
                  height="10"
                  onPress={() => navigation.navigate(item.route)}
                  leftIcon={
                    <Icon
                      as={MaterialCommunityIcons}
                      name={item.rightIcon}
                      size="md"
                      color="amber.500"
                    />
                  }
                  _pressed={{ bgColor: 'gray.300' }}
                />
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Stack>
    </NativeBaseProvider>
  );
}

export default HomeScreen;
