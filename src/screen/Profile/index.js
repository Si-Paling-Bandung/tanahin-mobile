import React, { useEffect, useState } from 'react'
import { Box, Center, HStack, Image, ScrollView, VStack, Button, Text, Icon, Divider } from 'native-base'
import {
  Coin,
  EditProfile,
  GoPay,
  Like,
  Notification,
  Accounts,
  Cash,
  Kebijakan,
  Language,
  likesProfile,
  NotificationOption,
  Password,
  Transaction,
  StoreIcon,
  LikesProfile,
  Logout,
} from '../../assets/icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '../../utils/AsyncStorage';

const Profile = ({navigation}) => {
  const [data, setData] = useState([])

  const logout = () => {
    AsyncStorage.clear().then(res => {
      console.log(res)
        navigation.replace('SignIn')
    })
  }

  useEffect(() => {
    getData('users').then(res => {
      setData(res)
    })
  })
  return (
    <VStack h={'full'} bg={'white'} px={"25px"}>
      <ScrollView>
        <HStack w="64" w="full" py={3} mt="20px">
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772' }}
            alt="images"
            size={50}
            resizeMode="contain"
            borderRadius={100}
          />
          <Center py={1} ml={3}>
            <Box>
              <Text fontSize={'sm'}>{data?.data_user?.name}</Text>
              <Text fontSize={'sm'}>{data?.data_user?.phone_number}</Text>
              <Text fontSize={'sm'}>Bandung, Jawa Barat</Text>
            </Box>
          </Center>
          <HStack ml={"auto"}>
            <Center>
              <Icon as={EditProfile} />
            </Center>
          </HStack>
        </HStack>
        <Divider mb={'5'} />
        <Text mt={'2'} color={'gray.400'}>My Activity</Text>
        <HStack justifyContent={'space-between'} my={'2'} mb={'3'}>
          <HStack>
            <Icon as={<Transaction />} mr={'2'} />
            <Text>Transaction</Text>
          </HStack>
          <Icon as={<StoreIcon />} />
        </HStack>
        <Divider />
        <Button variant={'unstyled'} onPress={() => navigation.navigate('Profiling')}>
        <HStack justifyContent={'space-between'} w={'360px'}>
          <HStack>
            <Icon as={<Accounts />} mr={'2'} />
            <Text>Profilling</Text>
          </HStack>
          <Icon as={<StoreIcon />} />
        </HStack>
        </Button>
        <Divider />

        <Text mt={'2'} color={'gray.400'} mt={'5'} mb={'2'}>Umum</Text>
        <HStack justifyContent={'space-between'} my={'2'} mb={'3'}>
          <HStack>
            <Icon as={<NotificationOption />} mr={'2'} />
            <Text>Notification Setting</Text>
          </HStack>
          <Icon as={<StoreIcon />} />
        </HStack>
        <Divider />
        <HStack justifyContent={'space-between'} my={'2'} mb={'3'}>
          <HStack>
            <Icon as={<Password />} mr={'2'} />
            <Text>Change my password</Text>
          </HStack>
          <Icon as={<StoreIcon />} />
        </HStack>
        <Divider />
        <HStack justifyContent={'space-between'} my={'2'} mb={'3'}>
          <HStack>
            <Icon as={<Language />} mr={'2'} />
            <Text>Change language</Text>
          </HStack>
          <Icon as={<StoreIcon />} />
        </HStack>
        <Divider />
        <Button variant={'unstyled'} onPress={logout}>
          <HStack justifyContent={'space-between'} w={'360px'}>
            <HStack>
              <Icon as={<Logout />} mr={'2'} />
              <Text>Logout</Text>
            </HStack>
            <Icon as={<StoreIcon />} />
          </HStack>
        </Button>
        <Divider />
      </ScrollView>
    </VStack>
  )
}

export default Profile