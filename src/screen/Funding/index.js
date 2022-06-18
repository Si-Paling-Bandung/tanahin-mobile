import React from 'react'
import { Box, Button, Image, Icon, Heading, Center, Progress, IconButton, Input, ScrollView, Stack, HStack, Text, VStack, AspectRatio, Pressable } from 'native-base'
import { Filter, Search } from '../../assets/icons'
import { fonts } from '../../utils'

const Funding = ({navigation}) => {
  return (
    <VStack h={'100%'} bg={'white'}>
      <VStack px={'25px'} pt={'30px'}>
        <Input
          placeholder='Cari tentang project, dan lainnya'
          InputLeftElement={<Icon as={<Search />} />}
          InputRightElement={<IconButton mr={'1'} variant={'solid'} colorScheme={'blue'}>
            <Icon as={<Filter />} />
          </IconButton>}
        />

        <Box bg={'blue.500'} my={'5'} p={'3'} rounded={'xl'}>
          <Text color={'white'} pb={'5'}>Punya Ide Kreatif dan
            Menarik soal Fashion?</Text>
          <Button variant={'solid'} mb={'5'} w={'45%'} colorScheme={'blue'}>Start Campaign</Button>
        </Box>

        {/* bagian slider */}
        <VStack py={"20px"}>
          <Stack px={"25px"}>
            <HStack mb={2}>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 16 }}>Rekomendasi</Text>
              <Button variant={'link'} ml={"auto"} p={0}>
                Lihat semua
              </Button>
            </HStack>
          </Stack>
        </VStack>
        {/* bagian slider rekomendasi */}
        <ScrollView horizontal px={"25px"} showsHorizontalScrollIndicator={false}>
          <Box alignItems="center" mr={3}>
            <Pressable onPress={() => navigation.navigate('FundDetail')}>
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
                        uri: "https://images.unsplash.com/photo-1586319826907-1ff4aadbaddc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
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
                        Batik Festival Bandung
                      </Heading>
                      <Text fontSize="sm"
                        fontWeight="500"
                        ml="-0.5"
                        color={"muted.400"}
                        mt="-1">
                        Fashion Enthusiast
                      </Text>
                    </Stack>
                  </HStack>
                  <Progress colorScheme="blue" value={65} size={'xl'} />
                  <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                      <Text color="coolGray.600" _dark={{
                        color: "warmGray.200"
                      }} fontWeight="400">
                        Target: 21 Juta
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
              </Box>
              <Stack p="4" space={3}>
                <HStack>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      Batik Festival Bandung
                    </Heading>
                    <Text fontSize="sm"
                      fontWeight="500"
                      ml="-0.5"
                      color={"muted.400"}
                      mt="-1">
                      Fashion Enthusiast
                    </Text>
                  </Stack>
                </HStack>
                <Progress colorScheme="blue" value={65} size={'xl'} />
                <HStack alignItems="center" space={4} justifyContent="space-between">
                  <HStack alignItems="center">
                    <Text color="coolGray.600" _dark={{
                      color: "warmGray.200"
                    }} fontWeight="400">
                      Target: 21 Juta
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
              </Box>
              <Stack p="4" space={3}>
                <HStack>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      Batik Festival Bandung
                    </Heading>
                    <Text fontSize="sm"
                      fontWeight="500"
                      ml="-0.5"
                      color={"muted.400"}
                      mt="-1">
                      Fashion Enthusiast
                    </Text>
                  </Stack>
                </HStack>
                <Progress colorScheme="blue" value={65} size={'xl'} />
                <HStack alignItems="center" space={4} justifyContent="space-between">
                  <HStack alignItems="center">
                    <Text color="coolGray.600" _dark={{
                      color: "warmGray.200"
                    }} fontWeight="400">
                      Target: 21 Juta
                    </Text>
                  </HStack>
                </HStack>
              </Stack>
            </Box>
          </Box>
        </ScrollView>
      </VStack>
    </VStack>
  )
}

export default Funding