import { VStack, Text, Box, Button, HStack, Input, Stack, Checkbox } from 'native-base'
import React, {useState} from 'react'
import { fonts } from '../../utils'

const colors = [
    {
        id: 1,
        color_code: '#FEDBC7'
    },
    {
        id: 2,
        color_code: '#FACDC8'
    },
    {
        id: 3,
        color_code: '#F8B583'
    },
    {
        id: 4,
        color_code: '#CF9F76'
    },
    {
        id: 5,
        color_code: '#8D7260'
    },
    {
        id: 6,
        color_code: '#6A330C'
    },
]

const DataStore = ({ navigation }) => {
    const [checked, setChecked] = useState('');
    return (
        <VStack px={"25px"} pt={"30px"} bg={"white"} h={"full"}>
            {/* bagian header authentication */}
            <Text fontSize={"24px"} fontFamily={'heading'} mt={"20"} fontWeight={'semibold'}>Data Store</Text>
            <HStack>
                <Text
                    color={"gray.400"}
                    mr={1}
                    style={{ fontFamily: fonts.primary.normal }}>
                    Masukkan data yang sesuai untuk mempermudah kami menemukan barang yang sesuai untukmu
                </Text>
            </HStack>

            {/* bagian form */}
            <Stack mt={"20px"} mb={"15px"}>
                <Text fontSize={"14px"}>Berat Badan (kg)</Text>
                <Input placeholder='Masukkan berat badan mu' variant="underlined"></Input>
            </Stack>
            <Stack mt={"20px"} mb={"15px"}>
                <Text fontSize={"14px"}>Tinggi Badan (cm)</Text>
                <Input placeholder='Masukkan tinggi badan mu' variant="underlined"></Input>
            </Stack>
            <VStack mt={"20px"} mb={"15px"}>
                <Text fontSize={"14px"}>Pilih Tone Warna Kulit</Text>
                <Box mt={'6px'} mb={'30px'}>
                    <Stack direction='row' space={3} alignItems="flex-start">
                        {colors.map(data => {
                            return (
                                <Button w={'30px'} h={'30px'} p="0" variant="unstyled" style={{backgroundColor: data.color_code}} borderColor={checked === data.color_code ? 'blue.400' : 'gray.200'} borderWidth={2} onPress={() => setChecked(data.color_code)}></Button>
                            )
                        })}
                    </Stack>
                </Box>
            </VStack>
            <Button colorScheme={"cyan"} bg="cyan.700" style={{ fontFamily: fonts.primary[600] }} onPress={() => navigation.replace('DataStoreSuccess')}>Continue</Button>
        </VStack>
    )
}

export default DataStore