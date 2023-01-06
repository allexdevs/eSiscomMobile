/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { NativeBaseProvider, Box, Icon, Text, VStack, HStack, Pressable } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

export default function BottomBarComponent({ tabList }) {
  return (
    <NativeBaseProvider>
      <Box shadow={4} position="absolute" bottom={0} width="100%" minHeight={10} bgColor="white">
        <HStack justifyContent="space-between" alignItems="center" px={8}>
          {tabList.map((tab) => (
            <VStack key={tab.id}>
              <Pressable alignItems="center" py={2}>
                <Icon as={MaterialCommunityIcons} name={tab.icon} size="md" color="amber.500" />
                <Text fontSize={10}>{tab.label}</Text>
              </Pressable>
            </VStack>
          ))}
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

BottomBarComponent.propTypes = {
  tabList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
