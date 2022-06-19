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

const ProductBuyFinish = ({ navigation }) => {
    // console.log('image: ',landingImage)
    return (
        <VStack bg={"white"} h={"full"} px={"25px"}>
            <Box w="full" h="400px" justifyContent={"center"} alignItems={"center"}>
                <DataStoreHero />
            </Box>
            <Stack space={"3"}>
                <Center>
                    <Heading textAlign={'center'}>
                        Congratulations you have
                        complete payment
                    </Heading>
                    <Stack my={'12px'}>
                        <Text textAlign={'center'} fontSize={'12px'}>
                        Thank you for using and always supporting our application. Next, please wait for confirmation and your order will be delivered soon
                        </Text>
                    </Stack>
                </Center>
            </Stack>
                <Button colorScheme={"success"} bg="#4FAD39" mt={'auto'} mb={'25px'} fontWeight={"bold"} fontFamily={'heading'} onPress={() => navigation.replace('MainApp')}>Back to menu</Button>
        </VStack>
    )
}

export default ProductBuyFinish