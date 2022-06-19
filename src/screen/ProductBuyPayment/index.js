import { VStack, ScrollView, HStack, Box, IconButton, Icon, Center, Text, Button, Stack, Input, Checkbox, Image, Heading, Divider, Radio, ArrowUpIcon, ChevronRightIcon } from 'native-base'
import React from 'react'
import { BackIcon, BCA, BNI, BRI, Discount, Mandiri, Stars, StoreIcon } from '../../assets/icons'

const ProductBuyPayment = ({ navigation }) => {
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
                <Center ml={'50px'}>
                    <Text fontSize={'16px'} fontWeight={'medium'}>Detail Order</Text>
                    <Text fontSize={'12px'} fontWeight={'medium'} color={'#7C7C7C'}>Order Number BT00889</Text>
                </Center>
            </HStack>
            {/* detail */}
            <VStack px={'25px'}>
                <Text fontWeight={'semibold'} fontSize={'16px'} mb={'15px'}>Pricing details</Text>
                <Stack>
                    <HStack justifyContent={'space-between'} my={'7px'}>
                        <Text>Living Land Jakarta 100 m2</Text>
                        <Text fontWeight={'semibold'} fontSize={'14px'}>Rp 100.000.000</Text>
                    </HStack>
                    <HStack justifyContent={'space-between'} my={'7px'}>
                        <Text>Delivery fee</Text>
                        <Text fontWeight={'semibold'} fontSize={'14px'}>Rp 5.000</Text>
                    </HStack>
                </Stack>
                <Divider />
                <HStack justifyContent={'space-between'} my={'7px'}>
                    <Text>Total Payment</Text>
                    <Text fontWeight={'semibold'} color={'#4FAE3A'} fontSize={'14px'}>Rp 100.005.000</Text>
                </HStack>
                <HStack py={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <HStack alignItems={'center'} justifyContent={'space-between'}>
                        <Text flex={1}>Transfer Bank</Text>
                        <Icon as={<BCA />} />
                    </HStack>
                </HStack>
            </VStack>
        </VStack>
    )
}

export default ProductBuyPayment