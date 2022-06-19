import axios from 'axios'
import { VStack, Text, Box, IconButton, Icon, Button, HStack, Center, Input, Stack, Progress } from 'native-base'
import React, { useEffect, useState } from 'react'
import { BackIcon } from '../../assets/icons'
import { fonts } from '../../utils'
import { getData, storeData } from '../../utils/AsyncStorage'
import { useForm } from '../../utils/useForm'

const ProfilingData = ({ navigation }) => {
    const [form, setForm] = useForm({
        phone_number: '',
    })
    const [error, setError] = useState([]);
    const [data, setData] = useState([])
    const [token, setToken] = useState('')

    const config = {
        Headers: {
            Authorization: `Bearer ${data?.access_token}`
        }
    }

    const submit = () => {
        const data = {
            phone_number: form.phone_number,
        }
        getData('users').then(res => {
            axios.post('https://tanahin.mfaiztriputra.id/api/brick', data, {headers: {Authorization: `Bearer ${res.access_token}`}}).then(res => {
                console.log('success', res.data)
                // storeData('users', res.data)
                storeData('dataOtp', res.data.data)
                navigation.navigate('ProfilingToken', res.data.data)
            }).catch(err => {
                console.log('error:', err.response.data.message)
                // setError(err.response.data.message)
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
                    onPress={() => navigation.navigate('Profile')}
                />
            </Box>
            <Text fontSize={"18px"} fontFamily={'heading'} textAlign={"center"} mb={'20px'} fontWeight={'semibold'}>Verification</Text>
            <Text
                color={"gray.400"}
                mr={1}
                textAlign={'center'}
                style={{ fontFamily: fonts.primary.normal }}>
                Enter you Phone Number to
                Get Verification of Credit Number
            </Text>

            {/* bagian circular progress */}
            <Stack mt={"20px"} mb={"15px"}>
                <Text style={{ fontFamily: fonts.primary.normal }} fontSize={"14px"}>Phone Number</Text>
                <Input placeholder='Enter your Phone Number' variant={'filled'} mt={'10px'} value={form.phone_number} onChangeText={value => setForm('phone_number', value)}></Input>
                {error && <Text color={'red.400'}>{error.email}</Text>}
            </Stack>
            {/* bagian akhir circular */}
            <Button bg="#4FAD39" mt={'auto'} mb={'80px'} colorScheme={'success'} fontWeight={"semibold"} onPress={submit}>Verify Me</Button>
        </VStack>
    )
}

export default ProfilingData