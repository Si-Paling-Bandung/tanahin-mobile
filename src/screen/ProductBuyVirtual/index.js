import { VStack, ScrollView, HStack, Box, IconButton, Icon, Center, Text, Button, Stack, Input, Checkbox, Image, Heading, Divider, Radio } from 'native-base'
import React, { useState } from 'react'
import { BackIcon, BCA, BNI, BRI, Dana, Discount, GoPay, JnT, Mandiri, Ovo, Shopee, Stars, StoreIcon, Truck } from '../../assets/icons'

const ProductBuyVirtual = ({ navigation }) => {
    const [value, setValue] = useState('')
    return (
        <VStack pt={"30px"} bg={"white"} h={"full"} pb={'100px'}>
            <ScrollView>
                <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
                    setValue(nextValue);
                }}>
                    {/* Pengiriman */}
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
                            <Text fontSize={'16px'} fontWeight={'medium'}>Pembayaran</Text>
                        </Center>
                    </HStack>
                    <VStack bg={'gray.50'} w={'full'} p={5} mb={'5'}>
                        <Heading fontSize={'md'} mb={5}>Virtual Account</Heading>
                        <Box bg={'white'} p={5} rounded={'xl'}>
                            <HStack space={'20'} py={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <HStack alignItems={'center'}>
                                    <Icon as={<Mandiri />} />
                                    <Text ml={'2'} flex={1}>Mandiri VA</Text>
                                    <Box>
                                        <Radio value="one" borderRadius={'full'}></Radio>
                                    </Box>
                                </HStack>
                            </HStack>
                            <Divider color={'gray.400'} />
                            <HStack space={'20'} py={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <HStack alignItems={'center'}>
                                    <Icon as={<BCA />} />
                                    <Text ml={'2'} flex={1}>BCA VA</Text>
                                    <Box>
                                        <Radio value="two" borderRadius={'full'}></Radio>
                                    </Box>
                                </HStack>
                            </HStack>
                            <Divider color={'gray.400'} />
                            <HStack space={'20'} py={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <HStack alignItems={'center'}>
                                    <Icon as={<BNI />} />
                                    <Text ml={'2'} flex={1}>BNI VA</Text>
                                    <Box>
                                        <Radio value="three" borderRadius={'full'}></Radio>
                                    </Box>
                                </HStack>
                            </HStack>
                            <Divider color={'gray.400'} />
                            <HStack space={'20'} py={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <HStack alignItems={'center'}>
                                    <Icon as={<BRI />} />
                                    <Text ml={'2'} flex={1}>BANK BRI</Text>
                                    <Box>
                                        <Radio value="four" borderRadius={'full'}></Radio>
                                    </Box>
                                </HStack>
                            </HStack>
                            <Divider color={'gray.400'} />
                        </Box>
                    </VStack>

                    {/* bagian dompet digital */}
                    <VStack bg={'gray.50'} w={'full'} p={5} mb={'5'}>
                        <Heading fontSize={'md'} mb={5}>E-Money</Heading>
                        <Box bg={'white'} p={5} rounded={'xl'}>
                            <HStack space={'20'} py={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <HStack alignItems={'center'}>
                                    <Icon as={<Shopee />} />
                                    <Text ml={'2'} flex={1}>Shopee PayLater</Text>
                                    <Box>
                                        <Radio value="five" borderRadius={'full'}></Radio>
                                    </Box>
                                </HStack>
                            </HStack>
                            <Divider color={'gray.400'} />
                            <HStack space={'20'} py={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <HStack alignItems={'center'}>
                                    <Icon as={<GoPay />} />
                                    <Text ml={'2'} flex={1}>GoPay</Text>
                                    <Box>
                                        <Radio value="six" borderRadius={'full'}></Radio>
                                    </Box>
                                </HStack>
                            </HStack>
                            <Divider color={'gray.400'} />
                            <HStack space={'20'} py={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <HStack alignItems={'center'}>
                                    <Icon as={<Ovo />} />
                                    <Text ml={'2'} flex={1}>OVO</Text>
                                    <Box>
                                        <Radio value="seven" borderRadius={'full'}></Radio>
                                    </Box>
                                </HStack>
                            </HStack>
                            <Divider color={'gray.400'} />
                            <HStack space={'20'} py={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <HStack alignItems={'center'}>
                                    <Icon as={<Shopee />} />
                                    <Text ml={'2'} flex={1}>ShopeePay</Text>
                                    <Box>
                                        <Radio value="eight" borderRadius={'full'}></Radio>
                                    </Box>
                                </HStack>
                            </HStack>
                            <Divider color={'gray.400'} />
                            <HStack space={'20'} py={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <HStack alignItems={'center'}>
                                    <Icon as={<Dana />} />
                                    <Text ml={'2'} flex={1}>Dana</Text>
                                    <Box>
                                        <Radio value="nine" borderRadius={'full'}></Radio>
                                    </Box>
                                </HStack>
                            </HStack>
                            <Divider color={'gray.400'} />
                        </Box>
                    </VStack>
                </Radio.Group>
            </ScrollView>
            <VStack px={'25px'} position={'absolute'} w={'full'} bottom={0} bg={'white'} borderWidth={'1'} borderTopColor={'gray.200'} roundedTop={'xl'} py={'20px'}>
                <Button variant={'outline'} mb={'15px'} leftIcon={<Icon as={<Discount />} />} rightIcon={<Icon as={<StoreIcon />} />}>Makin hemat dengan diskon</Button>
                <HStack>
                    <Stack>
                        <Text color={'gray.400'}>Total Harga</Text>
                        <Text color={'warning.500'} fontWeight={'semibold'}>Rp 85.000,-</Text>
                    </Stack>
                    <Button bg={'primary.600'} px={'30px'} rounded={'xl'} ml={'auto'} onPress={() => navigation.navigate('ProductBuyNotification')}>Bayar</Button>
                </HStack>
            </VStack>
        </VStack>
    )
}

export default ProductBuyVirtual