import React from 'react'
import { StyleSheet } from 'react-native'
import { fonts } from '../../utils';
import {
    Box,
    Center,
    HStack,
    Image,
    VStack,
    Text,
    Input,
    Icon,
    Button,
    IconButton,
    AspectRatio,
    Stack,
    Heading,
    ScrollView,
    useDisclose,
    Stagger,

    Progress
} from 'native-base';
import {
    Anime,
    BackIcon,
    Cart,
    Casual,
    Like,
    More,
    Notification,
    Search,
    Sell,
    StoreIcon,
    Timer,
    Traditional,
    Tshirt,
    Voice
} from '../../assets/icons';
// import { Person } from '../../assets/dummy';

const Rents = ({ navigation }) => {
    const {
        isOpen,
        onToggle
    } = useDisclose();

    return (
        <VStack bg="white" h="full">
            <ScrollView>
                {/* bagian header */}
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
                        <Text fontSize={'16px'} fontWeight={'medium'}>Sewa Baju</Text>
                    </Center>
                </HStack>
                {/* bagian search barang */}
                <Center h="20" px={"25px"} >
                    <Input w={"full"}
                        InputLeftElement={<Icon as={<Search />}
                            size={5}
                            ml="2"
                            color="muted.400" />}
                        InputRightElement={<Icon as={<Voice />}
                            size={5}
                            mr="5"
                            color="muted.400" />}
                        placeholder="Cari produk yang kamu inginkan"
                    />
                </Center>
                {/* bagian category */}
                <HStack px={"25px"} space={7}>
                    <Box>
                        <IconButton bg={"tertiary.50"} variant='solid' w={'69px'} h={'69px'} _icon={{ as: Casual }} />
                        <Text textAlign={"center"}>Casual</Text>
                    </Box>
                    <Box>
                        <IconButton bg={"primary.50"} variant='solid' w={'69px'} h={'69px'} _icon={{ as: Anime }} />
                        <Text textAlign={"center"}>Anime</Text>
                    </Box>
                    <Box>
                        <IconButton bg={"warning.50"} variant='solid' w={'69px'} h={'69px'} _icon={{ as: Traditional }} />
                        <Text textAlign={"center"}>Traditional</Text>
                    </Box>
                    <Box>
                        <IconButton bg={"info.300"} variant='solid' w={'69px'} h={'69px'} _icon={{ as: More }} />
                        <Text textAlign={"center"}>More</Text>
                    </Box>
                </HStack>
                {/* bagian auction */}
                <VStack py={"20px"}>
                    <Stack px={"25px"}>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 16 }} mb={"3px"}>Live Auction Diskon Spesial</Text>
                        <HStack mb={2}>
                            <Box style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text py={2} mr={"10px"}>Berakhir dalam</Text>
                                <HStack borderRadius={12} py={2} px={3} bg={"warning.500"} color={"white"}>
                                    <Icon as={<Timer />} />
                                    <Text color={"white"} ml={2}>03:00:00</Text>
                                </HStack>
                            </Box>
                            <Button variant={'link'} ml={"auto"} p={0}>
                                Lihat semua
                            </Button>
                        </HStack>
                    </Stack>

                    {/* bagian anime */}
                    <VStack py={"20px"}>
                        <Stack px={"25px"}>
                            <HStack mb={2}>
                                <Text style={{ fontFamily: fonts.primary[600], fontSize: 16 }}>Sewa Baju Anime</Text>
                                <Button variant={'link'} ml={"auto"} p={0}>
                                    Lihat semua
                                </Button>
                            </HStack>
                        </Stack>
                        {/* bagian slider anime */}
                        <ScrollView horizontal px={"25px"} showsHorizontalScrollIndicator={false}>
                            <Box alignItems="center" mr={3}>
                                <Box maxW={"210px"} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                    borderColor: "coolGray.600",
                                    backgroundColor: "gray.700"
                                }} _web={{
                                    shadow: 2,
                                    borderWidth: 0
                                }} _light={{
                                    backgroundColor: "gray.50"
                                }}>
                                    <Box>
                                        <AspectRatio w="100%" ratio={16 / 9}>
                                            <Image
                                                source={{
                                                    uri: "https://i.pinimg.com/736x/a7/93/d0/a793d0d1e375894e391d3b0a9345ccf6--halloween-cosplay-cosplay-costumes.jpg"
                                                }}
                                                alt="saitama"
                                                borderBottomRightRadius={'xl'}
                                            />
                                        </AspectRatio>
                                    </Box>
                                    <Stack p="4" space={3}>
                                        <HStack>
                                            <Stack space={2}>
                                                <Heading size="md" ml="-1">
                                                    Fullset Saitama
                                                </Heading>
                                                <Text fontSize="sm"
                                                    fontWeight="500"
                                                    ml="-0.5"
                                                    color={"muted.400"}
                                                    mt="-1">
                                                    Jejepangan Bandung
                                                </Text>
                                            </Stack>
                                        </HStack>
                                        <HStack alignItems="center" space={4} justifyContent="space-between">
                                            <Heading>80K/day</Heading>
                                            <Button colorScheme={'blue'} bg={'info.300'} onPress={() => navigation.navigate('RentsDetail')}>
                                                <Icon as={<StoreIcon />} />
                                            </Button>
                                        </HStack>
                                    </Stack>
                                </Box>
                            </Box>
                            <Box alignItems="center" mr={3}>
                                <Box maxW={"210px"} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                    borderColor: "coolGray.600",
                                    backgroundColor: "gray.700"
                                }} _web={{
                                    shadow: 2,
                                    borderWidth: 0
                                }} _light={{
                                    backgroundColor: "gray.50"
                                }}>
                                    <Box>
                                        <AspectRatio w="100%" ratio={16 / 9}>
                                            <Image
                                                source={{
                                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                }}
                                                alt="image"
                                                borderBottomRightRadius={'xl'}
                                            />
                                        </AspectRatio>
                                    </Box>
                                    <Stack p="4" space={3}>
                                        <HStack>
                                            <Stack space={2}>
                                                <Heading size="md" ml="-1">
                                                    Fullset Naruto
                                                </Heading>
                                                <Text fontSize="sm"
                                                    fontWeight="500"
                                                    ml="-0.5"
                                                    color={"muted.400"}
                                                    mt="-1">
                                                    Wibu Bandung
                                                </Text>
                                            </Stack>
                                        </HStack>
                                        <HStack alignItems="center" space={4} justifyContent="space-between">
                                            <Heading>80K/day</Heading>
                                            <Button colorScheme={'blue'} bg={'info.300'}>
                                                <Icon as={<StoreIcon />} />
                                            </Button>
                                        </HStack>
                                    </Stack>
                                </Box>
                            </Box>
                        </ScrollView>
                    </VStack>

                    {/* bagian rekomendasi */}
                    <VStack py={"20px"}>
                        <Stack px={"25px"}>
                            <HStack mb={2}>
                                <Text style={{ fontFamily: fonts.primary[600], fontSize: 16 }}>Sewa Baju Adat</Text>
                                <Button variant={'link'} ml={"auto"} p={0}>
                                    Lihat semua
                                </Button>
                            </HStack>
                        </Stack>
                        {/* bagian slider rekomendasi */}
                        {/* bagian slider anime */}
                        <ScrollView horizontal px={"25px"} showsHorizontalScrollIndicator={false}>
                            <Box alignItems="center" mr={3}>
                                <Box maxW={"210px"} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                    borderColor: "coolGray.600",
                                    backgroundColor: "gray.700"
                                }} _web={{
                                    shadow: 2,
                                    borderWidth: 0
                                }} _light={{
                                    backgroundColor: "gray.50"
                                }}>
                                    <Box>
                                        <AspectRatio w="100%" ratio={16 / 9}>
                                            <Image
                                                source={{
                                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                }}
                                                alt="image"
                                                borderBottomRightRadius={'xl'}
                                            />
                                        </AspectRatio>
                                    </Box>
                                    <Stack p="4" space={3}>
                                        <HStack>
                                            <Stack space={2}>
                                                <Heading size="md" ml="-1">
                                                    Fullset Saitama
                                                </Heading>
                                                <Text fontSize="sm"
                                                    fontWeight="500"
                                                    ml="-0.5"
                                                    color={"muted.400"}
                                                    mt="-1">
                                                    Jejepangan Bandung
                                                </Text>
                                            </Stack>
                                        </HStack>
                                        <HStack alignItems="center" space={4} justifyContent="space-between">
                                            <Heading>80K/day</Heading>
                                            <Button colorScheme={'blue'} bg={'info.300'}>
                                                <Icon as={<StoreIcon />} />
                                            </Button>
                                        </HStack>
                                    </Stack>
                                </Box>
                            </Box>
                            <Box alignItems="center" mr={3}>
                                <Box maxW={"210px"} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                    borderColor: "coolGray.600",
                                    backgroundColor: "gray.700"
                                }} _web={{
                                    shadow: 2,
                                    borderWidth: 0
                                }} _light={{
                                    backgroundColor: "gray.50"
                                }}>
                                    <Box>
                                        <AspectRatio w="100%" ratio={16 / 9}>
                                            <Image
                                                source={{
                                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                }}
                                                alt="image"
                                                borderBottomRightRadius={'xl'}
                                            />
                                        </AspectRatio>
                                    </Box>
                                    <Stack p="4" space={3}>
                                        <HStack>
                                            <Stack space={2}>
                                                <Heading size="md" ml="-1">
                                                    Fullset Naruto
                                                </Heading>
                                                <Text fontSize="sm"
                                                    fontWeight="500"
                                                    ml="-0.5"
                                                    color={"muted.400"}
                                                    mt="-1">
                                                    Wibu Bandung
                                                </Text>
                                            </Stack>
                                        </HStack>
                                        <HStack alignItems="center" space={4} justifyContent="space-between">
                                            <Heading>80K/day</Heading>
                                            <Button colorScheme={'blue'} bg={'info.300'}>
                                                <Icon as={<StoreIcon />} />
                                            </Button>
                                        </HStack>
                                    </Stack>
                                </Box>
                            </Box>
                        </ScrollView>
                    </VStack>
                </VStack>
            </ScrollView>
        </VStack>
    )
}

const styles = StyleSheet.create({
    greating: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
    },
    name: {
        fontFamily: fonts.primary[600]
    }
})

export default Rents