import React, {useState} from 'react'
import {StyleSheet} from 'react-native';
import { Box, Button, Center, HStack, Icon, IconButton, Input, Stack, Text, View, VStack } from 'native-base'
import { BackIcon } from '../../assets/icons'
import { CodeField, useBlurOnFulfill, useClearByFocusCell, Cursor } from 'react-native-confirmation-code-field'
const CELL_COUNT = 4;

const VerificationCode = ({navigation}) => {
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [value, setValue] = useState('');
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });

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
            <Text mt={"30px"} mb={"10px"} color={"warning.400"}>Kami sudah mengirimkan kode verifikasi
                ke nomor 0895******432</Text>

            {/* bagian form */}
            <Stack mt={"10px"} mb={"15px"}>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFiledRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[styles.cellRoot, isFocused && styles.focusCell]}>
                            <Text style={styles.cellText}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />
            </Stack>
            <Button colorScheme={"cyan"} bg="cyan.700" fontWeight={"semibold"} mt={"30px"} onPress={() => navigation.navigate('SignUpPasword')}>Continue</Button>
        </VStack>
    )
}

const styles = StyleSheet.create({
    root: {padding: 0, height: 300, },
    title: {textAlign: 'center', fontSize: 30},
    codeFiledRoot: {
      marginTop: 20,
      width: 350,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    cellRoot: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    cellText: {
      color: '#000',
      fontSize: 20,
      padding: 0,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    focusCell: {
      borderBottomColor: '#007AFF',
      borderBottomWidth: 2,
    },
  });

export default VerificationCode