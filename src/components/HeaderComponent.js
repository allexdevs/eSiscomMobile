import React from 'react'
import { Box, HStack, Button, Icon, Text } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HeaderComponent = ({ title, link }) => {
  return (
    <Box bgColor="amber.500" py="1" px="2" mb="4" shadow={8}>
      <HStack alignItems="center">
        <Button
          onPress={link}
          leftIcon={
            <Icon
              as={MaterialCommunityIcons}
              name="arrow-left"
              size="md"
              color="white"
            />
          }
          variant="ghost"
          borderRadius={50}
          width={10}
          height={10}
        />
        <Text ml="4" color="white" fontWeight="bold" fontSize="lg">
          {title}
        </Text>
      </HStack>
    </Box>
  )
}

export default HeaderComponent
