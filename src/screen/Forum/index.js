import { Box, Heading, HStack, Icon, Input, Text, VStack, ScrollView, Button } from 'native-base'
import React from 'react'
import { AddForum, ChatForum, Search, Transaction } from '../../assets/icons'

const FirstRoute = () => <Center flex={1} my="4">
  This is Tab 1
</Center>;

const SecondRoute = () => <Center flex={1} my="4">
  This is Tab 2
</Center>;

const ThirdRoute = () => <Center flex={1} my="4">
  This is Tab 3
</Center>;


const Forum = () => {
  return (
    <VStack px={'25px'} pt={'30px'} h={'100%'} bg={'white'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HStack alignItems={'center'} justifyContent={'space-between'} mb={'20px'}>
          <Heading fontSize={'20px'} fontWeight={'bold'} color={'blue.400'}>Babaju.</Heading>
          <Box display={"flex"} flexDirection={'row'}>
            <Icon as={<AddForum />} mr={'10px'} />
            <Icon as={<ChatForum />} />
          </Box>
        </HStack>
        <Input placeholder='Cari tentang project, dan lainnya' InputLeftElement={<Icon as={<Search />} />} />
        <HStack mb={'6'} mt={'5'} justifyContent={'space-between'}>
          <Button px={'10'} rounded={'xl'} colorScheme={'blue'} InputLeftElement={<Icon as={<Transaction />}/>}>
            Posts
          </Button>
          <Button px={'10'} rounded={'xl'} colorScheme={'blue'} InputLeftElement={<Icon as={<Transaction />}/>}>
            News
          </Button>
          <Button px={'10'} rounded={'xl'} colorScheme={'blue'} InputLeftElement={<Icon as={<Transaction />}/>}>
            Tips
          </Button>
        </HStack>
        <VStack borderWidth={1} borderColor={'gray.300'} rounded={'xl'} mt={'2'} p={'3'}>
          <HStack mt={'2'}>
            <Text mb={'2'}>Tentang Campaign</Text>
          </HStack>
          <Text color={'gray.400'} mb={'2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna facilisi sed blandit bibendum dictum magna ut suscipit. Vitae habitasse enim, aliquam dictumst nec</Text>
          <Text color={'gray.400'} ml={'auto'} mb={'2'}>2 Days Ago</Text>
        </VStack>
        <VStack borderWidth={1} borderColor={'gray.300'} rounded={'xl'} mt={'2'} p={'3'}>
          <HStack mt={'2'}>
            <Text mb={'2'}>Tentang Campaign</Text>
          </HStack>
          <Text color={'gray.400'} mb={'2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna facilisi sed blandit bibendum dictum magna ut suscipit. Vitae habitasse enim, aliquam dictumst nec</Text>
          <Text color={'gray.400'} ml={'auto'} mb={'2'}>2 Days Ago</Text>
        </VStack>
        <VStack borderWidth={1} borderColor={'gray.300'} rounded={'xl'} mt={'2'} p={'3'}>
          <HStack mt={'2'}>
            <Text mb={'2'}>Tentang Campaign</Text>
          </HStack>
          <Text color={'gray.400'} mb={'2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna facilisi sed blandit bibendum dictum magna ut suscipit. Vitae habitasse enim, aliquam dictumst nec</Text>
          <Text color={'gray.400'} ml={'auto'} mb={'2'}>2 Days Ago</Text>
        </VStack>
        <VStack borderWidth={1} borderColor={'gray.300'} rounded={'xl'} mt={'2'} p={'3'} mb={'5'}>
          <HStack mt={'2'}>
            <Text mb={'2'}>Tentang Campaign</Text>
          </HStack>
          <Text color={'gray.400'} mb={'2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna facilisi sed blandit bibendum dictum magna ut suscipit. Vitae habitasse enim, aliquam dictumst nec</Text>
          <Text color={'gray.400'} ml={'auto'} mb={'2'}>2 Days Ago</Text>
        </VStack>
      </ScrollView>
    </VStack>
  )
}

export default Forum