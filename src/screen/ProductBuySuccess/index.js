import { VStack, ScrollView, HStack, Box, IconButton, Icon, Center, Text, Button, Stack, Input, Checkbox, Image, Heading, Divider, Radio, ArrowUpIcon, ChevronRightIcon } from 'native-base'
import React from 'react'
import { BackIcon, BCA, BNI, BRI, Copy, Discount, Mandiri, Stars, StoreIcon } from '../../assets/icons'

const ProductBuySuccess = ({ navigation }) => {
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
                <Center ml={'60px'}>
                    <Text fontSize={'16px'} fontWeight={'medium'}>Detail Order</Text>
                    <Text fontSize={'12px'} fontWeight={'medium'} color={'#7C7C7C'}>Order Number BT00889</Text>
                </Center>
            </HStack>
            <Stack bg={'#ECFCD7'} py={'8px'}>
                <Center>
                    <Text color={'#FF5416'} fontSize={'12px'}>Complete your payment in 45 minute 5 second</Text>
                </Center>
            </Stack>
            {/* detail */}
            <VStack px={'25px'}>
                <HStack py={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <HStack alignItems={'center'} justifyContent={'space-between'}>
                        <VStack flex={1}>
                            <Text>Account holder name</Text>
                            <Text fontWeight={'semibold'}>Irene Red Velvet</Text>
                        </VStack>
                        <Icon as={<BCA />} />
                    </HStack>
                </HStack>

                <HStack py={3} display={'flex'} justifyContent={'space-between'} bg={'#E9FAD8'} borderWidth={'1'} borderColor={'#4FAE3A'} borderRadius={"lg"} alignItems={'center'}>
                    <HStack alignItems={'center'} px={'4'} justifyContent={'space-between'}>
                        <VStack flex={1}>
                            <Text color={'#4FAE3A'}>Account number</Text>
                            <Text color={'#4FAE3A'} fontWeight={'semibold'}>8648499124</Text>
                        </VStack>
                        <Icon as={<Copy />} mr={'10px'} />
                    </HStack>
                </HStack>
                <Stack my={'20px'}>
                    <Text color={'#828282'}>Pay amount</Text>
                    <Text fontWeight={'semibold'} fontSize={'16px'}>Rp 100.005.123</Text>
                </Stack>
                <Text>Confirm Payment</Text>
                <Text>Help us confirm your payment by tapping the “Already Paid” button below.</Text>
            </VStack>
            {/* akhir detail */}

            {/* transfer */}
            <Stack px={'25px'} flex={"1"} py={'20px'}>
                <Stack mt={'auto'}>
                    <Button variant={'solid'} bg={'#4FAE3A'} mt={'10px'} onPress={() => navigation.navigate('ProductBuyFinish')}>Already Paid</Button>
                </Stack>
            </Stack>
            {/* akhir transfer */}
        </VStack>
    )
}

export default ProductBuySuccess