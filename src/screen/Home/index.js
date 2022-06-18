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

  Progress,
  Pressable
} from 'native-base';
import {
  AddFloat,
  Auction,
  Cart,
  Discuss,
  Hoodie,
  Like,
  More,
  Notification,
  Pants,
  Rent,
  Sale,
  Search,
  Timer,
  Tshirt,
  Voice
} from '../../assets/icons';
// import { Person } from '../../assets/dummy';

const Home = ({ navigation }) => {
  const {
    isOpen,
    onToggle
  } = useDisclose();

  return (
    <VStack bg="white" h="full">
      <ScrollView>
        {/* bagian header */}
        <HStack w="64" w="full" py={3} px={"25px"} mt="20px">
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772' }}
            alt="images"
            size={50}
            resizeMode="contain"
            borderRadius={100}
          />
          <Center py={1} ml={3}>
            <Box>
              <Text style={styles.greating}>Selamat Sore,</Text>
              <Text style={styles.name}>Mba Irene</Text>
            </Box>
          </Center>
          <HStack ml={"auto"}>
            <Center>
              <Icon as={Like} />
            </Center>
            <Center>
              <Icon as={Notification} mx={2} />
            </Center>
            <Center>
              <Icon as={Cart} />
            </Center>
          </HStack>
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
            <IconButton bg={"tertiary.50"} variant='solid' w={'69px'} h={'69px'} _icon={{ as: Hoodie }} />
            <Text textAlign={"center"}>Hoodie</Text>
          </Box>
          <Box>
            <IconButton bg={"primary.50"} variant='solid' w={'69px'} h={'69px'} _icon={{ as: Pants }} />
            <Text textAlign={"center"}>Pants</Text>
          </Box>
          <Box>
            <IconButton bg={"warning.50"} variant='solid' w={'69px'} h={'69px'} _icon={{ as: Tshirt }} />
            <Text textAlign={"center"}>T-Shirt</Text>
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
          {/* bagian slider auction */}
          <ScrollView horizontal px={"25px"} showsHorizontalScrollIndicator={false}>
            <Pressable onPress={() => navigation.navigate('DetailProduct')}>
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
                          uri: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"
                        }}
                        alt="image"
                        borderBottomRightRadius={'xl'}
                      />
                    </AspectRatio>
                    <Text
                      bg="primary.500"
                      w={'full'}
                      position="absolute"
                      bottom="0"
                      px="3"
                      py="1.5"
                      color={"white"}
                      fontSize={11}
                      style={{ fontFamily: fonts.primary[400], borderBottomRightRadius: 15 }}
                    >
                      Diskon Spesial Untukmu
                    </Text>
                  </Box>
                  <Stack p="4" space={3}>
                    <HStack>
                      <Stack space={2}>
                        <Heading size="md" ml="-1">
                          Rp 85.000
                        </Heading>
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
                      </Stack>
                      <Center ml={'auto'} w={8} h={8} rounded={'md'} bg={"warning.200"}>
                        <Text color={'warning.500'} fontSize={"12px"}>65%</Text>
                      </Center>
                    </HStack>
                    <Progress colorScheme="warning" value={65} size={'xl'} />
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                      <HStack alignItems="center">
                        <Text color="coolGray.600" _dark={{
                          color: "warmGray.200"
                        }} fontWeight="400">
                          Stok segera habis
                        </Text>
                      </HStack>
                    </HStack>
                  </Stack>
                </Box>
              </Box>
            </Pressable>
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
                  <Text
                    bg="primary.500"
                    w={'full'}
                    position="absolute"
                    bottom="0"
                    px="3"
                    py="1.5"
                    color={"white"}
                    fontSize={11}
                    style={{ fontFamily: fonts.primary[400], borderBottomRightRadius: 15 }}
                  >
                    Diskon Spesial Untukmu
                  </Text>
                </Box>
                <Stack p="4" space={3}>
                  <HStack>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        Rp 85.000
                      </Heading>
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
                    </Stack>
                    <Center ml={'auto'} w={8} h={8} rounded={'md'} bg={"warning.200"}>
                      <Text color={'warning.500'} fontSize={"12px"}>65%</Text>
                    </Center>
                  </HStack>
                  <Progress colorScheme="warning" value={65} size={'xl'} />
                  <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                      <Text color="coolGray.600" _dark={{
                        color: "warmGray.200"
                      }} fontWeight="400">
                        Stok segera habis
                      </Text>
                    </HStack>
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
                  <Text
                    bg="primary.500"
                    w={'full'}
                    position="absolute"
                    bottom="0"
                    px="3"
                    py="1.5"
                    color={"white"}
                    fontSize={11}
                    style={{ fontFamily: fonts.primary[400], borderBottomRightRadius: 15 }}
                  >
                    Diskon Spesial Untukmu
                  </Text>
                </Box>
                <Stack p="4" space={3}>
                  <HStack>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        Rp 85.000
                      </Heading>
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
                    </Stack>
                    <Center ml={'auto'} w={8} h={8} rounded={'md'} bg={"warning.200"}>
                      <Text color={'warning.500'} fontSize={"12px"}>65%</Text>
                    </Center>
                  </HStack>
                  <Progress colorScheme="warning" value={65} size={'xl'} />
                  <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                      <Text color="coolGray.600" _dark={{
                        color: "warmGray.200"
                      }} fontWeight="400">
                        Stok segera habis
                      </Text>
                    </HStack>
                  </HStack>
                </Stack>
              </Box>
            </Box>
          </ScrollView>

          {/* bagian rekomendasi */}
          <VStack py={"20px"}>
            <Stack px={"25px"}>
              <HStack mb={2}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 16 }}>Rekomendasi</Text>
                <Button variant={'link'} ml={"auto"} p={0}>
                  Lihat semua
                </Button>
              </HStack>
            </Stack>
            {/* bagian slider rekomendasi */}
            <ScrollView horizontal px={"25px"} showsHorizontalScrollIndicator={false}>
              <Box alignItems="center" mr={3}>
                <Pressable onPress={() => navigation.navigate('DetailProductBuy')}>
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
                            uri: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772"
                          }}
                          alt="image"
                          borderBottomRightRadius={'xl'}
                        />
                      </AspectRatio>
                      <Text
                        bg="green.700"
                        w={'full'}
                        position="absolute"
                        bottom="0"
                        px="3"
                        py="1.5"
                        color={"white"}
                        fontSize={11}
                        style={{ fontFamily: fonts.primary[400], borderBottomRightRadius: 15 }}
                      >
                        Produk Terlaris Hari Ini
                      </Text>
                    </Box>
                    <Stack p="4" space={3}>
                      <HStack>
                        <Stack space={2}>
                          <Heading size="md" ml="-1">
                            Rp 85.000
                          </Heading>
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
                        </Stack>
                        <Center ml={'auto'} w={8} h={8} rounded={'md'} bg={"warning.200"}>
                          <Text color={'warning.500'} fontSize={"12px"}>65%</Text>
                        </Center>
                      </HStack>
                      <Progress colorScheme="warning" value={65} size={'xl'} />
                      <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                          <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                          }} fontWeight="400">
                            Stok segera habis
                          </Text>
                        </HStack>
                      </HStack>
                    </Stack>
                  </Box>
                </Pressable>
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
                    <Text
                      bg="green.700"
                      w={'full'}
                      position="absolute"
                      bottom="0"
                      px="3"
                      py="1.5"
                      color={"white"}
                      fontSize={11}
                      style={{ fontFamily: fonts.primary[400], borderBottomRightRadius: 15 }}
                    >
                      Produk Terlaris Hari Ini
                    </Text>
                  </Box>
                  <Stack p="4" space={3}>
                    <HStack>
                      <Stack space={2}>
                        <Heading size="md" ml="-1">
                          Rp 85.000
                        </Heading>
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
                      </Stack>
                      <Center ml={'auto'} w={8} h={8} rounded={'md'} bg={"warning.200"}>
                        <Text color={'warning.500'} fontSize={"12px"}>65%</Text>
                      </Center>
                    </HStack>
                    <Progress colorScheme="warning" value={65} size={'xl'} />
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                      <HStack alignItems="center">
                        <Text color="coolGray.600" _dark={{
                          color: "warmGray.200"
                        }} fontWeight="400">
                          Stok segera habis
                        </Text>
                      </HStack>
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
                    <Text
                      bg="green.700"
                      w={'full'}
                      position="absolute"
                      bottom="0"
                      px="3"
                      py="1.5"
                      color={"white"}
                      fontSize={11}
                      style={{ fontFamily: fonts.primary[400], borderBottomRightRadius: 15 }}
                    >
                      Produk Terlaris Hari Ini
                    </Text>
                  </Box>
                  <Stack p="4" space={3}>
                    <HStack>
                      <Stack space={2}>
                        <Heading size="md" ml="-1">
                          Rp 85.000
                        </Heading>
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
                      </Stack>
                      <Center ml={'auto'} w={8} h={8} rounded={'md'} bg={"warning.200"}>
                        <Text color={'warning.500'} fontSize={"12px"}>65%</Text>
                      </Center>
                    </HStack>
                    <Progress colorScheme="warning" value={65} size={'xl'} />
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                      <HStack alignItems="center">
                        <Text color="coolGray.600" _dark={{
                          color: "warmGray.200"
                        }} fontWeight="400">
                          Stok segera habis
                        </Text>
                      </HStack>
                    </HStack>
                  </Stack>
                </Box>
              </Box>
            </ScrollView>
          </VStack>
        </VStack>
      </ScrollView>
      {/* floating button */}
      <Box ml={"auto"} mr={5} position="absolute" bottom='2' right='5'>
        <Box alignItems="center" minH="220">
          <Stagger visible={isOpen} initial={{
            opacity: 0,
            scale: 0,
            translateY: 34
          }} animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true
              }
            }
          }} exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true
              }
            }
          }}>
            <IconButton mb="4" variant="solid" bg="white" borderColor={'blue.400'} borderWidth={'2'} colorScheme="blue" borderRadius="full" icon={<Icon as={Sale} size="6" name="location-pin" onPress={() => navigation.navigate('Sell')} _dark={{
              color: "warmGray.50"
            }} color="warmGray.50" />} />
            <IconButton mb="4" variant="solid" bg="white" borderColor={'blue.400'} borderWidth={'2'} colorScheme="blue" borderRadius="full" icon={<Icon as={Auction} _dark={{
              color: "warmGray.50"
            }} size="6" name="microphone" color="warmGray.50" />} />
            <IconButton mb="4" variant="solid" bg="white" borderColor={'blue.400'} borderWidth={'2'} colorScheme="blue" borderRadius="full" icon={<Icon as={Rent} onPress={() => navigation.navigate('Rents')} _dark={{
              color: "warmGray.50"
            }} size="6" name="video" color="warmGray.50" />} />
          </Stagger>
        </Box>
        <HStack alignItems="center">
          <IconButton variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="cyan.400" icon={<Icon as={AddFloat} size="6" name="dots-horizontal" color="warmGray.50" _dark={{
            color: "warmGray.50"
          }} />} />
        </HStack>
      </Box>
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

export default Home