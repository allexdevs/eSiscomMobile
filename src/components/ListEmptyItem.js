import React from 'react'
import { NativeBaseProvider, HStack, VStack, Box, Skeleton } from 'native-base'

const ListEmptyItem = () => {
  return (
    <>
      <Box px="4">
        <HStack alignItems="center">
          <Skeleton
            h="10"
            w="10"
            rounded="20"
            startColor="gray.200"
            endColor="gray.300"
          />
          <VStack w="70%" ml="3">
            <Skeleton
              rounded="15"
              w="100%"
              h="4"
              startColor="gray.200"
              endColor="gray.300"
            />
            <Skeleton
              mt="2"
              rounded="15"
              w="80%"
              h="2"
              startColor="gray.200"
              endColor="gray.300"
            />
          </VStack>
          <Skeleton
            w="5"
            h="5"
            ml="4"
            rounded="10"
            startColor="gray.200"
            endColor="gray.300"
          />
        </HStack>
      </Box>
      <Box px="4" mt="6">
        <HStack alignItems="center">
          <Skeleton
            h="10"
            w="10"
            rounded="20"
            startColor="gray.200"
            endColor="gray.300"
          />
          <VStack w="70%" ml="3">
            <Skeleton
              rounded="15"
              w="100%"
              h="4"
              startColor="gray.200"
              endColor="gray.300"
            />
            <Skeleton
              mt="2"
              rounded="15"
              w="80%"
              h="2"
              startColor="gray.200"
              endColor="gray.300"
            />
          </VStack>
          <Skeleton
            w="5"
            h="5"
            ml="4"
            rounded="10"
            startColor="gray.200"
            endColor="gray.300"
          />
        </HStack>
      </Box>
      <Box px="4" mt="6">
        <HStack alignItems="center">
          <Skeleton
            h="10"
            w="10"
            rounded="20"
            startColor="gray.200"
            endColor="gray.300"
          />
          <VStack w="70%" ml="3">
            <Skeleton
              rounded="15"
              w="100%"
              h="4"
              startColor="gray.200"
              endColor="gray.300"
            />
            <Skeleton
              mt="2"
              rounded="15"
              w="80%"
              h="2"
              startColor="gray.200"
              endColor="gray.300"
            />
          </VStack>
          <Skeleton
            w="5"
            h="5"
            ml="4"
            rounded="10"
            startColor="gray.200"
            endColor="gray.300"
          />
        </HStack>
      </Box>
    </>
  )
}

export default ListEmptyItem
