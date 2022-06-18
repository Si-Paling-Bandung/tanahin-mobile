import {
    AspectRatio,
    Box,
    Button,
    Center,
    Heading,
    HStack,
    Icon,
    IconButton,
    Image,
    ScrollView,
    Stack,
    Text,
    VStack
} from 'native-base'
import React, { useState } from 'react'
import { BackIcon, ColorPalette, Description, LikesButton, Shirt, StarReview, StoreIcon, Timer } from '../../assets/icons'

const Ukuran = [
    {
        id: 1,
        detail: 'S',
    },
    {
        id: 2,
        detail: 'M',
    },
    {
        id: 3,
        detail: 'L',
    },
    {
        id: 4,
        detail: 'XL',
    },
    {
        id: 5,
        detail: 'XXL',
    }
]

const Color = [
    {
        id: 1,
        color: '#E30030',
    },
    {
        id: 2,
        color: '#D36F23',
    },
    {
        id: 3,
        color: '#E294A5',
    },
    {
        id: 4,
        color: '#00E340',
    },
    {
        id: 5,
        color: '#4E8CD7',
    }
]

const RentsDetail = ({ navigation }) => {
    const [checked, setChecked] = useState('')
    const [checked2, setChecked2] = useState('')
    return (
        <VStack h={'full'} bg={'white'}>
            <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
                <HStack>
                    <Box alignItems="center" mb={"25px"} position={"absolute"} zIndex={1} top="5" left="5">
                        <IconButton icon={<Icon as={<BackIcon />} />}
                            borderRadius="full"
                            bg={"cyan.200:alpha.60"}
                            mr={"auto"}
                            onPress={() => navigation.goBack()}
                        />
                    </Box>
                    <Box alignItems="center" mb={"25px"} position={"absolute"} zIndex={1} top="5" right="5">
                        <IconButton icon={<Icon as={<LikesButton />} />}
                            borderRadius="full"
                            bg={"cyan.200:alpha.60"}
                            mr={"auto"}
                            // onPress={() => navigataion.goBack()}
                        />
                    </Box>
                </HStack>
                <VStack bg={"white"} position='relative' h={'45%'}>
                    <AspectRatio w={'full'} ratio={9 / 9}>
                        <Image
                            source={{ uri: 'https://i.pinimg.com/736x/a7/93/d0/a793d0d1e375894e391d3b0a9345ccf6--halloween-cosplay-cosplay-costumes.jpg' }}
                            alt="foto"
                        >
                        </Image>
                    </AspectRatio>
                    <VStack flexDirection={'row'} justifyContent={'center'} alignItems="center" position={"absolute"} borderRadius={10} w={'110px'} h={'35px'} justifyContent={'center'} bg={"warning.500"} color={"white"} bottom={'5'} left={'5'}>
                        <Icon as={<Timer />} />
                        <Text color={"white"} ml={2}>03:00:00</Text>
                    </VStack >
                </VStack>
                {/* bagian deskripsi dan review */}
                <VStack bg={'white'} h={'full'} w="full" roundedTop="3xl" pt={"5"}>
                    <HStack alignItems={'center'} px={'25px'} mb={3}>
                        <VStack>
                            <Heading fontSize={'18px'} mb={2}>
                                Sweater Polos Wanita
                            </Heading>
                            <HStack alignItems={'center'} space={3}>
                                <Heading color={"warning.500"} fontWeight={"semibold"}>Rp 85.000</Heading>
                                <Text fontSize="sm"
                                    fontWeight="500"
                                    style={{
                                        textDecorationLine: 'line-through',
                                        textDecorationStyle: 'solid'
                                    }}
                                    ml="-0.5"
                                    color={"muted.400"}
                                    mt="-1">
                                    Rp 150.000
                                </Text>
                            </HStack>
                        </VStack>
                        <Center ml={'auto'} w={8} h={8} rounded={'md'} bg={"warning.200"}>
                            <Text color={'warning.500'} fontSize={"12px"}>65%</Text>
                        </Center>
                    </HStack>

                    {/* bagian detail */}
                    <VStack px={'25px'} h={'full'}>
                        <HStack alignItems={'center'}>
                            <Icon as={<Description />} mr={'3px'} />
                            <Heading fontSize={"14"} fontWeight={'medium'}>Deskripsi Produk</Heading>
                        </HStack>
                        <Text fontSize={"12px"} fontFamily={'body'} pl={'25px'} mb={'10px'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna facilisi sed blandit bibendum dictum magna ut suscipit. Vitae habitasse enim, aliquam dictumst nec</Text>

                        <HStack alignItems={'center'}>
                            <Icon as={<Shirt />} mr={'3px'} />
                            <Heading fontSize={"14"} fontWeight={'medium'}>Pilih Ukuran Produk</Heading>
                        </HStack>
                        <Box mt={'6px'} mb={'15px'} ml={'25px'}>
                            <Stack direction='row' space={3} alignItems="flex-start">
                                {Ukuran.map(data => {
                                    return (
                                        <Button w={'30px'} h={'30px'} p="0" bg={'blue.200'} key={data.id} variant="unstyled" borderColor={checked === data.detail ? 'blue.400' : 'gray.200'} borderWidth={2} onPress={() => setChecked(data.detail)}>{data.detail}</Button>
                                    )
                                })}
                            </Stack>
                        </Box>

                        <HStack alignItems={'center'}>
                            <Icon as={<ColorPalette />} mr={'3px'} />
                            <Heading fontSize={"14"} fontWeight={'medium'}>Pilih Warna Produk</Heading>
                        </HStack>
                        <Box mt={'6px'} mb={'10px'} ml={'25px'}>
                            <Stack direction='row' space={3} alignItems="flex-start">
                                {Color.map(data => {
                                    return (
                                        <Button w={'30px'} h={'30px'} key={data.id} p="0" variant="unstyled" style={{ backgroundColor: data.color }} borderColor={checked2 === data.color ? 'blue.400' : 'gray.200'} borderWidth={2} onPress={() => setChecked2(data.color)}></Button>
                                    )
                                })}
                            </Stack>
                        </Box>

                        <HStack borderBottomColor={'gray.200'} borderTopColor={'gray.200'} borderBottomWidth={'1'} borderTopWidth={'1'} py={2}>
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
                                    <Heading fontSize={'14px'}>Bandung Fashion</Heading>
                                    <Text>Official Store</Text>
                                </VStack>
                            </Center>
                            <Center ml={'auto'}>
                                <Icon as={<StoreIcon />}></Icon>
                            </Center>
                        </HStack>
                        <Text mt={'4'} mb={'10'}>Review Produk (87)</Text>
                    </VStack>
                </VStack>
            </ScrollView>
            <HStack position={'absolute'} zIndex={1} bottom={2} space={3} w={'full'} px={'25px'}>
                <Button w={'100%'} onPress={() => navigation.navigate('BidDetail')}>Sewa Sekarang</Button>
            </HStack>
        </VStack>
    )
}

export default RentsDetail