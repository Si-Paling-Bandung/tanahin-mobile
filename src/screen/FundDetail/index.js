import React from 'react'
import { AspectRatio, Box, Button, Center, Heading, HStack, Icon, IconButton, Image, Input, Progress, ScrollView, Stack, Text, VStack } from 'native-base'
import { BackIcon, LikesButton, Transaction } from '../../assets/icons'

const FundDetail = ({ navigation }) => {
    return (
        <VStack pt={"30px"} mb={'60px'} bg={"white"} w={'full'} h={"full"}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* bagian header authentication */}
                <VStack px={"25px"}>
                    <HStack justifyContent={'space-between'}>
                        <Box alignItems="center" mb={"25px"}>
                            <IconButton icon={<Icon as={<BackIcon />} />}
                                borderRadius="full"
                                bg={"cyan.200:alpha.60"}
                                mr={"auto"}
                                onPress={() => navigation.goBack()}
                            />
                        </Box>
                        <Box alignItems="center" mb={"25px"}>
                            <IconButton icon={<Icon as={<LikesButton />} />}
                                borderRadius="full"
                                bg={"cyan.200:alpha.60"}
                                mr={"auto"}
                                onPress={() => navigation.goBack()}
                            />
                        </Box>
                    </HStack>
                    <AspectRatio w={'full'} ratio={9 / 9}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1586319826907-1ff4aadbaddc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470' }}
                            alt="foto"
                            borderRadius={'2xl'}
                        >
                        </Image>
                    </AspectRatio>
                    <Text fontSize={'20px'} mt={'15px'} mb={'2'} fontWeight={'semibold'} color={'gray.500'}>Batik Festival Bandung</Text>
                    <Text fontSize={'14px'} mb={'5'} color={'gray.500'}>Fashion Enthusiast</Text>
                    <HStack>
                        <Button colorScheme={'blue'} bg={'#EEEEEE'} mr={'2'}>
                            <Text color={"#2C96CA"}>Batik</Text>
                        </Button>
                        <Button colorScheme={'blue'} bg={'#EEEEEE'} mr={'2'}>
                            <Text color={"#2C96CA"}>Festival</Text>
                        </Button>
                    </HStack>
                    <VStack>
                        <Progress colorScheme="blue" value={65} size={'xl'} my={'5'} />
                        <HStack justifyContent={'space-between'}>
                            <Text fontFamily={'heading'} fontSize={'16px'} fontWeight={'semibold'}>Target : Rp 21.000.000</Text>
                            <Text fontFamily={'heading'} fontSize={'16px'}>55%</Text>
                        </HStack>
                    </VStack>
                    <HStack mt={'2'}>
                        <Icon as={<Transaction />} />
                        <Text ml={'3'}>Tentang Campaign</Text>
                    </HStack>
                    <Text color={'gray.400'} ml={'8'} pb='20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna facilisi sed blandit bibendum dictum magna ut suscipit. Vitae habitasse enim, aliquam dictumst nec</Text>
                </VStack>
            </ScrollView >
            <HStack position={'absolute'} zIndex={1} bottom={2} px={'25px'} w={'100%'}>
                <Button w={'full'}>Donasi ke Campaign</Button>
            </HStack>
        </VStack >
    )
}

export default FundDetail