import { VStack, ScrollView, HStack, Box, IconButton, Icon, Center, Text, Button, Stack, Input, Checkbox, Image, Heading, Divider, Radio, ArrowUpIcon, ChevronRightIcon } from 'native-base'
import React from 'react'
import { BackIcon, BCA, BNI, BRI, Discount, Mandiri, Stars, StoreIcon } from '../../assets/icons'

const ProductBuyDetail = ({ navigation }) => {
    return (
        <VStack pt={"30px"} bg={"white"} h={"full"}>
            {/* bagian header authentication */}
            <HStack px={"25px"} pb={'40px'}>
                <Box alignItems="center">
                    <IconButton icon={<Icon as={<BackIcon />} />}
                        borderRadius="full"
                        colorScheme={'success'}
                        bg={"#E9FAD8"}
                        mr={"auto"}
                        p={'2'}
                        onPress={() => navigation.goBack()}
                    />
                </Box>
                <Center ml={'85px'}>
                    <Text fontSize={'16px'} fontWeight={'medium'}>Payment</Text>
                </Center>
            </HStack>
            {/* detail */}
            <VStack px={'25px'}>
                <HStack mb={'7px'}>
                    <Stack>
                        <Text fontWeight={'semibold'} fontSize={'14px'}>Living Land Jakarta</Text>
                        <HStack>
                            <Text fontSize={'12px'} mr={'5px'}>Sun, 13 Jun 2022</Text>
                            <Text fontSize={'12px'}>Buy Land 100 m2</Text>
                        </HStack>
                    </Stack>
                    <Text ml={'auto'} color={'#4FAD39'}>Detail</Text>
                </HStack>
                <Divider />
                <HStack justifyContent={'space-between'} my={'7px'}>
                    <Text>Order Number</Text>
                    <Text fontWeight={'semibold'} fontSize={'14px'}>BT00889</Text>
                </HStack>
                <Divider />
                <HStack justifyContent={'space-between'} my={'7px'}>
                    <Text>Total Payment</Text>
                    <Text fontWeight={'semibold'} fontSize={'14px'}>Rp 100.000.000</Text>
                </HStack>
            </VStack>
            {/* akhir detail */}

            {/* transfer */}
            <VStack w={'full'} mt={'5'} px={'25px'} roundedBottom={"10px"}>
                <Heading fontSize={'md'}>Transfer</Heading>
                <Box bg={'white'} rounded={'xl'}>
                    <Button variant={'unstyled'} onPress={() => navigation.navigate('ProductBuyVirtual')}>
                        <HStack py={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <HStack alignItems={'center'}>
                                <Box w={'1/4'}>
                                    <Icon as={<Mandiri />} />
                                </Box>
                                <Text ml={'2'} flex={1}>Bank Mandiri</Text>
                                <ChevronRightIcon color={'#4FAD39'} />
                            </HStack>
                        </HStack>
                    </Button>
                    <Divider color={'gray.400'} />
                    <Button variant={'unstyled'} onPress={() => navigation.navigate('ProductBuyVirtual')}>
                        <HStack py={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <HStack alignItems={'center'}>
                                <Box w={'1/4'}>
                                    <Icon as={<BCA />} />
                                </Box>
                                <Text ml={'2'} flex={1}>Bank BCA</Text>
                                <ChevronRightIcon color={'#4FAD39'} />
                            </HStack>
                        </HStack>
                    </Button>
                    <Divider color={'gray.400'} />
                    <Button variant={'unstyled'} onPress={() => navigation.navigate('ProductBuyVirtual')}>
                        <HStack py={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <HStack alignItems={'center'}>
                                <Box w={'1/4'}>
                                    <Icon as={<BNI />} />
                                </Box>
                                <Text ml={'2'} flex={1}>Bank BNI</Text>
                                <ChevronRightIcon color={'#4FAD39'} />
                            </HStack>
                        </HStack>
                    </Button>
                    <Divider color={'gray.400'} />
                    <Button variant={'unstyled'} onPress={() => navigation.navigate('ProductBuyVirtual')}>
                        <HStack py={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <HStack alignItems={'center'}>
                                <Box w={'1/4'}>
                                    <Icon as={<BRI />} />
                                </Box>
                                <Text ml={'2'} flex={1}>BANK BRI</Text>
                                <ChevronRightIcon color={'#4FAD39'} />
                            </HStack>
                        </HStack>
                    </Button>
                    <Divider color={'gray.400'} />
                </Box>
            </VStack>
            {/* akhir transfer */}
        </VStack>
    )
}

export default ProductBuyDetail