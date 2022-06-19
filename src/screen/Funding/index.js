import React from 'react'
import { Box, Button, Image, Icon, Heading, Center, Progress, IconButton, Input, ScrollView, Stack, HStack, Text, VStack, AspectRatio, Pressable, ZStack } from 'native-base'
import { Bandung, Bogor, Filter, Jakarta, Jogja, More, Search, Solo, Surabaya } from '../../assets/icons'
import { fonts } from '../../utils'
import { DummyResearch } from '../../assets/dummy'

const Funding = ({ navigation }) => {
  return (
    <VStack h={'100%'} bg={'white'}>
      <VStack px={'25px'} pt={'30px'}>
        <Input
          bg={'#FAFAFA'}
          borderRadius={'10px'}
          placeholder='Cari tentang project, dan lainnya'
          InputLeftElement={<Icon as={<Search />} ml={'10px'} />}
          InputRightElement={<IconButton mr={'1'} variant={'solid'} mr={'8px'} bg={'#4FAD39'}>
            <Icon as={<Filter />} />
          </IconButton>}
        />

        <HStack bg={'#81CE66:alpha.30'} my={'5'} rounded={'xl'}>
          <Stack my={'20px'} ml={'20px'}>
            <Text fontSize={'16px'} fontWeight={'semibold'}>Do you want <Text fontSize={'16px'} fontWeight={'semibold'} color={'#4FAD39'}>Research</Text></Text>
            <Text fontSize={'16px'} fontWeight={'semibold'} mb={'10px'}>about Land?</Text>
            <Button variant={'solid'} mb={'5'} w={'75%'} bg={'#4FAD39'}>Research Now</Button>
          </Stack>
          <DummyResearch style={{ position: 'absolute', bottom: 0, right: 25 }} />
        </HStack>

        {/* bagian research by region */}
        <Text fontSize={'15px'} mt={'15px'} color={'#444444'} fontWeight={'semibold'}>Research by Region</Text>
        <HStack style={{ display: 'flex', flex: 4, flexDirection:"row",justifyContent:'space-between',padding:10 }}>
          <Box bg={'#034EA2:alpha.20'} w={'17%'} h={'60px'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'}>
            <Jakarta />
          </Box>
          <Box bg={'#F8E91C:alpha.20'} w={'17%'} h={'60px'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'}>
            <Bandung />
          </Box>
          <Box bg={'#EC2727:alpha.20'} w={'17%'} h={'60px'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'}>
            <Jogja />
          </Box>
          <Box bg={'#031CFC:alpha.20'} w={'17%'} h={'60px'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'}>
            <Surabaya />
          </Box>
        </HStack>
        <HStack style={{ display: 'flex', flex: 4, flexDirection:"row", justifyContent:'space-between',padding:10, marginTop: 50 }}>
          <Box bg={'#FFF500:alpha.30'} w={'17%'} h={'60px'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'}>
            <Bogor />
          </Box>
          <Box bg={'#10D620:alpha.30'} w={'17%'} h={'60px'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'}>
            <Solo />
          </Box>
          <Box bg={'#4FAD39'} w={'17%'} h={'60px'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'}>
            <More />
          </Box>
          <Box w={'17%'} h={'60px'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'}>
            {/* <More /> */}
          </Box>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default Funding