import { VStack, Text, Box, IconButton, Icon, Button, HStack, Center, Input, Stack } from 'native-base'
import React from 'react'
import { BackIcon } from '../../assets/icons'
import { fonts } from '../../utils'

const SignIn = ({navigation}) => {
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
            <Text fontSize={"24px"} fontFamily={'heading'} fontWeight={'semibold'}>Sign In</Text>
            <HStack>
                <Center
                    color={"gray.400"}
                    mr={1}
                    style={{ fontFamily: fonts.primary.normal }}>Belum punya akun?</Center>
                <Button
                    variant={"link"}
                    p={0}
                >Register</Button>
            </HStack>

            {/* bagian form */}
            <Stack mt={"20px"} mb={"15px"}>
                <Text style={{fontFamily: fonts.primary.normal}} fontSize={"14px"}>Email/No.Telepon</Text>
                <Input placeholder='Masukkan email / no telepon mu' variant="underlined"></Input>
            </Stack>
            <Stack mb={"50px"}>
                <Text style={{fontFamily: fonts.primary.normal}} fontSize={"14px"}>Password</Text>
                <Input placeholder='Masukkan password mu' variant="underlined" type='password'></Input>
            </Stack>
            <Button colorScheme={"cyan"} bg="cyan.700" style={{fontFamily: fonts.primary[600]}} onPress={() => navigation.replace('DataStore')}>Continue</Button>
        </VStack>
    )
}

export default SignIn