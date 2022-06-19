import axios from 'axios'
import { VStack, Text, Box, IconButton, Icon, Button, HStack, Center, Input, Stack, Progress } from 'native-base'
import React, { useEffect, useState } from 'react'
import { BackIcon } from '../../assets/icons'
import { fonts } from '../../utils'
import { getData, storeData } from '../../utils/AsyncStorage'
import { useForm } from '../../utils/useForm'

const Profiling = ({ navigation }) => {
    const [form, setForm] = useForm({
        email: '',
        password: ''
    })
    const [error, setError] = useState([]);
    const [data, setData] = useState([])

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

    useEffect(() => {
        getData('users').then(res => {
            setData(res)
        })
    }, [])
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
            <Text
                color={"gray.400"}
                mr={1}
                style={{ fontFamily: fonts.primary.normal }}>
                Hello, {data?.data_user?.name}
            </Text>
            <Text fontSize={"18px"} fontFamily={'heading'} fontWeight={'semibold'}>Your Credit Summary</Text>

            {/* bagian circular progress */}
            <VStack>
                <Text textAlign={'center'} fontSize={'50px'} fontWeight={'semibold'}>0</Text>
                <Box w="100%">
                    <Progress
                        value={0}
                        size={'lg'}
                        bg="coolGray.100"
                        _filledTrack={{
                            bg: "lime.600"
                        }}
                    />
                </Box>
            </VStack>
            {/* bagian akhir circular */}
            <Button bg="#4FAD39" mt={'auto'} mb={'80px'} colorScheme={'success'} fontWeight={"semibold"} onPress={() => navigation.navigate('ProfilingData')}>Update</Button>
        </VStack>
    )
}

export default Profiling