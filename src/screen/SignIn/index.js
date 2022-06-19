import axios from 'axios'
import { VStack, Text, Box, IconButton, Icon, Button, HStack, Center, Input, Stack } from 'native-base'
import React, { useState } from 'react'
import { BackIcon } from '../../assets/icons'
import { fonts } from '../../utils'
import { storeData } from '../../utils/AsyncStorage'
import { useForm } from '../../utils/useForm'

const SignIn = ({navigation}) => {
    const [form, setForm] = useForm({
        email: '',
        password: ''
    })
    const [error, setError] = useState([]);

    const config = {
        Headers: {
            Authorization: `Bearer 3|c73ujsn3CUdA8XMtqiaRdSBj9f2UUMN39kBI3x21`
        }
    }

    const submit = () => {
        const data = {
            email: form.email,
            password: form.password
        }
        axios.post('https://tanahin.mfaiztriputra.id/api/login', data, config).then(res => {
                console.log('success', res.data)
                storeData('users', res.data)
                navigation.navigate('MainApp')
            }).catch(err => {
                console.log('error:', err.response.data.message)
                setError(err.response.data.message)
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
                    onPress={() => navigation.navigate('Landing')}
                />
            </Box>
            <Text fontSize={"24px"} fontFamily={'heading'} fontWeight={'semibold'}>Sign In</Text>
            <HStack>
                <Center
                    color={"gray.400"}
                    mr={1}
                    style={{ fontFamily: fonts.primary.normal }}>Don't have an account yet?</Center>
                <Button
                    variant={"link"}
                    colorScheme={'success'}
                    p={0}
                >Register</Button>
            </HStack>

            {/* bagian form */}
            <Stack mt={"20px"} mb={"15px"}>
                <Text style={{fontFamily: fonts.primary.normal}} fontSize={"14px"}>Email/Phone Number</Text>
                <Input placeholder='Enter your email / Phone Number' variant="underlined" value={form.email} onChangeText={value => setForm('email', value)}></Input>
                {error && <Text color={'red.400'}>{error.email}</Text>}
            </Stack>
            <Stack mb={"50px"}>
                <Text style={{fontFamily: fonts.primary.normal}} fontSize={"14px"}>Password</Text>
                <Input placeholder='Enter your Password' variant="underlined" type='password' value={form.password} onChangeText={value => setForm('password', value)}></Input>
                {error && <Text color={'red.400'}>{error.password}</Text>}
            </Stack>
            <Button bg="#4FAD39" colorScheme={'success'} fontWeight={"semibold"} onPress={submit}>Continue</Button>
        </VStack>
    )
}

export default SignIn