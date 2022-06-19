import React, { useState } from 'react'
import { Box, Button, Center, HStack, Icon, IconButton, Input, Stack, Text, VStack } from 'native-base'
import { BackIcon, EyeOpen, EyeClose } from '../../assets/icons'
import { useForm } from '../../utils/useForm'
import { getData } from '../../utils/AsyncStorage'
import axios from 'axios'
// import { BASE_URL } from "@env"

const SignUpPassword = ({ navigation, route }) => {
    const [show, setShow] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [form, setForm] = useForm({
        password: ''
    })
    const [error, setError] = useState()

    const {name, email, phone_number} = route.params;

    const submit = () => {
        const config = {
            Headers: {
                Authorization: `Bearer 3|c73ujsn3CUdA8XMtqiaRdSBj9f2UUMN39kBI3x21`
            }
        }
        getData('users').then(res => {
            const data = {
                name: name,
                email: email,
                phone_number,
                password: form.password
            }
            console.log(data)
            axios.post('https://tanahin.mfaiztriputra.id/api/register', data, config).then(res => {
                console.log('success')
                navigation.navigate('Landing')
            }).catch(err => {
                console.log('error:', err.response.data.message)
                setError(err.response.data.message)
            })
        })
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
            <Text mt={"30px"} mb={"10px"} color={"warning.400"}>Jadilah pengguna Babaju dan Nikmati penawaran Spesial dari kami</Text>

            {/* bagian form */}
            <Stack mt={"20px"} mb={"15px"}>
                <Text>Password</Text>
                <Input placeholder='Masukkan nama mu' variant="underlined"
                    type={show ? "text" : "password"}
                    value={form.password}
                    onChangeText={value => setForm('password', value)}
                    InputRightElement={<Icon as={show ? <EyeOpen /> : <EyeClose />} onPress={() => setShow(!show)} />}
                />
            </Stack>
            <Stack mb={"50px"}>
                <Text>Konfirmasi Password</Text>
                <Input placeholder='Masukkan nomor mu' variant="underlined"
                    type={showConfirmation ? "text" : "password"} InputRightElement={<Icon as={showConfirmation ? <EyeOpen /> : <EyeClose />} onPress={() => setShowConfirmation(!showConfirmation)} />}
                />
            </Stack>
            <Button colorScheme={"cyan"} bg="#4FAD39" fontWeight={"semibold"} mt={"20px"} onPress={submit}>Continue</Button>
            {error && <Text color={'red.400'} mt={'10px'}>{error['email']}</Text>}
        </VStack>
    )
}

export default SignUpPassword