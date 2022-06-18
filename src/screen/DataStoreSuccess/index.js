import React from 'react'
import {
    Box,
    Center,
    HStack,
    VStack,
    Text,
    Input,
    Icon,
    Button,
    Image,
    Progress,
    Stack,
    Heading
} from 'native-base';
import { fonts } from '../../utils'
import { DataStoreHero } from '../../assets/dummy';

const DataStoreSuccess = ({ navigation }) => {
    // console.log('image: ',landingImage)
    return (
        <VStack bg={"white"} h={"full"} px={"25px"}>
            <Box w="full" h="400px" justifyContent={"center"} alignItems={"center"}>
                <DataStoreHero />
            </Box>
            <Stack space={"3"}>
                <Center>
                    <Heading textAlign={'center'}>
                        Data Kamu Sudah
                    </Heading>
                    <Heading textAlign={'center'}>
                        Kami Terima
                    </Heading>
                    <Stack my={'12px'}>
                        <Text textAlign={'center'} fontSize={'12px'}>
                            Sekarang kamu bisa menikmati Babaju dengan preferensi yang kami berikan untuk mu.
                        </Text>
                        <Text textAlign={'center'} fontSize={'12px'}>Have a Nice Day !</Text>
                    </Stack>
                </Center>
                <Button colorScheme={"cyan"} bg="#2C96CA" fontWeight={"bold"} fontFamily={'heading'} onPress={() => navigation.replace('MainApp')}>Go to Home</Button>
            </Stack>
        </VStack>
    )
}

export default DataStoreSuccess