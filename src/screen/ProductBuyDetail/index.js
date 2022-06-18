import { VStack, ScrollView, HStack, Box, IconButton, Icon, Center, Text, Button, Stack, Input, Checkbox, Image, Heading } from 'native-base'
import React from 'react'
import { BackIcon, Discount, Stars, StoreIcon } from '../../assets/icons'

const ProductBuyDetail = ({navigation}) => {
    return (
        <VStack pt={"30px"} bg={"white"} h={"full"}>
            {/* bagian header authentication */}
            <HStack mb={"25px"} px={"25px"}>
                <Box alignItems="center">
                    <IconButton icon={<Icon as={<BackIcon />} />}
                        borderRadius="full"
                        bg={"cyan.200:alpha.60"}
                        mr={"auto"}
                        onPress={() => navigation.goBack()}
                    />
                </Box>
                <Center ml={'85px'}>
                    <Text fontSize={'16px'} fontWeight={'medium'}>Keranjang</Text>
                </Center>
            </HStack>
            <VStack bg={'gray.50'} w={'full'} p={5}>
                <Center bg={'white'} p={'3'} rounded={'lg'}>
                    <HStack borderBottomColor={'gray.100'} borderBottomWidth={1} space={10}>
                        <VStack borderRightColor={'gray.200'} borderRightWidth={1} pr={'40px'} space={2} mb={'10px'}>
                            <Text>Bandung Fashion</Text>
                            <Text>Official Store</Text>
                        </VStack>
                        <VStack pl={'10px'} space={2}>
                            <Text fontWeight={'semibold'} fontSize={'10px'} color={'gray.400'}>bandung, Jawa Barat</Text>
                            <HStack>
                                <Icon as={<Stars />} />
                                <Text fontWeight={'semibold'}>4.2</Text>
                            </HStack>
                        </VStack>
                    </HStack>
                    <HStack space={5} mt={'15px'}>
                        <Checkbox value='1'></Checkbox>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774' }}
                            alt="images"
                            size={100}
                            resizeMode="contain"
                            borderRadius={10}
                            mr={2}
                        />
                        <VStack justifyContent={'center'}>
                            <Text fontWeight={'semibold'}>Sweater Polos Wanita</Text>
                            <Text fontSize={'12px'} color={'gray.300'}>L, Coklat Muda</Text>
                            <Heading size="sm" mt='5px' ml="-1" color={'warning.500'}>
                                Rp 85.000
                            </Heading>
                        </VStack>
                    </HStack>
                    <Input bg={'gray.100'} borderWidth={0} my={'15px'} placeholder='Masukkan catatan anda' />
                    <HStack>
                        <Button variant={'link'}>Masuk Wishlist</Button>
                        <Box flexDirection={'row'} alignItems={'center'} ml={'100px'}>
                            <Button variant={'unstyled'}>-</Button>
                            <Input w={'50px'} h={'30px'} py={0} px={2} fontSize={'14px'} textAlign={'center'}></Input>
                            <Button variant={'unstyled'}>+</Button>
                        </Box>
                    </HStack>
                </Center>
            </VStack>
            <VStack px={'25px'} position={'absolute'} w={'full'} bottom={0} bg={'white'} borderWidth={'1'} borderTopColor={'gray.200'} roundedTop={'xl'} py={'20px'}>
                <Button variant={'outline'} mb={'15px'} leftIcon={<Icon as={<Discount />} />} rightIcon={<Icon as={<StoreIcon />} />}>Makin hemat dengan diskon</Button>
                <HStack>
                    <Stack>
                        <Text color={'gray.400'}>Total Harga</Text>
                        <Text color={'warning.500'} fontWeight={'semibold'}>Rp 85.000,-</Text>
                    </Stack>
                    <Button bg={'primary.600'} px={'30px'} rounded={'xl'} ml={'auto'} onPress={() => navigation.navigate('ProductBuySend')}>Beli (1)</Button>
                </HStack>
            </VStack>
        </VStack>
    )
}

export default ProductBuyDetail