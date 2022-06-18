import React from 'react'
import { AspectRatio, Box, Button, Center, Heading, HStack, Icon, IconButton, Image, Input, ScrollView, Stack, Text, VStack } from 'native-base'
import { BackIcon } from '../../assets/icons'

const BidDetail = ({ navigation }) => {
    return (
        <VStack px={"25px"} pt={"30px"} bg={"white"} h={"full"}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* bagian header authentication */}
                <Box alignItems="center" mb={"25px"}>
                    <IconButton icon={<Icon as={<BackIcon />} />}
                        borderRadius="full"
                        bg={"cyan.200:alpha.60"}
                        mr={"auto"}
                        onPress={() => navigation.goBack()}
                    />
                </Box>
                <Heading fontSize={'18px'} textAlign={'center'} mb={'15px'}>Sweater Polos Wanita</Heading>
                <AspectRatio w={'full'} ratio={9 / 9}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774' }}
                        alt="foto"
                        borderRadius={'2xl'}
                    >
                    </Image>
                </AspectRatio>
                <Text fontSize={'20px'} my={'15px'} fontWeight={'semibold'} textAlign={'center'} color={'warning.500'}>Rp 85.000</Text>
                <Text color={'gray.400'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna facilisi sed blandit bibendum dictum magna ut suscipit. Vitae habitasse enim, aliquam dictumst nec</Text>
                <HStack alignItems={'center'} justifyContent={'center'}>
                    <Center bg={'warning.500'} p={2} borderRadius={'lg'}>
                        <Text color={'white'} fontWeight={'semibold'} fontSize={'18px'}>00</Text>
                    </Center>
                    <Text mx={'5px'} fontSize={'18px'}>:</Text>
                    <Center bg={'warning.500'} p={2} borderRadius={'lg'}>
                        <Text color={'white'} fontWeight={'semibold'} fontSize={'18px'}>00</Text>
                    </Center>
                    <Text mx={'5px'} fontSize={'18px'}>:</Text>
                    <Center bg={'warning.500'} p={2} borderRadius={'lg'}>
                        <Text color={'white'} fontWeight={'semibold'} fontSize={'18px'}>00</Text>
                    </Center>
                </HStack>
                <VStack>
                    <Text fontSize={'14px'} fontWeight={'semibold'} my={'10px'}>Your Bid</Text>
                    <HStack p={'5px'} bg={'gray.50'} borderRadius={'lg'}>
                            <Input placeholder='Enter your bid' w={'100%'} variant={'unstyled'} fontSize={'14px'}></Input>
                        <Button colorScheme={'blue'} bg={'cyan.700'} ml={'auto'} onPress={() => navigation.navigate('BidSuccess')}>Submit</Button>
                    </HStack>
                </VStack>
                <HStack alignItems={'center'}>
                    <Text fontSize={'14px'} fontWeight={'semibold'} mt={'25px'} mb={'15px'}>Top Bidder</Text>
                    <Button variant={"link"} fontSize={'sm'} ml={'auto'} pt={5}>
                        Lihat semua
                    </Button>
                </HStack>

                <HStack borderBottomColor={'gray.200'} borderBottomWidth={'1'} py={2}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772' }}
                        alt="images"
                        size={50}
                        resizeMode="contain"
                        borderRadius={100}
                        mr={2}
                    />
                    <Center>
                        <VStack space={1}>
                            <Heading fontSize={'14px'}>Rizal Bimantoro </Heading>
                            <Text>Rp 70.000</Text>
                        </VStack>
                    </Center>
                </HStack>
                <HStack borderBottomColor={'gray.200'} borderBottomWidth={'1'} py={2}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772' }}
                        alt="images"
                        size={50}
                        resizeMode="contain"
                        borderRadius={100}
                        mr={2}
                    />
                    <Center>
                        <VStack space={1}>
                            <Heading fontSize={'14px'}>Rizal Bimantoro </Heading>
                            <Text>Rp 70.000</Text>
                        </VStack>
                    </Center>
                </HStack>
                <HStack py={2} mb={'20px'}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772' }}
                        alt="images"
                        size={50}
                        resizeMode="contain"
                        borderRadius={100}
                        mr={2}
                    />
                    <Center>
                        <VStack space={1}>
                            <Heading fontSize={'14px'}>Rizal Bimantoro </Heading>
                            <Text>Rp 70.000</Text>
                        </VStack>
                    </Center>
                </HStack>
            </ScrollView>
        </VStack>
    )
}

export default BidDetail