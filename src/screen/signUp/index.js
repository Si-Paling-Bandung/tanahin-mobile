import React from 'react'
import { Box, Button, Center, HStack, Icon, IconButton, Input, Stack, Text, VStack } from 'native-base'
import { BackIcon } from '../../assets/icons'
import { useForm } from '../../utils/useForm';
import { storeData } from '../../utils/AsyncStorage';

const SignUp = ({ navigation }) => {
    const [form, setForm] = useForm({
        name: '',
        email: '',
        phone_number: '',
    });

    const onContinue = () => {
        const data = {
            name: form.name,
            email: form.email,
            phone_number: form.phone_number
        }
        navigation.navigate('Verification', data)
    }

    return (
        <VStack px={"25px"} pt={"30px"} bg={"white"} h={"full"}>
            {/* bagian header authentication */}
            <Box alignItems="center" mb={'25px'}>
                <IconButton icon={<Icon as={<BackIcon />} />}
                    borderRadius="full"
                    bg={"#E9FAD8"}
                    mr={"auto"}
                    p={'2'}
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
            <Text mt={"30px"} mb={"10px"} color={"warning.400"}>Jadilah pengguna Tanahin dan Nikmati penawaran Spesial dari kami</Text>

            {/* bagian form */}
            <Stack mt={"20px"} mb={"15px"}>
                <Text>Nama</Text>
                <Input placeholder='Masukkan nama mu' variant="underlined" value={form.name} onChangeText={value => setForm('name', value)}></Input>
            </Stack>
            <Stack mb={"15px"}>
                <Text>Email</Text>
                <Input placeholder='Masukkan email mu' variant="underlined" value={form.email} onChangeText={value => setForm('email', value)}></Input>
            </Stack>
            <Stack mb={"50px"}>
                <Text>Nomor Telepon</Text>
                <Input placeholder='Masukkan nomor mu' variant="underlined" value={form.phone_number} onChangeText={value => setForm('phone_number', value)}></Input>
            </Stack>
            <Button bg="#4FAD39" fontWeight={"semibold"} onPress={onContinue}>Continue</Button>
        </VStack>
    )
}

export default SignUp