import { VStack, ScrollView, HStack, Box, IconButton, Icon, Center, Text, Button, Stack, Input, Checkbox, Image, Heading, Divider } from 'native-base'
import React from 'react'
import { BackIcon, Discount, JnT, Stars, StoreIcon, Truck } from '../../assets/icons'

const ProductBuySend = ({ navigation }) => {
    return (
        <VStack pt={"30px"} bg={"white"} h={"full"} pb={'100px'}>
            <ScrollView>
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
                        <Text fontSize={'16px'} fontWeight={'medium'}>Pengiriman</Text>
                    </Center>
                </HStack>
                <VStack bg={'gray.50'} w={'full'} p={5} mb={10}>
                    <HStack mb={'5'}>
                        <Heading fontSize={'md'}>Alamat Pengiriman</Heading>
                        <Button variant={'link'} ml={'auto'} fontSize={'12px'} p={0}>Ganti Alamat</Button>
                    </HStack>
                    <Text fontSize={'12px'} color={'gray.400'}>Lucinta Luna (08954678432)</Text>
                    <Text fontSize={'12px'} color={'gray.400'}>Griya Bandung Asri Blok E No 85, Bojongso...</Text>
                </VStack>
                <VStack bg={'gray.50'} w={'full'} p={5} mb={10}>
                    <Heading fontSize={'md'} mb={5}>Daftar Barang</Heading>
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
                            <Checkbox value='1' defaultIsChecked></Checkbox>
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
                                <HStack>
                                    <Heading size="sm" mt='5px' ml="-1" color={'warning.500'}>
                                        Rp 85.000
                                    </Heading>
                                    <Text ml={'auto'} fontSize={'12px'} color={'gray.400'}>x 1</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                    </Center>
                </VStack>
                {/* Pengiriman */}
                <VStack bg={'gray.50'} w={'full'} p={5} pb={'20'} mb={10}>
                    <Heading fontSize={'md'} mb={5}>Pilih Pengiriman</Heading>
                    <Button variant={'outline'} colorScheme={'blueGray'} leftIcon={<Icon as={<JnT/>}/>} rightIcon={<Icon ml={'20'} color={'gray.400'} as={<StoreIcon />} />}>
                        <VStack>
                            <Text>JnT</Text>
                            <Text>Reguler, Express</Text>
                        </VStack>
                        </Button>
                </VStack>

                 {/* Pengiriman */}
                 <VStack bg={'gray.50'} w={'full'} p={5} pb={'20'}>
                    <Heading fontSize={'md'} mb={5}>Rincian Harga</Heading>
                    <Box bg={'white'} p={5} rounded={'xl'}>
                        <HStack space={'20'} mb={'2'}>
                            <Text>Total Harga Produk</Text>
                            <Text ml={'auto'} fontWeight={'semibold'}>Rp 85.000</Text>
                        </HStack>
                        <HStack space={'20'} mb={'2'}>
                            <Text>Voucher/Promo</Text>
                            <Text ml={'auto'} color={'red.500'} fontWeight={'semibold'}>Rp 0</Text>
                        </HStack>
                        <HStack space={'20'} mb={'2'}>
                            <Text>Biaya Pengiriman</Text>
                            <Text ml={'auto'} fontWeight={'semibold'}>Rp 85.000</Text>
                        </HStack>
                        <Divider />
                        <HStack space={'20'} mb={'2'}>
                            <Text>Total Bayar</Text>
                            <Text ml={'auto'} fontWeight={'semibold'}>Rp 85.000</Text>
                        </HStack>
                    </Box>
                </VStack>
            </ScrollView>
            <VStack px={'25px'} position={'absolute'} w={'full'} bottom={0} bg={'white'} borderWidth={'1'} borderTopColor={'gray.200'} roundedTop={'xl'} py={'20px'}>
                <Button variant={'outline'} mb={'15px'} leftIcon={<Icon as={<Discount />} />} rightIcon={<Icon as={<StoreIcon />} />}>Makin hemat dengan diskon</Button>
                <HStack>
                    <Stack>
                        <Text color={'gray.400'}>Total Harga</Text>
                        <Text color={'warning.500'} fontWeight={'semibold'}>Rp 85.000,-</Text>
                    </Stack>
                    <Button bg={'primary.600'} px={'30px'} rounded={'xl'} ml={'auto'} onPress={() => navigation.navigate('ProductBuyVirtual')}>Pilih Metode</Button>
                </HStack>
            </VStack>
        </VStack>
    )
}

export default ProductBuySend