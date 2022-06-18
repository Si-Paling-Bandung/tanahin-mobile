import React from 'react'
import { Box, Button, Center, HStack, Icon, IconButton, Input, Stack, Text, VStack } from 'native-base'
import { BackIcon } from '../../assets/icons'

const SignUp = ({navigation}) => {
  return (
    <VStack px={"25px"} pt={"30px"} bg={"white"} h={"full"}>
            {/* bagian header authentication */}
            <Box alignItems="center" mb={"25px"}>
                <IconButton icon={<Icon as={<BackIcon />} />}
                    borderRadius="full"
                    bg={"cyan.200:alpha.60"}
                    mr={"auto"}
                    onPress={() => navigation.goBack()}
                />
            </Box>
            <Text fontSize={"24px"} fontWeight={"semibold"}>Sign Up</Text>
            <HStack>
                <Center
                    color={"gray.400"}
                    mr={1}
                    >Sudah punya akun?</Center>
                <Button
                    variant={"link"}
                    p={0}
                >Login</Button>
            </HStack>
            <Text mt={"30px"} mb={"10px"} color={"warning.400"}>Jadilah pengguna Babaju dan Nikmati penawaran Spesial dari kami</Text>

            {/* bagian form */}
            <Stack mt={"20px"} mb={"15px"}>
                <Text>Nama</Text>
                <Input placeholder='Masukkan nama mu' variant="underlined"></Input>
            </Stack>
            <Stack mb={"15px"}>
                <Text>Email</Text>
                <Input placeholder='Masukkan email mu' variant="underlined"></Input>
            </Stack>
            <Stack mb={"50px"}>
                <Text>Nomor Telepon</Text>
                <Input placeholder='Masukkan nomor mu' variant="underlined"></Input>
            </Stack>
            <Button colorScheme={"cyan"} bg="cyan.700" fontWeight={"semibold"} onPress={() => navigation.navigate('Verification')}>Continue</Button>
        </VStack>
  )
}

export default SignUp