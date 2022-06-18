import React from 'react'
import { Box, Button, Center, Heading, HStack, Icon, IconButton, Image, Input, ScrollView, Stack, Text, VStack } from 'native-base'
import { NotificationProduct } from '../../assets/icons'

const ProductBuyNotification = ({ navigation }) => {
    return (
        <VStack bg={"white"} h={"full"} px={"25px"}>
            <Box w="full" h="400px" justifyContent={"center"} alignItems={"center"}>
                <NotificationProduct />
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
                            Untuk informasi selanjutnya kamu dapat mengecek notifikasi ketika kamu berhasil memenangkan lelang ini. Terima kasih
                        </Text>
                    </Stack>
                </Center>
                <Button colorScheme={"cyan"} bg="#2C96CA" fontWeight={"bold"} fontFamily={'heading'} onPress={() => navigation.replace('MainApp')}>Go to Home</Button>
            </Stack>
        </VStack>
    )
}

export default ProductBuyNotification