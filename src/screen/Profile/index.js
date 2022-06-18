import React from 'react'
import { Box, Center, HStack, Image, ScrollView, VStack, Text, Icon, Divider } from 'native-base'
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

const Profile = () => {
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
              <Text fontSize={'sm'}>Lucinta Luna</Text>
              <Text fontSize={'sm'}>0895047898773</Text>
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
        <HStack rounded={'lg'} borderWidth={'1'} px={'3'} py={'5'}>
          <Icon as={<GoPay />} />
          <Text ml={'3'}>Rp. 65.000</Text>
          <Divider orientation={'vertical'} mx={'3'}></Divider>
          <Icon as={<Coin />} mr={'3'} />
          <Text>1000 koin</Text>
        </HStack>
        <Text mt={'2'} color={'gray.400'}>Aktivitas Saya</Text>
        <HStack justifyContent={'space-between'} my={'2'} mb={'3'}>
          <HStack>
            <Icon as={<Transaction />} mr={'2'} />
            <Text>Transaksi</Text>
          </HStack>
          <Icon as={<StoreIcon />} />
        </HStack>
        <Divider />
        <HStack justifyContent={'space-between'} my={'2'} mb={'3'}>
          <HStack>
            <Icon as={<LikesProfile />} mr={'2'} />
            <Text>Wishlist</Text>
          </HStack>
          <Icon as={<StoreIcon />} />
        </HStack>
        <Divider />
        <HStack justifyContent={'space-between'} my={'2'} mb={'3'}>
          <HStack>
            <Icon as={<Accounts />} mr={'2'} />
            <Text>Manage My Account</Text>
          </HStack>
          <Icon as={<StoreIcon />} />
        </HStack>
        <Divider />

        <Text mt={'2'} color={'gray.400'} mt={'5'} mb={'2'}>Umum</Text>
        <HStack justifyContent={'space-between'} my={'2'} mb={'3'}>
          <HStack>
            <Icon as={<NotificationOption />} mr={'2'} />
            <Text>Pengaturan Notifikasi</Text>
          </HStack>
          <Icon as={<StoreIcon />} />
        </HStack>
        <Divider />
        <HStack justifyContent={'space-between'} my={'2'} mb={'3'}>
          <HStack>
            <Icon as={<Password />} mr={'2'} />
            <Text>Ubah Password</Text>
          </HStack>
          <Icon as={<StoreIcon />} />
        </HStack>
        <Divider />
        <HStack justifyContent={'space-between'} my={'2'} mb={'3'}>
          <HStack>
            <Icon as={<Language />} mr={'2'} />
            <Text>Pilihan Bahasa</Text>
          </HStack>
          <Icon as={<StoreIcon />} />
        </HStack>
        <HStack justifyContent={'space-between'} my={'2'} mb={'3'}>
          <HStack>
            <Icon as={<Kebijakan />} mr={'2'} />
            <Text>Kebijakan</Text>
          </HStack>
          <Icon as={<StoreIcon />} />
        </HStack>
        <Divider />
        <HStack justifyContent={'space-between'} my={'2'} mb={'3'}>
          <HStack>
            <Icon as={<Logout />} mr={'2'} />
            <Text>Logout</Text>
          </HStack>
          <Icon as={<StoreIcon />} />
        </HStack>
        <Divider />
      </ScrollView>
    </VStack>
  )
}

export default Profile